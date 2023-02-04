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
                <p>Admin App</p>
            </main>
        );
    }

}

// Test on slower connection in the future vvv

export default App;
