import React from 'react'
import { GetDataAuto, GetDataTele, Upload } from "./Form";
import Select from 'react-select'
import './App.css';

const options = [
    { value: 0, label: 'Test One' },
    { value: 1, label: 'Test Two' },
    { value: 2, label: 'Test Three' }
];

class SearchBar extends React.Component {
    state = {
        selectedOption: null,
    }
    handleChange = (selectedOption) => {
        this.setState({selectedOption});
        document.write(`Option selected:`, selectedOption.value);
    }

    render() {
        const {selectedOption} = this.state;
        return (
        <div>
            <Select 
            options={options} 
            value={selectedOption}
            onChange={this.handleChange}
            />
        </div>
        );
    }
}

function Page(props) {
    return (
        <div className={props.selected ? 'page selected' : 'page'} id={props.id}>
            {props.children}
        </div>
    );
}

function TeamInfo(props) {
    return (
        <Page selected={props.selected} className="page" id="teaminfo">
            <p className="section-label">Team Info</p>
            <div className="textArea">
                <h2>Team number (sync)</h2>

                <p><strong>Score Averages</strong></p>
                <GetDataAuto />

                <p><strong>Teleop Average</strong></p>
                <GetDataTele />
                <br></br>
                <p><strong>Cargo Abilities</strong></p>
                <p>Can pick up: (cone, cube, or both)</p>
                <p><strong>Cargo Preference</strong></p>
                <p>Prefers to pick up: _________</p>
            </div>
            <br></br>

            <div className="textArea">
                <div>
                    <button className="chonk">auto points</button>
                    <button className="chonk">teleop points</button>
                    <button className="chonk">endgame points</button>
                </div>

                <div>
                    <button className="chonk">fouls</button>
                    <button className="chonk">tech fouls</button>
                    <button className="chonk">disabled?</button>
                </div>

                <div>
                    <button className="chonk">yellow/red cards?</button>
                    <button className="chonk">pit scouting info</button>
                    <button className="chonk">all matches</button>
                </div>

            </div>
            <br></br>
            <div className="textArea">
                <h1>photo of robot?</h1>
                <Upload></Upload>
                <br></br>
            </div>

            <br></br>
            <br></br>
            <br></br>
        </Page>
    );
}

function General(props) {
    return (
        <Page selected={props.selected} id="comments">
            <p className="section-label">Comments</p>
            <div className="textArea">
                <div className="gallery">
                    <strong><p>info about the effort the team puts in</p></strong>

                    <input type="textbox" placeholder="Type here"></input>
                    <button>submit comment</button>
                </div>
            </div>
        </Page>
    );
}

function Photos(props) {
    return (
        <Page selected={props.selected} id="photos">
            <p className="section-label">Photos</p>
            <div className="textArea">
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

        </Page>
    );
}

function SavePage(props) {
    return (
        <Page selected={props.selected} id="save-page">
        </Page>
    );
}

export { TeamInfo, General, Photos, SavePage, SearchBar };
