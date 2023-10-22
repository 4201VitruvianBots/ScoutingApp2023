# Start docker backend
cd /BackendServer/docker/
docker run -p 3306:3306 -p 33060:33060 backend &

# Wait until server has fully started
sleep 20

# Start interface
cd ../python
source venv/bin/activate
gunicorn -w 1 --access-logfile - -b 0.0.0.0 main:app &

# Wait until user signals to stop the server
echo "Server started!"
read -p "Press enter to stop backend server"

# Stops the server
docker stop $(docker ps -a -q)
pkill gunicorn
echo "Server stopped"