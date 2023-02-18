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
    { value: "0", label: 'Select...' },
    { value: "4", label: '4: Team 4 Element' },
    { value: "294", label: '294: Beach Cities Robotics' },
    { value: "498", label: '498: The Cobra Commanders' },
    { value: "589", label: '589: Falkon Robotics' },
    { value: "687", label: '687: The Nerd Herd' },
    { value: "691", label: '691: Project 691 Robotics' },
    { value: "696", label: '696: Circuit Breakers' },
    { value: "972", label: '972: Iron Claw' },
    { value: "973", label: '973: Greybots' },
    { value: "1159", label: '1159: Ramona Rampage' },
    { value: "1266", label: '1266: The Devil Duckies' },
    { value: "1452", label: '1452: Omnicats' },
    { value: "1515", label: '1515: MorTorq' },
    { value: "1572", label: '1572: The Hammer Heads' },
    { value: "1661", label: '1661: Griffitrons' },
    { value: "1678", label: '1678: Citrus Circuits' },
    { value: "2102", label: '2102: Team Paradox' },
    { value: "2429", label: '2429: La Cañada Engineering Club' },
    { value: "2465", label: '2465: Kauaibots' },
    { value: "2486", label: '2486: CocoNuts' },
    { value: "2543", label: '2543: TitanBot' },
    { value: "2584", label: '2584: Flame of The West' },
    { value: "3008", label: '3008: Team Magma' },
    { value: "3128", label: '3128: The Aluminum Narwhals' },
    { value: "3255", label: '3255: SuperNURDs' },
    { value: "3328", label: '3328: NohoRobo' },
    { value: "3354", label: '3354: PrepaTec-TecDroid' },
    { value: "3473", label: '3473: Team Sprocket' },
    { value: "3647", label: '3647: Millenium Falcons' },
    { value: "3859", label: '3859: Wolfpack Robotics' },
    { value: "3863", label: '3863: Pantherbotics' },
    { value: "3881", label: '3881: WHEA Sharkbots' },
    { value: "4201", label: '4201: The Virtruvian Bots' },
    { value: "4414", label: '4414: High Tide' },
    { value: "4481", label: '4481: Team Rembrandts' },
    { value: "4711", label: '4711: The Flying Aces' },
    { value: "4731", label: '4731: PrepaTec - MONARCH-E' },
    { value: "5012", label: '5012: Gryffingear' },
    { value: "5089", label: '5089: Robo-Nerds' },
    { value: "6036", label: '6036: Peninsula Robotics' },
    { value: "6059", label: '6059: System Overload Robotics' },
    { value: "6479", label: '6479: AZTECH Robotics' },
    { value: "6658", label: '6658: Rockbotics' },
    { value: "7424", label: '7424: Sin City Robotics' },
    { value: "8891", label: '8891: Wild Raccoons' }
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
