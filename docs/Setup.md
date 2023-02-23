# How to set up 

## A. Plug in everything

Set up the cables and tablets as below.

![Scouting cable layout](Setup.png)

## B. Start backend

1. cd into the BackendServer directory
```bash
cd BackendServer
```
2. Start the database container
```bash
docker run -p 3306:3306 -p 33060:33060 --name "<name>" "backend" 
```
3. Wait 10-15 seconds for the container to boot
4. In a new terminal, start the server.
```bash
./start.sh
```
5. If you want backups, run the backup script in a new terminal:
```bash
python backup.py -d <name> <backup location>
```
6. If you want to periodically save CSVs, run the CSV script in a new terminal;
```bash
python saveCSV.py -d <backup location>
```

### To stop the backend:

1. Press Ctrl+C on the server and any backup scripts
2. Stop the database container
```bash
docker stop <name>
```

The next time you run the backend, you can instead use
```bash
docker start <name>
```
instead of `docker run` (unless you want an empty database)
