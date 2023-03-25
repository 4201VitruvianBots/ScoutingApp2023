import './App.css';
import { SignIn, PreGame, Auto, TeleOp, SavePage, Navigation } from "./Pages";
import React from "react";

const fields = [
    'Match_Number',
    'Team_Number',
    'Scouter_Name',
    'Team_Alliance',
    'Competition',
    'Mobility',
    'Auto_Cube_Low',
    'Auto_Cube_Mid',
    'Auto_Cube_High',
    'Auto_Cone_Low',
    'Auto_Cone_Mid',
    'Auto_Cone_High',
    'Auto_Station',
    'Tele_Cube_Low',
    'Tele_Cube_Mid',
    'Tele_Cube_High',
    'Tele_Cone_Low',
    'Tele_Cone_Mid',
    'Tele_Cone_High',
    'Tele_Station',
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
    console.log(data);
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
        this.state = { signedIn: false, ScouterName: "", EventName: "" };
        this.setSelected = this.setSelected.bind(this);
        this.SignInHandler = this.SignInHandler.bind(this)
    }


    setSelected(id) {
        this.setState({ selected: id });
    }

    SignInHandler(e) {
        e.preventDefault();
        const answers = e.target.elements;
        this.setState({ signedIn: true, ScouterName: answers.Scouter_Name.value, EventName: answers.Competition.value, QRCode: null });
        return false;
    }

    handleSubmit = (event) => {
        try {
            event.preventDefault();
            const answer = window.confirm("Would you like to submit the form?");
            if (answer) {
                // Save it!
                const answers = event.target.elements;
                const data = fields.map(e => answers[e]?.value);
                const csv = csvStringify([data]);
                const time = new Date();
                const hour = time.getHours().toString().padStart(2, '0');
                const minute = time.getMinutes().toString().padStart(2, '0');
                download(csv, `Match_Scout_${hour}${minute}.csv`)
                // localStorage.setItem('matchData', localStorage.getItem('matchData') + csv)
                event.target.submit();
                setTimeout(function () {
                    event.target.reset();
                    window.location.href = "#SignIn"
                }, 0);
            } else {
                // Do nothing!
                console.log("Thing was not saved to the database.");
            }
        } catch (e) {
            alert(e.message + '\nPlease return this tablet to the scouting coordinators before submitting');
        }
    };

    // downloadCSV() {
    //     download(csvStringify([fields]) + localStorage.getItem('matchData'), 'Match_Scout.csv');
    // }

    // clearData() {
    //     if (window.confirm('STOP!!! Ask a scouting coordinator before pressing "ok" :)')) {
    //         localStorage.setItem('matchData', '');
    //     }
    // }

    render() {
        return (
            <main>
                <br></br>
                <br></br>
                <p className="page-title">Welcome to Vitruvian Scouting</p>
                <Navigation selected={this.state.selected === 'navigation'} />
                {/* <SignIn selected={this.state.selected === 'sign-in'} /> */}
                <SignIn onSubmit={this.SignInHandler} />
                {/*
            <div >
                <TabButton headerButtonsonClick={this.setSelected} tabId="pre-game">Pre-Game</TabButton>
                <TabButton onClick={this.setSelected} tabId="auto">Auto</TabButton>
                <TabButton onClick={this.setSelected} tabId="tele-op">Teleop</TabButton>
                <TabButton onClick={this.setSelected} tabId="endgame">Endgame</TabButton>
                <TabButton onClick={this.setSelected} tabId="save-page">Save</TabButton>
            </div>
      */}


                <form action={`http://${process.env.REACT_APP_BACKEND_IP}/data/matches`} method="POST" target="frame" id="myForm" onSubmit={this.handleSubmit}>
                    <input type='hidden' value={this.state.EventName} name='Competition' />
                    <input type='hidden' value={this.state.ScouterName} name='Scouter_Name' />
                    <PreGame selected={this.state.selected === 'pre-game'} />
                    <Auto selected={this.state.selected === 'auto'} />
                    <TeleOp selected={this.state.selected === 'tele-op'} />

                    <SavePage selected={this.state.selected === 'save-page'} QRCode={this.state.QRCode} />
                    {/* <input type="submit" className="submit-button"></input> */}
                </form>
                <iframe name="frame" title="frame"></iframe>

            </main>
        );
    }

}

export default App;
