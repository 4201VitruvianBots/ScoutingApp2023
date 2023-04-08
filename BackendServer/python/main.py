from flask import Flask, request, send_file
from flask_cors import CORS
import mysql.connector
import atexit
import time
import json
import threading

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="my-secret-pw",
  database="rawData"
)

mycursor = mydb.cursor()

app = Flask(__name__)
CORS(app)

def get_columns(table):
    mycursor.execute("SHOW COLUMNS FROM " + table)
    columnList = mycursor.fetchall()
    # Return name of column
    return [column[0] for column in columnList]


matchColumns = get_columns('matchData')
analysisColumns = get_columns('dataAnalysis')
pitColumns = get_columns('pitData')
superScoutColumns = get_columns('superScout')
foulColumns = get_columns('fouls')

try:
    with open('schedule.json') as schedule_file:
        schedule = json.loads(schedule_file.read())
except:
    schedule = None

scoutersStatus = {'registered': {str(i): {'Scouter_Name': '', 'Team_Number': '', 'Battery_Level': '', 'Last_Update': 0, 'Online': False} for i in range(8)}, 'unregistered': 0}
unregisteredScouters = {}

# Position:
# 0 Red 1
# 1 Red 2
# 2 Red 3
# 3 Blue 1
# 4 Blue 2
# 5 Blue 3
# 6 Red SS
# 7 Blue SS

@app.route('/data/status', methods=['POST'])
def handle_status():
    data = request.get_json()
    address = request.remote_addr
    if (data.get('Position') == None):
        if not address in unregisteredScouters:
            unregisteredScouters[address] = time.time()
    else:
        if address in unregisteredScouters:
            del unregisteredScouters[address]

        scoutersStatus['registered'][data.get('Position')] = {
            'Scouter_Name': data.get('Scouter_Name'),
            'Team_Number': data.get('Team_Number'),
            'Match_Number': data.get('Match_Number'),
            'Battery_Level': data.get('Battery_Level'),
            'Last_Update': time.time(),
            'Online': True
        }
    scoutersStatus['unregistered'] = len(unregisteredScouters)

    return 'OK', 200

@app.route('/data/status/tablets', methods=['GET'])
def handle_get_tablets():
    return scoutersStatus

def checker_thread():
    while True:
        for i in scoutersStatus['registered']:
            if scoutersStatus['registered'][i]['Last_Update'] + 6 < time.time():
                scoutersStatus['registered'][i]['Online'] = False
        for i in unregisteredScouters:
            if unregisteredScouters[i] + 6 < time.time():
                del unregisteredScouters[i]
        scoutersStatus['unregistered'] = len(unregisteredScouters)
        time.sleep(1)

@app.before_first_request
def start_thread():
    x = threading.Thread(target=checker_thread, daemon=True)
    x.start()

@app.route('/schedule.json', methods=['GET'])
def handle_get_schedule_json():
    if schedule == None:
        return 'File not found', 404
    return schedule

@app.route('/data/status/matches', methods=['GET'])
def handle_get_matches():
    request = 'SELECT Match_Number, Team_Alliance, Team_Number FROM matchData'
    mycursor.execute(request)
    dbMatches = mycursor.fetchall()
    request = 'SELECT Match_Number, Team_Alliance FROM superScout'
    mycursor.execute(request)
    dbSScout = mycursor.fetchall()

    # request = 'SELECT Match_Number, Team_Number FROM superScout'
    # mycursor.execute(request)
    # superScoutMatches = mycursor.fetchall()
    
    if schedule == None:
        matches = {}
    else:
        matches = {match: [{'teamNumber': i, 'submitted': 0} for i in teamNumbers] + [{'submitted': 0}, {'submitted': 0}] for match, teamNumbers in schedule.items()}

    for i in dbMatches:
        match_num = str(i[0])

        if not match_num in matches:
            matches[match_num] = [{'submitted': 0} for i in range(8)]

        entry = {'teamNumber': str(i[2]), 'submitted': matches[match_num][i[1]]['submitted'] + 1}

        matches[match_num][i[1]].update(entry)
    
    for i in dbSScout:
        match_num = str(i[0])
        
        if not match_num in matches:
            matches[match_num] = [{'submitted': 0} for i in range(8)]
        
        matches[match_num][i[1] + 6]['submitted'] += 1
    
    return matches

