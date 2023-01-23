from flask import Flask, request
import mysql.connector
import atexit

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="my-secret-pw",
  database="rawData"
)

columns = ('Match_Number', 'Team_Number', 'Scouter_Name', 'Team_Alliance', 'Competition', 'Mobility', 'Show_Time', 'Auto_Cube_Low', 'Auto_Cube_Mid', 'Auto_Cube_High', 'Auto_Cone_Low', 'Auto_Cone_Mid', 'Auto_Cone_High', 'Auto_Station', 'Tele_Cube_Low', 'Tele_Cube_Mid', 'Tele_Cube_High', 'Tele_Cone_Low', 'Tele_Cone_Mid', 'Tele_Cone_High', 'Tele_Station', 'Comments')

mycursor = mydb.cursor()

app = Flask(__name__)

@app.route('/data', methods=['GET'])
def handle_get():
    # Handle GET request
    return getRawMatchData()

@app.route('/data/team/<int:teamNumber>', methods=['GET'])
def handle_get2(teamNumber):
    # Handle GET request
    return getRawMatchData(teamNumber=teamNumber)

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
    return [dict(zip(columns, row)) for row in rows]


@app.route('/data', methods=['POST'])
def handle_post():
    # Handle POST request
    formData = request.form
    # data = request.get_json()

    # Insert all data into table
    mycursor.execute('INSERT INTO matchData({}) VALUES ({})'.format(
        ', '.join(formData.keys()),
        ', '.join(['%s'] * len(formData))
    ), [format_data(formData[key], key) for key in formData])

    mydb.commit()
    #for i in variable:
       # print(i)
    # Do something with the data
    return 'Data received'

# Convert data to proper format
def format_data(string, name):
    if name in ('Scouter_Name', 'Competition', 'Comments'):
        return string
    if name in ('Mobility', 'Show_Time'):
        return bool(string)
    return int(string)

# Close connections before exit
def exit_handler():
    mycursor.close()
    mydb.close()

atexit.register(exit_handler)

if __name__ == '__main__':
    app.run(debug=True)