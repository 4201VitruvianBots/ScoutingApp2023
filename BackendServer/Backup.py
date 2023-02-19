import os
import time

# Docker container name
CONTAINER_NAME = 'serene_hamilton'

# MySQL database credentials
DB_USER = 'root'
DB_PASSWORD = 'my-secret-pw'
DB_NAME = 'rawData'

# Backup file path
BACKUP_DIR = '/run/media/team4201/FFEF-EE8A/'
BACKUP_FILE_NAME = 'backup.sql'
BACKUP_FILE_PATH = os.path.join(BACKUP_DIR, BACKUP_FILE_NAME)

# Function to create a backup of the MySQL database
def backup_database():
    command = f'docker exec {CONTAINER_NAME} mysqldump -u {DB_USER} -p{DB_PASSWORD} {DB_NAME} > {BACKUP_FILE_PATH}'
    os.system(command)

# Run the backup function every 20 minutes
while True:
    backup_database()
    time.sleep(1200)  # 20 minutes = 20 * 60 seconds = 1200 seconds
