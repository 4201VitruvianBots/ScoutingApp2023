import React from 'react'
import { GetDataAuto, GetDataTele } from "./Form";
import Select from 'react-select'
import './App.css';

const options = [
    { value: 'amogus', label: 'Amogus' },
    { value: 'imposter', label: 'Imposter' },
    { value: 'crewmate', label: 'Crewmate' }
]

function Among(props) {
    return (
        <Select options={options} />
    );
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
                <div className="">
                    <h2>Team number (sync)</h2>
                </div>

                <p><strong>Score Averages</strong></p>
                <GetDataAuto />

                <p><strong>Teleop Average</strong></p>
                <GetDataTele />
                <br></br>
                <p><strong>Cargo Abilities</strong></p>
                <p><strong>Cargo Preference</strong></p>
            </div>
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
        </Page>
    );
}

function SavePage(props) {
    return (
        <Page selected={props.selected} id="save-page">
        </Page>
    );
}

export { TeamInfo, General, Photos, SavePage, Among };
