import './App.css';
import { SignIn, General, Photos, SavePage } from "./Pages";
import React from "react";

const fields = [
    'Scouter_Name',
    'Competition',
    'Team_Number',
    'DriveTrain',
    'Can_Hold_Cone',
    'Can_Hold_Cube',
    'Low',
    'Mid',
    'High',
    'Number_Of_Motors',
    'Number_Of_Batteries',
    'DriveTrain_Motor_Type',
    'Autos',
    'Working_On',
    // 'Drivetrain_Photo',
    // 'Intake_Photo',
    // 'Uptake_Photo',
    // 'Outtake_Photo',
    // 'Extras_Photo',
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
        this.SignInHandler = this.SignInHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.downloadCSV = this.downloadCSV.bind(this);
        this.clearData = this.clearData.bind(this);
    }

    SignInHandler(e) {
        e.preventDefault();
        const answers = e.target.elements;
        this.setState({ signedIn: true, ScouterName: answers.Scouter_Name.value, EventName: answers.Competition.value, QRCode: null });
        return false;
    }

    handleSubmit(event) {
        event.preventDefault();
        const answers = event.target.elements;
        const data = fields.map(e => answers[e]?.value);
        const csv = csvStringify([data]);
        localStorage.setItem('saved', localStorage.getItem('saved') + csv)
        event.target.reset();
    }

    downloadCSV() {
        download(csvStringify([fields]) + localStorage.getItem('saved'), 'Pit_Scout.csv');
    }

    clearData() {
        if (window.confirm('STOP!!! Ask a scouting coordinator before pressing "ok" :)')) {
            localStorage.setItem('saved', '');
        }
    }

    render() {
        return (
            <main>
                <p className="page-title">Welcome to Vitruvian Scouting</p>
                {<SignIn onSubmit={this.SignInHandler} />}

                {/*
            <div >
                <TabButton headerButtonsonClick={this.setSelected} tabId="pre-game">Pre-Game</TabButton>
                <TabButton onClick={this.setSelected} tabId="General">General</TabButton>
                <TabButton onClick={this.setSelected} tabId="tele-op">Photos</TabButton>
                <TabButton onClick={this.setSelected} tabId="endgame">Endgame</TabButton>
                <TabButton onClick={this.setSelected} tabId="save-page">Save</TabButton>
            </div>
      */}
                <form action={`http://${process.env.REACT_APP_BACKEND_IP}/data/pits`} method="POST" id="myForm" onSubmit={this.handleSubmit}>
                    <input type='hidden' value={this.state.EventName} name='Competition' />
                    <input type='hidden' value={this.state.ScouterName} name='Scouter_Name' />

                    <General selected={this.state.selected === 'general'} />
                    <Photos selected={this.state.selected === 'photos'} />
                    <SavePage selected={this.state.selected === 'save-page'} QRCode={this.state.QRCode} downloadCSV={this.downloadCSV} clearData={this.clearData} />

                </form>


            </main>
        );
    }
}

// function TabButton(props) {
//     return <button onClick={() => props.onClick(props.tabId)}>{props.children}</button>;
// }



export default App;
