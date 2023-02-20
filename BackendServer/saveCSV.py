import sys
import time
import mysql.connector
import csv

SAVE_DIR = '/run/media/team4201/FFEF-EE8A/'
TABLES = ('matchData', 'dataAnalysis', 'pitData', 'superScout','fouls')

def saveCSVs():
    mydb = mysql.connector.connect(
        host="localhost",
        user="root",
        passwd="my-secret-pw",
        database="rawData"
    )

    mycursor = mydb.cursor()

    for table in TABLES:
        mycursor.execute("SHOW COLUMNS FROM " + table)
        columnList = mycursor.fetchall()
        # Return name of column
        headers = [column[0] for column in columnList]
        mycursor.execute(f'SELECT * FROM {table}')
        rows = mycursor.fetchall()

        with open(SAVE_DIR + table + '.csv', 'w') as csvfile:
            csvwriter = csv.writer(csvfile)
            csvwriter.writerow(headers)
            csvwriter.writerows(rows)
    
    print('CSVs successfully saved')

if '-d' in sys.argv:
    while True:
        saveCSVs()
        time.sleep(1200)
else:
    saveCSVs()