@app.route('/data/status', methods=['GET'])
def handle_get_status():
    return {'tablets': handle_get_tablets(), 'matches': handle_get_matches()}

@app.route('/data/matches', methods=['GET'])
def handle_get():
    # Handle GET request
    return getRawMatchData()

@app.route('/data/analysis', methods=['GET'])
def handle_get5():
    # Handle GET request
    return getdataAnalysis()

@app.route('/data/pits', methods=['GET'])
def handle_get4():
    request = "SELECT * FROM pitData"
    mycursor.execute(request)
    rows = mycursor.fetchall()

    # Format with column names
    return [dict(zip(pitColumns, row)) for row in rows]


@app.route('/data/matches/team/<int:number>', methods=['GET'])
def handle_get_team(number):
    # Handle GET request
    return getRawMatchData(teamNumber=number)

@app.route('/data/analysis/team/<int:number>', methods=['GET'])
def handle_get_team2(number):
    # Handle GET request
    rows = getdataAnalysis(teamNumber=number)
    if len(rows) == 0:
        return "robot not found :3", 404
    return rows[0]

@app.route('/data/analysis/sortby/<column>')
def handle_get3(column):
    return getdataAnalysis(sortBy=column)


@app.route('/data/matches/match/<int:number>', methods=['GET'])
def handle_get_match(number):
    # Handle GET request
    return getRawMatchData(matchNumber=number)


@app.route('/data/fouls', methods=['GET'])
def handle_get_fouls():
    return getRawFoulData()

@app.route('/data/fouls/team/<int:number>', methods=['GET'])
def handle_get_fouls_team(number):
    return getRawFoulData(teamNumber=number)

@app.route('/data/fouls/match/<int:number>', methods=['GET'])
def handle_get_fouls_match(number):
    return getRawFoulData(matchNumber=number)

def getRawMatchData(**kwargs):
    request = "SELECT * FROM matchData"
    requestInput = []
    if 'teamNumber' in kwargs:
        request += " WHERE Team_Number=%s"
        requestInput.append(kwargs['teamNumber'])
    if 'matchNumber' in kwargs:
        request += " WHERE Match_Number=%s"
        requestInput.append(kwargs['matchNumber'])
    if 'sortBy' in kwargs:
        request += " ORDER BY %s"
        requestInput.append(kwargs['sortBy'])
    if 'limitTo' in kwargs:
        request += " LIMIT %s"
        requestInput.append(kwargs['limitTo'])
    print(requestInput,request)
    mycursor.execute(request,requestInput)
    rows = mycursor.fetchall()

    # Format with column names
    return [dict(zip(matchColumns, row)) for row in rows]
              
def getRawFoulData(**kwargs):
    request = "SELECT * FROM fouls"
    requestInput = []
    if 'teamNumber' in kwargs:
        request += " WHERE Team_Number=%s"
        requestInput.append(kwargs['teamNumber'])
    if 'matchNumber' in kwargs:
        request += " WHERE Match_Number=%s"
        requestInput.append(kwargs['matchNumber'])
    # if 'sortBy' in kwargs:
    #     request += " ORDER BY %s"
    #     requestInput.append(kwargs['sortBy'])
    # if 'limitTo' in kwargs:
    #     request += " LIMIT %s"
    #     requestInput.append(kwargs['limitTo'])
    print(requestInput,request)
    mycursor.execute(request,requestInput)
    rows = mycursor.fetchall()

    # Format with column names
    return [dict(zip(foulColumns, row)) for row in rows]                                                                                                                                                                                                        

