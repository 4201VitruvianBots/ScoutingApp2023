import './App.css';
import { SignIn, PreGame, Auto, TeleOp, SavePage, Navigation } from "./Pages";
import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { signedIn: false, ScouterName: "", EventName: "" };
        this.setSelected = this.setSelected.bind(this);

    }


    setSelected(id) {
        this.setState({ selected: id });
    }

    render() {
        return (
            <main>
                <br></br>
                <br></br>
                <p className="page-title">Welcome to Vitruvian Scouting</p>
                <Navigation selected={this.state.selected === 'navigation' } />
               
                {/*
            <div >
                <TabButton headerButtonsonClick={this.setSelected} tabId="pre-game">Pre-Game</TabButton>
                <TabButton onClick={this.setSelected} tabId="auto">Auto</TabButton>
                <TabButton onClick={this.setSelected} tabId="tele-op">Teleop</TabButton>
                <TabButton onClick={this.setSelected} tabId="endgame">Endgame</TabButton>
                <TabButton onClick={this.setSelected} tabId="save-page">Save</TabButton>
            </div>
      */}

                <form action="http://127.0.0.1:5000/data/matches" method="POST" target="frame" id="myForm" onSubmit={clearForm}>
                    <SignIn selected={this.state.selected === 'sign-in'} />
                    <PreGame selected={this.state.selected === 'pre-game'} />
                    <Auto selected={this.state.selected === 'auto'} />
                    <TeleOp selected={this.state.selected === 'tele-op'} />

                    <SavePage selected={this.state.selected === 'save-page'} QRCode={this.state.QRCode} />
                    {/* <input type="submit" className="submit-button"></input> */}
                </form>
                <iframe name="frame" title="frame"></iframe>
            <iframe g={

            </main>
        );
    }

}

// Test on slower connection in the future vvv
function clearForm() { 
    document.getElementById("myForm").submit();
    setTimeout(function() {
        document.getElementById("myForm").reset();
        window.location.href="#SignIn"
    }, 0)
} 

export default App;
