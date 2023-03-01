# How to prep everything

## Installing libraries

You need Python, Node.js, and Docker.

`cd` into each of the app directories, then run

```bash
npm install
```

Install the python dependencies.

```bash
pip install mysql-connector-python flask flask-cors gunicorn
```

A proper venv will be added eventually.

## Building apps

Build the MatchScouting, PitScouting, and SuperScouting apps.

```bash
./prepare.sh
```

They will be built and then copied into the `build` directory for quicker
deployment.

Build the MatchData app,

```bash
cd MatchData
npm run build-tablet
```

## Installing apps

Plug in a tablet using a USB cable. You will probably need to click "Allow" on
a dialog on the tablet, then you should be able to open the tablet on your
computer.

Copy everything in the `build` directory into the tablet's `Download` directory.

Check that you can open the apps by navigating to `file:///sdcard/Download` in
Chrome, then opening the file called `index.html` in one of the app
directories.

### Bookmarking apps

For easier access, you can bookmark the apps add add a bookmarks widget to the home screen.

## Building docker image

```bash
cd BackendServer
docker build . -t "backend"
```