@app.route('/data/matches', methods=['POST'])
def handle_post():
    # Handle POST request
    formData = request.form
    # data = request.get_json()
    print(formData)

    # Insert all data into table
    mycursor.execute('INSERT INTO matchData({}) VALUES ({})'.format(
        ', '.join(formData.keys()),
        ', '.join(['%s'] * len(formData))
    ), [format_data(formData[key], key) for key in formData])

    mydb.commit()
    updateAnalysis(formData.get("Team_Number"))
    defineChargePoints(formData.get("Team_Number"))
    updateDockRatio(formData.get("Team_Number"))
    #for i in variable:
       # print(i)
    # Do something with the data
    return 'Data received'

@app.route('/data/superScout', methods=['POST'])
def handle_post6():
    # Handle POST request
    formData = request.form
    # data = request.get_json()
    print(formData)

    # Insert all data into table
    for i in range(int(formData['length'])):
        mycursor.execute(
            'INSERT INTO fouls(Scouter_Name, Competition, Match_Number, Team_Alliance, Team_Number, Cause, Comments) VALUES(%s, %s, %s, %s, %s, %s, %s)',
            [format_data(formData[key], key) for key in ['Scouter_Name', 'Competition', 'Match_Number', 'Team_Alliance', f"Team_Number[{i}]", f"Cause[{i}]", f"Comments[{i}]"]]
        )

    entries = [1,2,3]

    for team in entries:
        mycursor.execute(
            'INSERT INTO superScout(Scouter_Name, Competition, Match_Number, Team_Alliance, Team, Defense, Comments) VALUES(%s, %s, %s,%s, %s, %s, %s)',
            [format_data(formData[key], key) for key in ['Scouter_Name', 'Competition', 'Match_Number', 'Team_Alliance', f'Team_{team}', f'Team_{team}_Defense', 'Comments']]
         )

    mydb.commit()
    for num in ('1','2','3'):
        updateFoulAnalysis(formData.get('Team_' + num))
        
    #for i in variable:
       # print(i)
    # Do something with the data
    return 'Data received'

@app.route('/data/pits', methods=['POST'])
def handle_post3():
    # Handle POST request
    formData = request.form
    # data = request.get_json()

    # Insert all data into table
    mycursor.execute('INSERT INTO pitData({}) VALUES ({})'.format(
        ', '.join(formData.keys()),
        ', '.join(['%s'] * len(formData))
    ), [format_data(formData[key], key) for key in formData])   

    mydb.commit()
    #for i in variable:
       # print(i)
    # Do something with the data
    return 'Data received'


