import os

# Docker container name
CONTAINER_NAME = 'crazy_agnesi'

# MySQL database credentials
DB_USER = 'root'
DB_PASSWORD = 'my-secret-pw'
DB_NAME = 'rawData'

# Backup file path
BACKUP_FILE_PATH = '/run/media/team4201/FFEF-EE8A/backup.sql'
BACKUP_FILE_CONTAINER = '/backup.sql'
# Copy the backup file into the container
command = f'docker cp {BACKUP_FILE_PATH} {CONTAINER_NAME}:{BACKUP_FILE_CONTAINER}'
os.system(command)

# Restore the database from the backup file
command = f'docker exec -i {CONTAINER_NAME} mysql -u {DB_USER} -p{DB_PASSWORD} {DB_NAME} <<< "use {DB_NAME}; source {BACKUP_FILE_CONTAINER};"'

os.system(command)
