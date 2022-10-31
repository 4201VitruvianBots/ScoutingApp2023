import './App.css';
import { SignIn, PreGame, Auto, TeleOp, Endgame, SavePage } from "./Pages";
import React from "react";
import {QRCodeSVG} from 'qrcode.react';
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selected:"pre-game", ScouterName:"", EventName:""};
        this.setSelected = this.setSelected.bind(this);
        this.SignInHandler = this.SignInHandler.bind(this)
        this.SubmitHandler = this.SubmitHandler.bind(this)

    }

    SignInHandler(e) {
        e.preventDefault();
        const answers = e.target.elements;
        this.setState({ScouterName: answers.Sname.value, EventName: answers.Ename.value});
        return false;
    }

    SubmitHandler(e) {
        e.preventDefault();
        const answers = e.target.elements;
        ReactDOM.render(<QRCodeSVG value={
            `n=${this.state.ScouterName};` +
            `e=${this.state.EventName};` +
            `tn=${answers.Num.value};` +
            `a=${answers.Alliance.value};` +
            `t=${answers.Taxi.value};` +
            `na=${answers.noAuto.value};` +
            `au=${answers.autoUp.value};` +
            `al=${answers.autoLow.value};` +
            `tu=${answers.teleopUp.value};` +
            `tl=${answers.teleopLow.value};` +
            `f=${answers.foul.value};` +
            `tf=${answers.tfoul.value};` +
            `ct=${answers.climbType.value}`
        } />, document.getElementById("QRCode"));
        return false;
    }

    setSelected(id) {
        this.setState({selected: id});
    }

    render() {
      return (
        <main>
            <SignIn onSubmit={this.SignInHandler}/>
            <div className="selection">
                <TabButton onClick={this.setSelected} tabId="pre-game">Pre-Game</TabButton>
                <TabButton onClick={this.setSelected} tabId="auto">Auto</TabButton>
                <TabButton onClick={this.setSelected} tabId="tele-op">Teleop</TabButton>
                <TabButton onClick={this.setSelected} tabId="endgame">Endgame</TabButton>
                <TabButton onClick={this.setSelected} tabId="save-page">Save</TabButton>
            </div>
            <form onSubmit={this.SubmitHandler} action="#"> 
                <PreGame selected={this.state.selected === 'pre-game'}/>
                <Auto selected={this.state.selected === 'auto'} />
                <TeleOp selected={this.state.selected === 'tele-op'} />
                <Endgame selected={this.state.selected === 'endgame'} />
                <SavePage selected={this.state.selected === 'save-page'} />
            </form>
           
        </main>
        );
    }  
    
    QRcodeGenerator() {
        
    }
}

function TabButton(props) {
    return <button onClick={() => props.onClick(props.tabId)}>{props.children}</button>;
}



export default App;