def updateAnalysis(Team_Number):
    mycursor.execute('INSERT IGNORE INTO dataAnalysis(Team_Number) VALUES (%s)', (Team_Number,))

    for type_phase, prefixes in ('Auto', ('Auto_Cone', 'Auto_Cube')), ('Tele_Pieces', ('Tele_Cone', 'Tele_Cube')), ('Tele_Cone', ('Tele_Cone',)), ('Tele_Cube', ('Tele_Cube',)):

        for level in 'Total', 'Low', 'Mid', 'High':
            suffixes = ('Low', 'Mid', 'High') if level == 'Total' else (level,)

            included_columns = [f"{prefix}_{suffix}" for prefix in prefixes for suffix in suffixes ]

            for stat, func in ('Average', 'AVG'), ('Max', 'MAX'):
                request = f"UPDATE dataAnalysis SET {type_phase}_{level}_{stat} = (SELECT {func}({' + '.join(included_columns)}) FROM matchData WHERE Team_Number = %s AND No_Show_Robot = FALSE) WHERE Team_Number = %s"

                mycursor.execute(
                    request,
                    (Team_Number,Team_Number)
                )

    mycursor.execute("UPDATE dataAnalysis SET End_Balance_Frequency = (SELECT COUNT(*) FROM matchData WHERE Tele_Station = 3 AND Team_Number = %s AND No_Show_Robot = FALSE) / NULLIF((SELECT COUNT(*) FROM matchData WHERE Team_Number = %s AND No_Show_Robot = FALSE), 0) WHERE Team_Number = %s", (Team_Number,Team_Number,Team_Number))
    mycursor.execute("UPDATE dataAnalysis SET End_Dock_Frequency = (SELECT COUNT(*) FROM matchData WHERE (Tele_Station = 2 OR Tele_Station = 3) AND Team_Number = %s AND No_Show_Robot = FALSE) / NULLIF((SELECT COUNT(*) FROM matchData WHERE Team_Number = %s AND No_Show_Robot = FALSE), 0) WHERE Team_Number = %s", (Team_Number,Team_Number,Team_Number))
    mycursor.execute("UPDATE dataAnalysis SET Auto_Balance_Frequency = (SELECT COUNT(*) FROM matchData WHERE Auto_Station = 2 AND Team_Number = %s AND No_Show_Robot = FALSE) / NULLIF((SELECT COUNT(*) FROM matchData WHERE (Auto_Station = 1 OR Auto_Station = 2) AND Team_Number = %s AND No_Show_Robot = FALSE), 0) WHERE Team_Number = %s", (Team_Number,Team_Number,Team_Number))
    mycursor.execute("UPDATE dataAnalysis SET Average_Teleop_Points = (SELECT ((Tele_Pieces_Low_Average * 2) + (Tele_Pieces_Mid_Average * 3) + (Tele_Pieces_High_Average * 5))) WHERE Team_Number = %s", (Team_Number, ))
    mycursor.execute("UPDATE dataAnalysis SET Average_Auto_Points = (SELECT ((Auto_Low_Average * 3) + (Auto_Mid_Average * 4) + (Auto_High_Average * 6))) WHERE Team_Number = %s", (Team_Number, ))
    # mycursor.execute("UPDATE dataAnalysis SET Average_Cubes = (SELECT AVG(Auto_Cube_Low + Auto_Cube_Mid + Auto_Cube_High + Tele_Cube_Low + Tele_Cube_Mid + Tele_Cube_High) FROM matchData WHERE Team_Number = %s) WHERE Team_Number = %s", (Team_Number,Team_Number))
    # mycursor.execute("UPDATE dataAnalysis SET Average_Con
    #es = (SELECT AVG(Auto_Cone_Low + Auto_Cone_Mid + Auto_Cone_High + Tele_Cone_Low + Tele_Cone_Mid + Tele_Cone_High) FROM matchData WHERE Team_Number = %s) WHERE Team_Number = %s", (Team_Number,Team_Number))
    # mycursor.execute("UPDATE dataAnalysis SET Average_Pieces = (SELECT AVG(Auto_Cone_Low + Auto_Cone_Mid + Auto_Cone_High + Tele_Cone_Low + Tele_Cone_Mid + Tele_Cone_High + Auto_Cube_Low + Auto_Cube_Mid + Auto_Cube_High + Tele_Cube_Low + Tele_Cube_Mid + Tele_Cube_High) FROM matchData WHERE Team_Number = %s) WHERE Team_Number = %s", (Team_Number,Team_Number))

    #UPDATE dataAnalysis SET Tele_Pieces_Total_Max = 
    #(SELECT MAX(Tele_Cone_Low + Tele_Cone_Mid + Tele_
    #Cone_High + Tele_Cube_Low + Tele_Cube_Mid + Tele_
    #Cube_High) FROM matchData WHERE Team_Number = %s) 
    #WHERE Team_Number = %s

    # mycursor.execute("UPDATE dataAnalysis SET Dock_Frequency = ")


    mydb.commit()
    print('Update Analysis run')

def defineChargePoints(Team_Number):
    mycursor.execute('INSERT IGNORE INTO chargeStation(Team_Number) VALUES (%s)', (Team_Number,))

    #no points
    mycursor.execute("UPDATE chargeStation SET No_Points = (SELECT COUNT(*) FROM matchData WHERE Tele_Station = 0 AND Team_Number = %s) WHERE Team_Number = %s", (Team_Number,Team_Number))
    #parked
    mycursor.execute("UPDATE chargeStation SET Parked = (SELECT COUNT(*) FROM matchData WHERE Tele_Station = 1 AND Team_Number = %s) WHERE Team_Number = %s", (Team_Number,Team_Number))
    #failed to balance
    mycursor.execute("UPDATE chargeStation SET Failed_To_Dock = (SELECT COUNT(*) FROM matchData WHERE Tele_Station = 2 AND Team_Number = %s) WHERE Team_Number = %s", (Team_Number,Team_Number))
    #docked
    mycursor.execute("UPDATE chargeStation SET Docked = (SELECT COUNT(*) FROM matchData WHERE Tele_Station = 3 AND Team_Number = %s) WHERE Team_Number = %s", (Team_Number,Team_Number))
    #engaged
    mycursor.execute("UPDATE chargeStation SET Engaged = (SELECT COUNT(*) FROM matchData WHERE Tele_Station = 4 AND Team_Number = %s) WHERE Team_Number = %s", (Team_Number,Team_Number))

    
    mydb.commit()
    print('Update defineChargePoints run')

        
