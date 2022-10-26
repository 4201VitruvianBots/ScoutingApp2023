import './App.css';
import { SignIn, PreGame, Auto, TeleOp, Endgame, SavePage } from "./Pages";
import React from "react";

class App extends React.Component {
  constructor() {
    this.State = {id:"Pre-Game"}
  }
    render() {
      return (
        <main>
            <SignIn />
            <div>
                <TabButton tabId="pre-game">Pre-Game</TabButton>
            </div>
            <PreGame selected={false}/>
            <Auto selected={false} />
            <TeleOp selected={false} />
            <Endgame selected={false} />
            <SavePage selected={false} />
        </main>
        );
        this.setState = this.setState.bind(this)

    }   
        
    setState() {
            this.setState
           
        }
}

function TabButton(props) {
    <button>{props.children}</button>  
}

export default App;
