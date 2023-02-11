import './App.css';
import React from "react";
import {MainPage, MatchArchive, AllMatches, MatchData} from './Pages';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { signedIn: false, ScouterName: "", EventName: "", selected: "MainPage"};
        this.setSelected = this.setSelected.bind(this);

    }


    setSelected(id) {
        this.setState({ selected: id });
    }
    render() {

        let selectedPage;

        switch (this.state.selected) {
            case 'MainPage':
                selectedPage = <MainPage/>;
                break;
            case 'MatchArchive':
                selectedPage = <MatchArchive/>;
                break;
            case 'AllMatches': 
                selectedPage = <AllMatches/>;
                break;
            case 'MatchData':
                selectedPage = <MatchData/>
                break;
            default:
        }
        return (
            <main>
                <input type="button" onClick={() => this.setSelected('MainPage')} value="Main Page" />
                <input type="button" onClick={() => this.setSelected('MatchArchive')} value="Match Archive" />
                <input type="button" onClick={() => this.setSelected('AllMatches')} value="All Matches" />
                <input type="button" onClick={() => this.setSelected('MatchData')} value="Match Data" />
                {selectedPage}   
            </main>
        );
    }

}

export default App;
