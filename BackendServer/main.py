from flask import Flask, request
from flask_cors import CORS
import mysql.connector
import atexit

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
    return [dict(zip(superScoutColumns, row)) for row in rows]                                                                                                                                                                                                        

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

    mycursor.execute('INSERT INTO superScout({}) VALUES ({})'.format(
        ', '.join(superScoutColumns),
        ', '.join(['%s'] * len(superScoutColumns))
    ), [format_data(formData[key], key) for key in superScoutColumns])

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
            suffixes = ('Low', 'Mid', 'High') if level == 'Total' else level

            included_columns = [f"{prefix}_{suffix}" for prefix in prefixes for suffix in suffixes ]

            for func in ('Average', 'AVG'), ('Max', 'MAX'):
                request = f"UPDATE dataAnalysis SET {type_phase}_{level}_{func[0]} = (SELECT {func[1]}({' + '.join(included_columns)}) FROM matchData WHERE Team_Number = %s) WHERE Team_Number = %s"
                # print(request)

                mycursor.execute(
                    request,
                    (Team_Number,Team_Number)
                )

    mycursor.execute("UPDATE dataAnalysis SET End_Balance_Frequency = (SELECT COUNT(*) FROM matchData WHERE Tele_Station = 1 AND Team_Number = %s) / (SELECT COUNT(*) FROM matchData WHERE Team_Number = %s) WHERE Team_Number = %s", (Team_Number,Team_Number,Team_Number))
    mycursor.execute("UPDATE dataAnalysis SET End_Dock_Frequency = (SELECT COUNT(*) FROM matchData WHERE (Tele_Station = 0 OR Tele_Station = 1) AND Team_Number = %s) / (SELECT COUNT(*) FROM matchData WHERE Team_Number = %s) WHERE Team_Number = %s", (Team_Number,Team_Number,Team_Number))
    mycursor.execute("UPDATE dataAnalysis SET Auto_Balance_Frequency = (SELECT COUNT(*) FROM matchData WHERE Auto_Station = 1 AND Team_Number = %s) / (SELECT COUNT(*) FROM matchData WHERE (Auto_Station = 0 OR Auto_Station = 1) AND Team_Number = %s) WHERE Team_Number = %s", (Team_Number,Team_Number,Team_Number))
    # mycursor.execute("UPDATE dataAnalysis SET Average_Cubes = (SELECT AVG(Auto_Cube_Low + Auto_Cube_Mid + Auto_Cube_High + Tele_Cube_Low + Tele_Cube_Mid + Tele_Cube_High) FROM matchData WHERE Team_Number = %s) WHERE Team_Number = %s", (Team_Number,Team_Number))
    # mycursor.execute("UPDATE dataAnalysis SET Average_Cones = (SELECT AVG(Auto_Cone_Low + Auto_Cone_Mid + Auto_Cone_High + Tele_Cone_Low + Tele_Cone_Mid + Tele_Cone_High) FROM matchData WHERE Team_Number = %s) WHERE Team_Number = %s", (Team_Number,Team_Number))
    # mycursor.execute("UPDATE dataAnalysis SET Average_Pieces = (SELECT AVG(Auto_Cone_Low + Auto_Cone_Mid + Auto_Cone_High + Tele_Cone_Low + Tele_Cone_Mid + Tele_Cone_High + Auto_Cube_Low + Auto_Cube_Mid + Auto_Cube_High + Tele_Cube_Low + Tele_Cube_Mid + Tele_Cube_High) FROM matchData WHERE Team_Number = %s) WHERE Team_Number = %s", (Team_Number,Team_Number))

    # mycursor.execute("UPDATE dataAnalysis SET Dock_Frequency = ")

    mydb.commit()
    print('Update Analysis run')

def updateFoulAnalysis(Team_Number):
    mycursor.execute('INSERT IGNORE INTO dataAnalysis(Team_Number) VALUES (%s)', (Team_Number,))
    mycursor.execute("UPDATE dataAnalysis SET Average_Fouls = (SELECT COUNT(*) FROM fouls WHERE Team_Number = %s) / (SELECT COUNT(*) FROM superScout WHERE Team_1 = %s OR TEAM_2 = %s OR TEAM_3 = %s) WHERE Team_Number = %s", (Team_Number,Team_Number,Team_Number,Team_Number,Team_Number))
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
    print("formatting data")
    print(string)
    print(name)
    if name[-3] == '[' and name[-1] == ']':
        name = name[:-3]

    if name in ('Scouter_Name', 'Competition', 'Team_Name', 'Comments','DriveTrain_Motor_Type', 'Working_On', 'Autos'):
        return string
    if name in ('Mobility', 'Show_Time', 'Can_Hold_Cone', 'Can_Hold_Cube'):
        return bool(string)

    len(string)
    if len(string)==0:
        print(f"string='{string}',with no spaces is empty")
        return (0)
    else:
        print(f"string='{string}',with no spaces is not empty")
    return int(string)

# Close connections before exit
def exit_handler():
    mycursor.close()
    mydb.close()

atexit.register(exit_handler)

if __name__ == '__main__':
    app.run(debug=True)
