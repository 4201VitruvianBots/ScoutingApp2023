from dotenv import load_dotenv
import os
import requests
import json

load_dotenv('.env.local')

EVENT_KEY = '2023cabl'

x = requests.get(
    f'https://www.thebluealliance.com/api/v3/event/{EVENT_KEY}/teams/simple',
    headers = {'accept': 'application/json', 'X-TBA-Auth-Key': os.environ['TBA_API_KEY']}
)

if x.status_code == 200:
    data = x.json()
    t_array = []
    t_array.append({'value': None, 'label': 'Select...'})
    for team in data:
        teamNumber = team['team_number']
        t_array.append({'value': teamNumber, 'label': teamNumber})

    out = open('team.json', 'w')
    out.write(json.dumps(t_array))
    out.close()
else:
    print('HTTP', x.status_code, x.reason)

