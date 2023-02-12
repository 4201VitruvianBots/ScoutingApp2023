import requests
import json

x = requests.get('https://www.thebluealliance.com/api/v3/event/2016nytr/matches/simple', headers = {"X-TBA-Auth-Key": "Luh2AdZHPiwiZ30XTWcNjH1rPff96xeRmzid5nDwDwYJF0DMlmeZXMxRFdIJsPjK"})

output = x.json()
matchTeams = [{
    'red': [int(team[3:]) for team in match['alliances']['red']['team_keys']],
    'blue':[int(team[3:]) for team in match['alliances']['blue']['team_keys']]
} for match in output]
print(x.status_code)

file = open('src/matches.json', 'w')
file.write(json.dumps(matchTeams, indent=2))
file.close()
