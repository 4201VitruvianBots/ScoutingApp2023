import './App.css';
import { SignIn, General, Photos, SavePage } from "./Pages";
import { options } from "./Form";
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
    'Drivetrain_Photo',
    'Intake_Photo',
    'Uptake_Photo',
    'Outtake_Photo',
    'Extras_Photo',
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

// function csvStringify(data) {
//     console.log(data);
//     return data.map(e => (
//         e.map(e2 => {
//             if (e2.includes('"') || e2.includes('\n') || e2.includes('\r') || e2.includes(',')) {
//                 return '"' + e2.replaceAll('"', '""') + '"';
//             }
//             return e2;
//         }).join(',') + '\r\n'
//     )).join('');
// }

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { signedIn: false, ScouterName: "", EventName: "", teamOption: options[0] };
        this.SignInHandler = this.SignInHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setTeamOption = this.setTeamOption.bind(this);
    }

    setTeamOption(teamOption) {
        this.setState({ teamOption: teamOption });
    }

    SignInHandler(e) {
        e.preventDefault();
        const answers = e.target.elements;
        this.setState({ signedIn: true, ScouterName: answers.Scouter_Name.value, EventName: answers.Competition.value, QRCode: null });
        return false;
    }

    handleSubmit(event) {
        try {
            event.preventDefault();

            const answer = window.confirm("Would you like to submit the form?");
            if (answer) {
                const answers = event.target.elements;
                const data = fields.map(e => [e, answers[e]?.value]);
                const dataObject = Object.fromEntries(data);
                const time = new Date();
                console.log(data);
                const hour = time.getHours().toString().padStart(2, '0');
                const minute = time.getMinutes().toString().padStart(2, '0');
                const teamNum = data[2][1];
                download(JSON.stringify(dataObject), `Pit_Scout_${hour}${minute}_Team-Num-${teamNum}.json`)
                event.target.reset();
                this.setTeamOption({ value: null });
                window.location.href = "#SignIn"
                // Save it!

            } else {
                // Do nothing!
                console.log("Thing was not saved to the database.");
            }
        } catch (e) {
            alert(e.message + '\nPlease return this tablet to the scouting coordinators before submitting');
        }
    }

    render() {
        return (
            <main>
                <p className="page-title">Welcome to Vitruvian Scouting</p>
                {<SignIn onSubmit={this.SignInHandler} />}


                <form action={`http://${process.env.REACT_APP_BACKEND_IP}/data/pits`} method="POST" id="myForm" onSubmit={this.handleSubmit}>
                    <input type='hidden' value={this.state.EventName} name='Competition' />
                    <input type='hidden' value={this.state.ScouterName} name='Scouter_Name' />

                    <General selected={this.state.selected === 'general'} teamOption={this.state.teamOption} setTeamOption={this.setTeamOption} />
                    <Photos selected={this.state.selected === 'photos'} />
                    <SavePage selected={this.state.selected === 'save-page'} QRCode={this.state.QRCode} />

                </form>


            </main>
        );
    }
}





export default App;
