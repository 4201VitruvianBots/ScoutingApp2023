import './App.css';
import { SignIn, General } from "./Pages";
import React from "react";

const fields = [
    'Scouter_Name',
    'Competition',
    'Match_Number',
    'Team_Alliance',
    'Team_1',
    'Team_2',
    'Team_3',
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
        this.state = { signedIn: false, ScouterName: "", EventName: "", selected: 'sign-in', fouls: [] };
        this.SignInHandler = this.SignInHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.test2 = this.test2.bind(this)
        this.setFouls = this.setFouls.bind(this)
        this.clearForm = this.clearForm.bind(this);
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

    setFouls(newFouls) {
        this.setState({ fouls: newFouls });
    }

    handleSubmit(event) {
        event.preventDefault();
        const answers = event.target.elements;
        const data = fields.map(e => answers[e]?.value);
        const foulsList = this.state.fouls.map(e => [e[0], e[1], e[2]]).flat(0);
        const csv = csvStringify([data.concat(foulsList)]);
        localStorage.setItem('saved', localStorage.getItem('saved') + csv)
        event.target.submit();
        setTimeout(() => {
            event.target.reset();
            this.setFouls([]);
        }, 0)

    }

    downloadCSV() {
        download(csvStringify([fields]) + localStorage.getItem('saved'), 'Super_Scout.csv');
    }

    clearData() {
        if (window.confirm('Are you sure you want to clear all saved data?')) {
            localStorage.setItem('saved', '');
        }
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

                selectedPage = (<form action={`http://${process.env.REACT_APP_BACKEND_IP}/data/superScout`} method="POST" target="frame" id="myForm" onSubmit={this.handleSubmit}>

                    <input type='hidden' value={this.state.EventName} name='Competition' />
                    <input type='hidden' value={this.state.ScouterName} name='Scouter_Name' />
                    <input type='hidden' value={this.state.Alliance} name="Team_Alliance" />

                    <General fouls={this.state.fouls} setFouls={this.setFouls} downloadCSV={this.downloadCSV} clearData={this.clearData} />

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

                <iframe className="frame" name="frame" title="frame"></iframe>

            </main>
        );
    }

    clearForm() {
        document.getElementById("myForm").submit();
        const emptyFouls = () => { this.setFouls([]); }
        setTimeout(function () {
            document.getElementById("myForm").reset();
            emptyFouls();
        }, 0)


    }
}



// function TabButton(props) {
//     return <button onClick={() => props.onClick(props.tabId)}>{props.children}</button>;
// }



export default App;
