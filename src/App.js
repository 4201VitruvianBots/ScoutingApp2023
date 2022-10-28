import './App.css';
import { SignIn, PreGame, Auto, TeleOp, Endgame, SavePage } from "./Pages";
import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selected:"pre-game"};
        this.setSelected = this.setSelected.bind(this);
    }
    setSelected(id) {
        this.setState({selected: id});
    }

    render() {
      return (
        <main>
            <SignIn />
            <div>
                <TabButton onClick={this.setSelected} tabId="pre-game">Pre-Game</TabButton>
                <TabButton onClick={this.setSelected} tabId="auto">Auto</TabButton>
                <TabButton onClick={this.setSelected} tabId="tele-op">Teleop</TabButton>
                <TabButton onClick={this.setSelected} tabId="endgame">Endgame</TabButton>
                <TabButton onClick={this.setSelected} tabId="save-page">Save</TabButton>
            </div>
            <PreGame selected={this.state.selected === 'pre-game'}/>
            <Auto selected={this.state.selected === 'auto'} />
            <TeleOp selected={this.state.selected === 'tele-op'} />
            <Endgame selected={this.state.selected === 'endgame'} />
            <SavePage selected={this.state.selected === 'save-page'} />
        </main>
        );
    }   
}

function TabButton(props) {
    return <button onClick={() => props.onClick(props.tabId)}>{props.children}</button>;
}

export default App;
