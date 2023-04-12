import './App.css';
import { SignIn, General } from "./Pages";
import { options } from './Form'
import React from "react";

const fields = [
    'Scouter_Name',
    'Competition',
    'Match_Number',
    'Team_Alliance',
    'Team_1',
    'Team_2',
    'Team_3',
    'Comments'
];

function download(data, title) {
    const blob = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = title;
    link.href = url;
    link.click();
}

function csvStringify(data) {
    return data.map(e => (
        e.map(e2 => {
            if (e2.includes('"') || e2.includes('\n') || e2.includes('\r') || e2.includes(',')) {
                return '"' + e2.replaceAll('"', '""') + '"';
            }
            return e2;
        }).join(',') + '\r\n'
    )).join('');
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { signedIn: false, ScouterName: "", EventName: "", selected: 'sign-in', fouls: [], matchSchedule: null, team1: options[0], team2: options[0], team3: options[0], matchNumber: null };
        this.SignInHandler = this.SignInHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.test2 = this.test2.bind(this)
        this.setFouls = this.setFouls.bind(this)
        this.clearForm = this.clearForm.bind(this);
        this.setTeamOption1 = this.setTeamOption1.bind(this);
        this.setTeamOption2 = this.setTeamOption2.bind(this);
        this.setTeamOption3 = this.setTeamOption3.bind(this);
        this.setMatchNumber = this.setMatchNumber.bind(this);
        this.handleMatchUpdate = this.handleMatchUpdate.bind(this);
    }

    setTeamOption1(option) {
        this.setState({ team1: option });
    }

    setTeamOption2(option) {
        this.setState({ team2: option });
    }

    setTeamOption3(option) {
        this.setState({ team3: option });
    }

    setMatchNumber(matchNumber) {
        this.setState({ matchNumber: matchNumber });
        this.handleMatchUpdate(matchNumber);
    }

    handleMatchUpdate(matchNumber) {
        const team1 = this.state.matchSchedule?.[matchNumber]?.[3 * parseInt(this.state.Alliance) + 0]?.toString();
        const team2 = this.state.matchSchedule?.[matchNumber]?.[3 * parseInt(this.state.Alliance) + 1]?.toString();
        const team3 = this.state.matchSchedule?.[matchNumber]?.[3 * parseInt(this.state.Alliance) + 2]?.toString();
        if (team1 !== undefined) this.setTeamOption1({ label: team1, value: team1 });
        if (team2 !== undefined) this.setTeamOption2({ label: team2, value: team2 });
        if (team3 !== undefined) this.setTeamOption3({ label: team3, value: team3 });
    }

    SignInHandler(e) {
        e.preventDefault();
        const answers = e.target.elements;
        this.setState({
            signedIn: true,
            ScouterName: answers.Scouter_Name.value,
            EventName: answers.Competition.value,
            Alliance: answers.Team_Alliance.value,
            QRCode: null
        });
        return false;
    }

    setFouls(newFouls) {
        this.setState({ fouls: newFouls });
    }

    handleSubmit(event, handleMatchUpdate) {
        try {
            event.preventDefault();
            const answer = window.confirm("Would you like to submit the form?");
            if (answer) {
                const answers = event.target.elements;
                const data = fields.map(e => answers[e]?.value);
                const foulsList = this.state.fouls.map(e => [e[0], e[1], e[2]]).flat(0);
                const csv = csvStringify([data.concat(foulsList)]);
                const time = new Date();
                const hour = time.getHours().toString().padStart(2, '0');
                const minute = time.getMinutes().toString().padStart(2, '0');
                const matchNum =  data[2];
                const teamNum1 = data[4];
                const teamNum2 = data[5];
                const teamNum3 = data[6];
                download(csv, `Super_Scout_${hour}${minute}_Match-${matchNum}_Teams-${teamNum1}-${teamNum2}-${teamNum3}.csv`)
                // localStorage.setItem('superScoutData', localStorage.getItem('superScoutData') + csv)
                event.target.submit();
                const prevMatch = parseInt(answers.Match_Number.value);
                setTimeout(() => {
                    event.target.reset();
                    answers.Match_Number.value = prevMatch + 1;
                    this.handleMatchUpdate(prevMatch + 1);
                    this.setFouls([]);
                }, 0)
                // Save it!

            } else {
                // Do nothing!
                console.log("Thing was not saved to the database.");
            }
        } catch (e) {
            alert(e.message + '\nPlease return this tablet to the scouting coordinators before submitting');
        }
    }

    // downloadCSV() {
    //     download(csvStringify([fields]) + localStorage.getItem('superScoutData'), 'Super_Scout.csv');
    // }

    // clearData() {
    //     if (window.confirm('STOP!!! Ask a scouting coordinator before pressing "ok" :)')) {
    //         localStorage.setItem('superScoutData', '');
    //     }
    // }

    test2(id) {
        this.setState({
            selected: id
        })
        console.log('I\'ve been called ' + (id));
    }

    componentDidMount() {
        const url = `http://${process.env.REACT_APP_BACKEND_IP}/data/status`;

        const fetchData = async () => {
            let position;
            switch (this.state.Alliance) {
                case '0': position = '6'; break;
                case '1': position = '7'; break;
                default: position = null; break;
            }

            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        Scouter_Name: this.state.ScouterName,
                        Match_Number: this.state.matchNumber,
                        Battery_Level: this.state.BatteryLevel,
                        Position: position
                    })
                });
                const ok = response.ok;
                this.setState({ connected: ok });
            } catch (error) {
                console.log("error", error);
                this.setState({ connected: false });
            }
        };

        const interval = setInterval(fetchData, 5000);

        if (navigator.getBattery !== undefined) {
            navigator.getBattery().then(batteryManager => {
                const updateBatteryLevel = (event) => {
                    this.setState({ BatteryLevel: batteryManager.level })
                };

                batteryManager.onlevelchange = updateBatteryLevel;
                updateBatteryLevel();
            });
        }

        let scheduleInterval;

        const fetchSchedule = async () => {
            const url = `http://${process.env.REACT_APP_BACKEND_IP}/schedule.json`;
            try {
                const response = await fetch(url);
                if (response.ok) {
                    const data = await response.json();
                    this.setState({ matchSchedule: data });
                }
                clearInterval(scheduleInterval);
            } catch (error) {
            }
        }

        scheduleInterval = setInterval(fetchSchedule, 10000);

        return function cleanup() {
            clearInterval(interval);
            clearInterval(scheduleInterval);
        };
    }

    render() {
        let selectedPage;

        switch (this.state.selected) {
            case 'sign-in':
                selectedPage = <SignIn onSubmit={this.SignInHandler} />;

                break;
            case 'general':

                selectedPage = (<form action={`http://${process.env.REACT_APP_BACKEND_IP}/data/superScout`} method="POST" target="frame" id="myForm" onSubmit={this.handleSubmit}>


                    <input type='hidden' value={this.state.EventName} name='Competition' />
                    <input type='hidden' value={this.state.ScouterName} name='Scouter_Name' />
                    <input type='hidden' value={this.state.Alliance} name="Team_Alliance" />

                    <General
                        fouls={this.state.fouls} setFouls={this.setFouls}
                        // downloadCSV={this.downloadCSV} clearData={this.clearData}
                        connected={this.state.connected}
                        teamOption1={this.state.team1} setTeamOption1={this.setTeamOption1}
                        teamOption2={this.state.team2} setTeamOption2={this.setTeamOption2}
                        teamOption3={this.state.team3} setTeamOption3={this.setTeamOption3}
                        matchNumber={this.state.matchNumber} setMatchNumber={this.setMatchNumber}
                    />

                </form>);
                break;
            default:
        }


        return (
            <main>
                <p className="page-title">Welcome to Vitruvian Scouting</p>

                <input type="button" onClick={() => this.test2('sign-in')} value="Sign In" className="nav" />
                <input type="button" onClick={() => this.test2('general')} value="Fouls" className="nav" />

                {selectedPage}

                <iframe className="frame" name="frame" title="frame"></iframe>

            </main>
        );
    }

    clearForm() {
        document.getElementById("myForm").submit();
        const emptyFouls = () => { this.setFouls([]); }
        setTimeout(function () {
            document.getElementById("myForm").reset();
            emptyFouls();
        }, 0)


    }
}

// function alliancecolor() {
//     return (
//         <div className='app'></div>
//     )
// }

// function TabButton(props) {
//     return <button onClick={() => props.onClick(props.tabId)}>{props.children}</button>;
// }



export default App;
