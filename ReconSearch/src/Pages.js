import React from 'react'
import { GetDataAuto, GetDataTele, Upload } from "./Form";
import Select from 'react-select'
import './App.css';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
export default function PopupGfg() {
    return (
        <div className="textArea">

            <Popup trigger=
                {<button className="chonk"> Auto Points </button>}
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                Auto Popup!
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                    Close popup
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
            <Popup trigger=
                {<button className="chonk"> Teleop Points </button>}
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                Teleop Popup!
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                    Close popup
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>

            <Popup trigger=
                {<button className="chonk"> Endgame Points </button>}
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                Endgame Popup
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                    Close popup
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>

            <br></br>

            <Popup trigger=
                {<button className="chonk"> Fouls </button>}
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                Foul Popup!
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                    Close popup
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>

            <Popup trigger=
                {<button className="chonk"> Tech Fouls </button>}
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                Tech Foul Popup!
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                    Close popup
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>

            <Popup trigger=
                {<button className="chonk"> Disabled? </button>}
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                Disabled? Not sure what this is here for.
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                    Close popup
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>

            <br></br>

            <Popup trigger=
                {<button className="chonk"> Yellow/Red Cards </button>}
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                Card average popup!
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                    Close popup
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>

            <Popup trigger=
                {<button className="chonk"> Pit Scouting Info </button>}
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                Info, also not sure how this popup works
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                    Close popup
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>

            <Popup trigger=
                {<button className="chonk"> All Matches </button>}
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                Matches, I do not know what will appear here either
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                    Close popup
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>

            <br></br>
        </div>

    )
};



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
        this.setState({ selectedOption });
        document.write(`Option selected:`, selectedOption.value);
    }

    render() {
        const { selectedOption } = this.state;
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

function Title(props) {
    return (
        <Page selected={props.selected} id="title">
            <p className="section-label">Recon Interface</p>
        </Page>
    );
}

function TeamInfo(props) {
    return (
        <Page selected={props.selected} className="page" id="teaminfo">
            <br></br>
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

<br></br>

function Photos(props) {
    return (
        <Page selected={props.selected} id="photos">
            <div>
                <br></br>
            </div>
            <div className="textArea">
                <h1>Photo of Robot?</h1>
                <Upload></Upload>
            </div>
            <br></br>
            <br></br>
            <br></br>
        </Page>
    );
}


export { TeamInfo, General, Photos, Title, SearchBar, PopupGfg };
