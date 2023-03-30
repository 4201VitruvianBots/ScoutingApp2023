# How to setup the python environment

```bash
python -m venv venv

# For Linux/Mac:
source venv/bin/activate
# For Windows:
venv/Scripts/Activate.ps1

pip install -r requirements.txt
```

# How to deactivate the python environment

```bash
deactivate
```

# How to start the development server

```bash
python main.py
```

# How to start the production server

```bash
gunicorn -w 1 --access-logfile - -b 0.0.0.0 main:app
```
