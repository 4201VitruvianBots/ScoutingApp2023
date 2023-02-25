import './App.css';
import { PopupGfg, Photos, SearchBar, Title, options } from "./Pages";
import React from "react";
import QRCode from 'react-qr-code';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { signedIn: false, ScouterName: "", EventName: "", selectedOption: options[0], data: null };
        this.setSelectedOption = this.setSelectedOption.bind(this);
        this.setSelected = this.setSelected.bind(this);
        this.SignInHandler = this.SignInHandler.bind(this)
        this.SubmitHandler = this.SubmitHandler.bind(this)

    }
    
    setSelectedOption(e) {
        this.setState({ selectedOption: e });
    }
    
    async componentDidMount() {
        await this.componentDidUpdate({selectedOption: {value: null}});
    }

    // Replace all props with state
    async componentDidUpdate(prevProps, prevState) {
        if (prevState.selectedOption.value === this.state.selectedOption.value) return;
        // GET request using fetch with async/await
        const response = await fetch(`http://${process.env.REACT_APP_BACKEND_IP}/data/analysis/team/` + this.state.selectedOption.value, { crossDomain: true, method: 'GET' });
        this.setState({data: await response.json()});
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
                    <SearchBar setSelectedOption={this.setSelectedOption} selectedOption={this.state.selectedOption} />
                    <PopupGfg data={this.state.data}/>
                    {/* <General selected={this.state.selected === 'general'} /> */}
                    <Photos selected={this.state.selected === 'photos'} />
                    {/* <SavePage selected={this.state.selected === 'save-page'} QRCode={this.state.QRCode} /> */}
                </form>
            </main>
        );
    }

}

export default App;
