import os
import time
from datetime import datetime
import sys

continuous = False
if '-d' in sys.argv:
    sys.argv.remove('-d')
    continuous = True

# Docker container name
CONTAINER_NAME = sys.argv[1]

# MySQL database credentials
DB_USER = 'root'
DB_PASSWORD = 'my-secret-pw'
DB_NAME = 'rawData'

# Backup file path
BACKUP_DIR = sys.argv[2]

# Function to create a backup of the MySQL database
def backup_database():
    file_path = os.path.join(BACKUP_DIR, f'backup_{datetime.now().strftime("%Y%m%d_%H%M")}.sql')
    command = f'docker exec {CONTAINER_NAME} mysqldump -u {DB_USER} -p{DB_PASSWORD} {DB_NAME} > {file_path}'
    os.system(command)
    print('Backup succesfully saved')

print(continuous)

if continuous:
    # Run the backup function every 20 minutes
    while True:
        backup_database()
        time.sleep(1200)  # 20 minutes = 20 * 60 seconds = 1200 seconds
else:
    backup_database()
