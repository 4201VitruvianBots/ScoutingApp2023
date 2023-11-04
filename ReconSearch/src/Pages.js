import React from 'react'
import { Upload } from "./Form";
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
                                <button className="popupbutton">Average Fouls: {props.data?.Average_Fouls}</button>
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

            {/* <Popup trigger=
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
            </Popup> */}

            <Popup trigger=
                {<button className="chonk"> Pinning </button>}
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                <h3>Pinning</h3>
                            </div>
                            <div>
                                <p>boxplot is supposed to be here, but isn't! :0</p>
                            </div>
                            <div className="popuplocation">
                                <p>Details:</p>
                                <p>Details:</p>
                                <p>Details:</p>
                                <p>Details:</p>
                                <p>Details:</p>
                                <p>Details:</p>
                                <p>Details:</p>
                                <p>Details:</p>
                                <p>Details:</p>
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
                {<button className="chonk"> Disabled </button>}
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
                                <p>Details:</p>
                                <p>Details:</p>
                                <p>Details:</p>
                                <p>Details:</p>
                                <p>Details:</p>
                                <p>Details:</p>
                                <p>Details:</p>
                                <p>Details:</p>
                                <p>Details:</p>
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
                {<button className="chonk"> Overextension </button>}
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                <h3>Overextension</h3>
                            </div>
                            <div>
                                <p>boxplot is supposed to be here, but isn't! :0</p>
                            </div>
                            <div className="popuplocation">
                                <p>Details:</p>
                                <p>Details:</p>
                                <p>Details:</p>
                                <p>Details:</p>
                                <p>Details:</p>
                                <p>Details:</p>
                                <p>Details:</p>
                                <p>Details:</p>
                                <p>Details:</p>
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
                {<button className="chonk"> Inside Another Robot </button>}
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                <h3>Inside Another Robot</h3>
                            </div>
                            <div className="popuplocation">
                                <p>Details:</p>
                                <p>Details:</p>
                                <p>Details:</p>
                                <p>Details:</p>
                                <p>Details:</p>
                                <p>Details:</p>
                                <p>Details:</p>
                                <p>Details:</p>
                                <p>Details:</p>
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
                            <div className="pitscout">
                                <h4>Drivetrain</h4>
                                <button className="pitscoutinfo">_______</button>
                            </div>

                            <div className="pitscout">
                                <h4>Drivetrain</h4>
                                <button className="pitscoutinfo">_______</button>
                            </div>

                            <div className="pitscout">
                                <h4>Drivetrain</h4>
                                <button className="pitscoutinfo">_______</button>
                            </div>

                            <div className="pitscout">
                                <h4>Drivetrain</h4>
                                <button className="pitscoutinfo">________</button>
                            </div>

                            <br></br>

                            <div className="pitscout">
                                <h4>Drivetrain</h4>
                                <button className="pitscoutinfo">________</button>
                            </div>

                            <div className="pitscout">
                                <h4>Drivetrain</h4>
                                <button className="pitscoutinfo">________</button>
                            </div>

                            <div className="pitscout">
                                <h4>Drivetrain</h4>
                                <button className="pitscoutinfo">________</button>
                            </div>

                            <div className="pitscout">
                                <h4>Drivetrain</h4>
                                <button className="pitscoutinfo">________</button>
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
    { value: null, label: 'Select...' },
    { value: 294, label: 294 },
    { value: 359, label: 359 },
    { value: 399, label: 399 },
    { value: 498, label: 498 },
    { value: 597, label: 597 },
    { value: 696, label: 696 },
    { value: 968, label: 968 },
    { value: 987, label: 987 },
    { value: 1160, label: 1160 },
    { value: 1836, label: 1836 },
    { value: 2102, label: 2102 },
    { value: 2122, label: 2122 },
    { value: 2658, label: 2658 },
    { value: 2710, label: 2710 },
    { value: 2839, label: 2839 },
    { value: 3128, label: 3128 },
    { value: 3255, label: 3255 },
    { value: 3309, label: 3309 },
    { value: 3473, label: 3473 },
    { value: 3476, label: 3476 },
    { value: 3647, label: 3647 },
    { value: 3952, label: 3952 },
    { value: 4079, label: 4079 },
    { value: 4141, label: 4141 },
    { value: 4201, label: 4201 },
    { value: 4276, label: 4276 },
    { value: 4322, label: 4322 },
    { value: 4415, label: 4415 },
    { value: 4419, label: 4419 },
    { value: 4501, label: 4501 },
    { value: 4738, label: 4738 },
    { value: 5199, label: 5199 },
    { value: 6072, label: 6072 },
    { value: 6220, label: 6220 },
    { value: 6560, label: 6560 },
    { value: 6995, label: 6995 },
    { value: 7042, label: 7042 },
    { value: 7157, label: 7157 },
    { value: 7447, label: 7447 },
    { value: 8888, label: 8888 },
    { value: 9271, label: 9271 },
    { value: 9408, label: 9408 },    
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


export { General, Photos, Title, SearchBar, PopupGfg, options };
