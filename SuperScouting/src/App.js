import './App.css';
import { SignIn, General } from "./Pages";
import React from "react";
import QRCode from 'react-qr-code';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { signedIn: false, ScouterName: "", EventName: "", selected: 'sign-in' };
        this.SignInHandler = this.SignInHandler.bind(this)
        this.SubmitHandler = this.SubmitHandler.bind(this)
        this.test2 = this.test2.bind(this)
    }

    SignInHandler(e) {
        e.preventDefault();
        const answers = e.target.elements;
        this.setState({
            signedIn: true,
            ScouterName: answers.Scouter_Name.value,
            EventName: answers.Competition.value,
            Alliance: answers.Team_Alliance.value,
            QRCode: null
        });
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
                `${answers.GeneralUp.value}\t` +
                `${answers.GeneralLow.value}\t` +
                `${answers.PhotosUp.value}\t` +
                `${answers.PhotosLow.value}\t` +
                `${answers.foul.value}\t` +
                `${answers.tfoul.value}\t` +
                `${answers.climbType.value}\t` +
                `${answers.notes.value}`
            } size={512} />
        });
        return false;
    }

    test2(id) {
        this.setState({
            selected: id
        })
        console.log('I\'ve been called ' + (id));
    }

    render() {
        let selectedPage;

        switch (this.state.selected) {
            case 'sign-in':
                selectedPage = <SignIn onSubmit={this.SignInHandler} />;

                break;
            case 'general':
                selectedPage = (<form action="http://127.0.0.1:5000/data/superScout" method="POST" target="frame" id="myForm" onSubmit={clearForm}>
                    <input type='hidden' value={this.state.EventName} name='Competition' />
                    <input type='hidden' value={this.state.ScouterName} name='Scouter_Name' />
                    <input type='hidden' value={this.state.Alliance} name="Team_Alliance" />
                    <General />


                </form>);
                break;
            default:
        }


        return (
            <main>
                <p className="page-title">Welcome to Vitruvian Scouting</p>
                <input type="button" onClick={() => this.test2('sign-in')} value="Sign In" className="nav" />
                <input type="button" onClick={() => this.test2('general')} value="Fouls" className="nav" />
                {selectedPage}

                <iframe name="frame" title="frame"></iframe>

            </main>
        );
    }
}

function clearForm() {
    document.getElementById("myForm").submit();
    setTimeout(function () {
        document.getElementById("myForm").reset();
    }, 0)
}

// function TabButton(props) {
//     return <button onClick={() => props.onClick(props.tabId)}>{props.children}</button>;
// }



export default App;
