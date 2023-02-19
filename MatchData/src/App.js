import './App.css';
import { PopupGfg, SearchBar, Title, options } from "./Pages";
import React from "react";
import QRCode from 'react-qr-code';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: false, ScouterName: "",
            EventName: "",
            selectedOption1: options[0],
            selectedOption2: options[0],
            selectedOption3: options[0],
            selectedOption4: options[0],
            selectedOption5: options[0],
            selectedOption6: options[0],
            data: null
        };
        this.setSelectedOption1 = this.setSelectedOption1.bind(this);
        this.setSelectedOption2 = this.setSelectedOption2.bind(this);
        this.setSelectedOption3 = this.setSelectedOption3.bind(this);

        this.setSelectedOption4 = this.setSelectedOption4.bind(this);
        this.setSelectedOption5 = this.setSelectedOption5.bind(this);
        this.setSelectedOption6 = this.setSelectedOption6.bind(this);

        this.setSelected = this.setSelected.bind(this);
        this.SignInHandler = this.SignInHandler.bind(this)
        this.SubmitHandler = this.SubmitHandler.bind(this)

    }

    setSelectedOption1(e) {
        this.setState({ selectedOption1: e });
    }
    setSelectedOption2(e) {
        this.setState({ selectedOption2: e });
    }
    setSelectedOption3(e) {
        this.setState({ selectedOption3: e });
    }
    setSelectedOption4(e) {
        this.setState({ selectedOption4: e });
    }
    setSelectedOption5(e) {
        this.setState({ selectedOption5: e });
    }
    setSelectedOption6(e) {
        this.setState({ selectedOption6: e });
    }

    async componentDidMount() {
        await this.componentDidUpdate({ selectedOption: { value: null } });
    }

    // Replace all props with state
    async componentDidUpdate(prevProps, prevState) {
        if (prevState.selectedOption.value === this.state.selectedOption.value) return;
        // GET request using fetch with async/await
        const response = await fetch(`http://${process.env.REACT_APP_BACKEND_IP}:5000/data/analysis/team/` + this.state.selectedOption.value, { crossDomain: true, method: 'GET' });
        this.setState({ data: await response.json() });
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

    setSelected(id) {
        this.setState({ selected: id });
    }

    render() {

        return (
            <main>
                <form onSubmit={this.SubmitHandler} action="#">
                    <Title selected={this.state.selected === 'title'} />

                    <SearchBar setSelectedOption={this.setSelectedOption1} selectedOption={this.state.selectedOption1} />
                    <SearchBar setSelectedOption={this.setSelectedOption2} selectedOption={this.state.selectedOption2} />
                    <SearchBar setSelectedOption={this.setSelectedOption3} selectedOption={this.state.selectedOption3} />

                    <SearchBar setSelectedOption={this.setSelectedOption4} selectedOption={this.state.selectedOption4} />
                    <SearchBar setSelectedOption={this.setSelectedOption5} selectedOption={this.state.selectedOption5} />
                    <SearchBar setSelectedOption={this.setSelectedOption6} selectedOption={this.state.selectedOption6} />

                    <PopupGfg data={this.state.data} />
                    {/* <General selected={this.state.selected === 'general'} /> */}

                    {/* <SavePage selected={this.state.selected === 'save-page'} QRCode={this.state.QRCode} /> */}
                </form>
            </main>
        );
    }

}

export default App;