import React from 'react'
import { GetDataAuto, GetDataTele, Upload } from "./Form";
import Select from 'react-select'
import './App.css';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function PopupGfg(props) {
    return (
        <div className="textArea">

            <Popup trigger=
                {<button className="chonk"> Auto Points </button>}
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                <h3>Auto Points Average</h3>
                            </div>
                            <div className="popuplocation">
                                <button className="popupbutton">High: {props.data?.Auto_High_Average}</button>
                                <br></br>
                                <button className="popupbutton">Middle: {props.data?.Auto_Mid_Average}</button>
                                <br></br>
                                <button className="popupbutton">Low: {props.data?.Auto_Low_Average}</button>
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
                                <h3>Teleop Points Average</h3>
                            </div>
                            <div className="popuplocation">
                                <button className="popupbutton">High: {props.data?.Tele_High_Average}</button>
                                <br></br>
                                <button className="popupbutton">Middle: {props.data?.Tele_Mid_Average}</button>
                                <br></br>
                                <button className="popupbutton">Low: {props.data?.Tele_Low_Average}</button>
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
                                <h3>Endgame Points Average</h3>
                            </div>
                            <div className="popuplocation">
                                <button className="popupbutton">Charging Station</button>
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
                                <h3>Fouls</h3>
                            </div>
                            <div>
                                <p>boxplot is supposed to be here, but isn't! :0</p>
                            </div>
                            <div className="popuplocation">
                                <p>Foul Type:</p>
                                <p>Foul Type:</p>
                                <p>Foul Type:</p>
                                <p>Foul Type:</p>
                                <p>Foul Type:</p>
                                <p>Foul Type:</p>
                                <p>Foul Type:</p>
                                <p>Foul Type:</p>
                                <p>Foul Type:</p>
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
                                <h3>Tech Fouls</h3>
                            </div>
                            <div>
                                <p>boxplot is supposed to be here, but isn't! :0</p>
                            </div>
                            <div className="popuplocation">
                                <p>Foul Type:</p>
                                <p>Foul Type:</p>
                                <p>Foul Type:</p>
                                <p>Foul Type:</p>
                                <p>Foul Type:</p>
                                <p>Foul Type:</p>
                                <p>Foul Type:</p>
                                <p>Foul Type:</p>
                                <p>Foul Type:</p>
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
                                <h3>Disabled</h3>
                            </div>
                            <div>
                                <p>boxplot is supposed to be here, but isn't! :0</p>
                            </div>
                            <div className="popuplocation">
                                <p>Foul Type:</p>
                                <p>Foul Type:</p>
                                <p>Foul Type:</p>
                                <p>Foul Type:</p>
                                <p>Foul Type:</p>
                                <p>Foul Type:</p>
                                <p>Foul Type:</p>
                                <p>Foul Type:</p>
                                <p>Foul Type:</p>
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
                                <h3>Yellow/Red Card Averages</h3>
                            </div>
                            <div className="popuplocation">
                                <button className="popupbutton">Yellow Cards</button>
                                <br></br>
                                <button className="popupbutton">Red Cards</button>
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
                                <h3>Pit Scouting Info</h3>
                            </div>
                            <div className="popupleft">
                                <p>Drivetrain Type: ______</p>
                                <p>Game Piece Capability: _____</p>
                                <p>Scoring Location Capability:_____ </p>
                                <p>Drivetrain Motor Types: _____</p>
                            </div>
                            <div className="popupright">
                                <p>Number of motors: ___ </p>
                                <p>Number of batteries (total): ___</p>
                                <p>Autos (# and type)</p>
                                <p>They're working on....   ____________</p>
                            </div>
                            <div className="popupleft">
                                <br></br>


                            </div>
                            <p>notes and the whatnot</p>
                            <button className="">photo inputs of their Drivetrain, Intake, Uptake, Outtake, and Extras</button>
                            <br></br>
                            <br></br>


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
                                <h3>Matches, I do not know what will appear here either</h3>
                            </div>
                            <div>
                                <p>pulled stuff</p>
                                <br></br>
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
    { value: "4201", label: 'The Virtruvian Bots' },
    { value: "4414", label: 'High Tide' },
    { value: "1678", label: 'Citrus Circuits' }
];

class SearchBar extends React.Component {
    handleChange = (selectedOption) => {
        this.props.setSelectedOption(selectedOption)
    }

    render() {
        // console.log(this.props.selectedOption)
        return (
            <div>
                <Select
                    options={options}
                    value={this.props.selectedOption}
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
                <GetDataAuto selectedOption={props.selectedOption} />

                <p><strong>Teleop Average</strong></p>
                <GetDataTele selectedOption={props.selectedOption} />
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


export { TeamInfo, General, Photos, Title, SearchBar, PopupGfg, options };