def updateDockRatio(Team_Number):
    mycursor.execute("UPDATE dataAnalysis SET Failed_To_Dock_Ratio = (SELECT (Failed_To_Dock / (Parked + Docked + Engaged)) FROM chargeStation WHERE Team_Number = %s LIMIT 1)", (Team_Number,))
    mydb.commit()
    print('Update dock ratio run')

# def updateDockRatio(Team_Number):
#     mycursor.execute("UPDATE dataAnalysis SET Failed_To_Dock_Ratio = (SELECT (Failed_To_Dock / (Parked + Docked + Engaged)) FROM chargeStation WHERE Team_Number = %s)", (Team_Number, ))
#     mydb.commit()
#     print('Update dock ratio run')



def updateFoulAnalysis(Team_Number):
    mycursor.execute('INSERT IGNORE INTO dataAnalysis(Team_Number) VALUES (%s)', (Team_Number,))
    mycursor.execute("UPDATE dataAnalysis SET Average_Fouls = (SELECT COUNT(*) FROM fouls WHERE Team_Number = %s) / (SELECT COUNT(*) FROM superScout WHERE Team = %s) WHERE Team_Number = %s", (Team_Number,Team_Number,Team_Number))
    for index, name in (1, 'Pin'), (2, 'Disabled'), (3, 'Overextension'), (4, 'Inside_Robot'), (5, 'Multiple_Pieces'), (6, 'Inside_Protected'):
        mycursor.execute(f"UPDATE dataAnalysis SET Total_{name}_Fouls = (SELECT COUNT(*) FROM fouls WHERE Team_Number = %s AND CAUSE = %s) WHERE Team_Number = %s", (Team_Number, index, Team_Number))

    mydb.commit()

def getdataAnalysis(**kwargs):
    request = "SELECT * FROM dataAnalysis"
    requestInput = []
    if 'teamNumber' in kwargs:
        request += " WHERE Team_Number=%s"
        requestInput.append(kwargs['teamNumber'])
    if 'sortBy' in kwargs:
        if kwargs['sortBy'] in analysisColumns:
            request += f" ORDER BY {kwargs['sortBy']} DESC"
        else:
            return "Column not found", 404
    if 'limitTo' in kwargs:
        request += " LIMIT %s"
        requestInput.append(kwargs['limitTo'])
    print(requestInput,request)
    mycursor.execute(request,requestInput)
    rows = mycursor.fetchall()

    # Format with column names
    return [dict(zip(analysisColumns, row)) for row in rows]
              

# Convert data to proper format
def format_data(string, name):
    # print("formatting data")
    # print(string)
    # print(name)
    if name[-3] == '[' and name[-1] == ']':
        name = name[:-3]

    if name in ('Scouter_Name', 'Competition', 'Team_Name', 'Comments','DriveTrain_Motor_Type', 'Working_On', 'Autos'):
        return string
    if name in ('Mobility', 'Show_Time', 'Can_Hold_Cone', 'Can_Hold_Cube', 'No_Show_Robot'):
        return string == 'true'

    # len(string)
    if len(string)==0:
        # print(f"string='{string}',with no spaces is empty")
        return (0)
    # else:
        # print(f"string='{string}',with no spaces is not empty")
    return int(string)

# Close connections before exit
def exit_handler():
    mycursor.close()
    mydb.close()

atexit.register(exit_handler)

if __name__ == '__main__':
    app.run(debug=True)
