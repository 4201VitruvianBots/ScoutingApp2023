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
    { value: '4',    label: '4'},
    { value: '294',  label: '294'},
    { value: '597',  label: '597'},
    { value: '599',  label: '599'},
    { value: '687',  label: '687'},
    { value: '696',  label: '696'},
    { value: '968',  label: '968'},
    { value: '1138', label: '1138'},
    { value: '1197', label: '1197'},
    { value: '1452', label: '1452'},
    { value: '2584', label: '2584'},
    { value: '2637', label: '2637'},
    { value: '2710', label: '2710'},
    { value: '3473', label: '3473'},
    { value: '3759', label: '3759'},
    { value: '4123', label: '4123'},
    { value: '4201', label: '4201'},
    { value: '4322', label: '4322'},
    { value: '4470', label: '4470'},
    { value: '4999', label: '4999'},
    { value: '5089', label: '5089'},
    { value: '5199', label: '5199'},
    { value: '6072', label: '6072'},
    { value: '6220', label: '6220'},
    { value: '6904', label: '6904'},
    { value: '7042', label: '7042'},
    { value: '8006', label: '8006'},
    { value: '9408', label: '9408'},
    { value: '9993', label: '9993'},
    { value: '9995', label: '9995'},
    { value: '9996', label: '9996'},
    { value: '9997', label: '9997'},
    { value: '9998', label: '9998'},
    { value: '9999', label: '9999'},    
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
