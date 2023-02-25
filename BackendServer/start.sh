gunicorn -w 1 --access-logfile - -b 0.0.0.0 main:app
