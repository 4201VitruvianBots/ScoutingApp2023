import './App.css';
import React from "react";
import { MainPage } from './Pages';
import { MatchArchive } from './Pages.js';
import { AllMatches } from './Pages';   

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
            default:
        }
        return (
            <main>
                {selectedPage}   
            </main>
        );
    }

}



export default App;
