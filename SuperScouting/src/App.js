import './App.css';
import { SignIn, SavePage, RobotData, Red1, Red2, Red3} from "./Pages";
import React from "react";
import QRCode from 'react-qr-code';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { signedIn: false, ScouterName: "", EventName: "" };
        this.setSelected = this.setSelected.bind(this);
        this.SignInHandler = this.SignInHandler.bind(this)
        this.SubmitHandler = this.SubmitHandler.bind(this)
    }

    SignInHandler(e) {
        e.preventDefault();
        const answers = e.target.elements;
        this.setState({ signedIn: true, ScouterName: answers.Sname.value, EventName: answers.Ename.value, QRCode: null });
        return false;
    }

    SubmitHandler(e) {
        e.preventDefault();
        const answers = e.target.elements;
        this.setState({
            QRCode: <QRCode value={
                `${this.state.ScouterName}\t` +
                `${this.state.EventName}\t` +
                `${answers.match.value}\t` +
                `${answers.Num.value}\t` +
                `${answers.Alliance.value}\t` +
                `${answers.autoUp.value}\t` +
                `${answers.autoLow.value}\t` +
                `${answers.teleopUp.value}\t` +
                `${answers.teleopLow.value}\t` +
                `${answers.foul.value}\t` +
                `${answers.tfoul.value}\t` +
                `${answers.climbType.value}\t` +
                `${answers.notes.value}`
            } size={512} />
        });
        return false;
    }

    setSelected(id) {
        this.setState({ selected: id });
    }

    render() {
        return (
            <main>
                <p className="page-title">Welcome to Vitruvian Scouting</p>
                {/*
            <div >
                <TabButton headerButtonsonClick={this.setSelected} tabId="pre-game">Pre-Game</TabButton>
                <TabButton onClick={this.setSelected} tabId="auto">Auto</TabButton>
                <TabButton onClick={this.setSelected} tabId="tele-op">Teleop</TabButton>
                <TabButton onClick={this.setSelected} tabId="endgame">Endgame</TabButton>
                <TabButton onClick={this.setSelected} tabId="save-page">Save</TabButton>
            </div>
      */}
                      <form action="http://127.0.0.1:5000/data" method="POST" target="frame" id="myForm" onSubmit={clearForm}>
                    <SignIn selected={this.state.selected === 'sign-in'} />
                    <RobotData selected={this.state.selected === 'robot 1'} />
                    <Red1 selected={this.state.selected === 'red 1'} />
                    <Red2 selected={this.state.selected === 'red 2'} />
                    <Red3 selected={this.state.selected === 'red 3'} />
                    <SavePage selected={this.state.selected === 'save-page'} />

                    {/* <RobotData selected={this.state.selected === 'robot 2'} />
                    <RobotData selected={this.state.selected === 'robot 3'} /> */}
                    </form>
                    <iframe name="frame"></iframe>
            </main>
        );
    }

}
function clearForm() { 
    document.getElementById("myForm").submit();
    setTimeout(function() {
        document.getElementById("myForm").reset();
        window.location.href="#SignIn"
    }, 0)
} 

export default App;