import os
import time
from datetime import datetime
import sys

# Docker container name
CONTAINER_NAME = 'crazy_agnesi'

# MySQL database credentials
DB_USER = 'root'
DB_PASSWORD = 'my-secret-pw'
DB_NAME = 'rawData'

# Backup file path
BACKUP_DIR = '/run/media/team4201/FFEF-EE8A/'

# Function to create a backup of the MySQL database
def backup_database():
    file_path = os.path.join(BACKUP_DIR, f'backup_{datetime.now().strftime("%Y%m%d_%H%M")}.sql')
    command = f'docker exec {CONTAINER_NAME} mysqldump -u {DB_USER} -p{DB_PASSWORD} {DB_NAME} > {file_path}'
    os.system(command)
    print('Backup succesfully saved')

if '-d' in sys.argv:
    # Run the backup function every 20 minutes
    while True:
        backup_database()
        time.sleep(1200)  # 20 minutes = 20 * 60 seconds = 1200 seconds
else:
    backup_database()
