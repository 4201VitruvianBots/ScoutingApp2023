import './App.css';
import { SignIn, PreGame, Auto, TeleOp, SavePage} from "./Pages";
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
                <p className="page-title">Welcome to Vit<span class="o">ruvian Scouting</span></p>
                {/*
            <div >
                <TabButton headerButtonsonClick={this.setSelected} tabId="pre-game">Pre-Game</TabButton>
                <TabButton onClick={this.setSelected} tabId="auto">Auto</TabButton>
                <TabButton onClick={this.setSelected} tabId="tele-op">Teleop</TabButton>
                <TabButton onClick={this.setSelected} tabId="endgame">Endgame</TabButton>
                <TabButton onClick={this.setSelected} tabId="save-page">Save</TabButton>
            </div>
      */}
                <form action="http://127.0.0.1:5000/data" method="POST">
                    <SignIn selected={this.state.selected === 'sign-in'} />
                    <PreGame selected={this.state.selected === 'pre-game'} />
                    <Auto selected={this.state.selected === 'auto'} />
                    <TeleOp selected={this.state.selected === 'tele-op'} />

                    <SavePage selected={this.state.selected === 'save-page'} QRCode={this.state.QRCode} />
                    {/* <input type="submit" className="submit-button"></input> */}
                </form>

            </main>
        );
    }

    QRcodeGenerator() {

    }
}

// function TabButton(props) {
//     return <button onClick={() => props.onClick(props.tabId)}>{props.children}</button>;
// }



export default App;
