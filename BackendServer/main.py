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

matchColumns = ('Match_Number', 'Team_Number', 'Scouter_Name', 'Team_Alliance', 'Competition', 'Mobility', 'Show_Time', 'Auto_Cube_Low', 'Auto_Cube_Mid', 'Auto_Cube_High', 'Auto_Cone_Low', 'Auto_Cone_Mid', 'Auto_Cone_High', 'Auto_Station', 'Tele_Cube_Low', 'Tele_Cube_Mid', 'Tele_Cube_High', 'Tele_Cone_Low', 'Tele_Cone_Mid', 'Tele_Cone_High', 'Tele_Station', 'Comments')
analysisColumns = ('Team_Number', 'Auto_Low_Min', 'Auto_Low_Average', 'Auto_low_Max', 'Auto_Mid_Min', 'Auto_Mid_Average', 'Auto_Mid_Max', 'Auto_High_Min', 'Auto_High_Average', 'Auto_High_Max', 'Tele_Low_Min', 'Tele_Low_Average', 'Tele_Low_Max', 'Tele_Mid_Min', 'Tele_Mid_Average', 'Tele_Mid_Max', 'Tele_High_Min', 'Tele_High_Average', 'Tele_High_Max', 'Average_Fouls', 'Game_Piece', 'Comments')
pitColumns = ('Scouter_Name', 'Team_Number', 'Competition', 'Team_Name', 'DriveTrain', 'Can_Hold_Cone', 'Can_Hold_Cube', 'Scoring_Location_Capability', 'Number_Of_Motors', 'Number_Of_Batteries', 'DriveTrain_Motor_Type', 'Working_On', 'Autos', 'Comments')

mycursor = mydb.cursor()

app = Flask(__name__)
CORS(app)

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


@app.route('/data/matches/match/<int:number>', methods=['GET'])
def handle_get_match(number):
    # Handle GET request
    return getRawMatchData(matchNumber=number)

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
    for phase in 'Auto', 'Tele':
        for level in 'Low', 'Mid', 'High':
            for func in ('Min', 'MIN'), ('Average', 'AVG'), ('Max', 'MAX'):
                mycursor.execute(f"UPDATE dataAnalysis SET {phase}_{level}_{func[0]} = (SELECT {func[1]}({phase}_Cone_{level} + {phase}_Cube_{level}) FROM matchData WHERE Team_Number = %s) WHERE Team_Number = %s" ,  (Team_Number,Team_Number))

    mydb.commit()
    print('Update Analysis run')

def getdataAnalysis(**kwargs):
    request = "SELECT * FROM dataAnalysis"
    requestInput = []
    if 'teamNumber' in kwargs:
        request += " WHERE Team_Number=%s"
        requestInput.append(kwargs['teamNumber'])
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
    return [dict(zip(analysisColumns, row)) for row in rows]
              

# Convert data to proper format
def format_data(string, name):
    print("formatting data")
    print(string)
    print(name)
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