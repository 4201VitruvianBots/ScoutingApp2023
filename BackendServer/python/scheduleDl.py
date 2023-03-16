import requests
from dotenv import load_dotenv
import json
import os

load_dotenv('.env.local')

# EVENT_KEY = '2023caph'
EVENT_KEY = '2023cala'

x = requests.get(
    f'https://www.thebluealliance.com/api/v3/event/{EVENT_KEY}/matches/simple',
    headers = {'accept': 'application/json', 'X-TBA-Auth-Key': os.environ['TBA_API_KEY']}
)

if x.status_code == 200:
    data = x.json()
    matches = {
        i['key'][len(EVENT_KEY) + 3:]: 
        [
            j[3:]
            for j in i['alliances']['red']['team_keys'] + i['alliances']['blue']['team_keys']
        ]
        for i in data 
        if i['key'][:len(EVENT_KEY) + 3] == EVENT_KEY + '_qm'
    }

    out = open('schedule.json', 'w')
    out.write(json.dumps(matches))
    out.close()
else:
    print('HTTP', x.status_code, x.reason)
    
