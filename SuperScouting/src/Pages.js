import { MultiButton, FoulCards, SearchBar, options, ConnectionIndicator } from "./Form";
import './App.css';
import React, { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


function Page(props) {
    return (
        <div className={props.selected ? 'page selected' : 'page'} id={props.id}>
            {props.children}
        </div>
    );
}

function SignIn(props) {
    const [showCheck, setshowCheck] = useState(false);

    const handleSubmit = (event) => {
        setshowCheck(true);
        props.onSubmit(event);
        setTimeout(() => { setshowCheck(false) }, 5000);
    }

    return (
        <div>
            <p className="section-label">Super Scouting</p>
            {/* <p className="topNote">If the robot has an "other" drivetrain, specify it in the notes at the bottom!</p> */}
            <form action="#" onSubmit={handleSubmit}>
                <div className="textArea">
                    <input type="text" id="Sname" name="Scouter_Name" placeholder="SCOUTER NAME" className="name" />
                    <br />

                    <select name="Competition" id="Ename" defaultValue="Choose">
                        <option value="Choose" className="Placeholder" disabled>Choose Event</option>
                        <option value="Port Hueneme">Port Hueneme</option>
                    </select>
                    <br />
                    <div className="allianceSelect">
                        <MultiButton items={[['RED', 'Red'], ['BLUE', 'Blue']]} id="Team_Alliance" />
                    </div>


                    {showCheck && <div class="check"></div>}

                    <input type="submit" className="SAVE" value="Sign In" />


                    {/* when submitted 
                        <>checkmark image</> */}
                    {/* onSubmit={handleSubmit} */}

                </div>
            </form>
        </div>
    );
}


function General(props) {


    // const [fouls, setFouls] = useState([]);

    const [teamOption1, setTeamOption1] = useState(options[0]); //state
    const [teamOption2, setTeamOption2] = useState(options[0]); //state
    const [teamOption3, setTeamOption3] = useState(options[0]); //state

    //functions (setting a function to a variable)


    return (

        <Page selected={props.selected} id="general" className="page">
            <p className="section-label">Fouls</p>
            <div className="textArea">
                <br />
                <input type="number" id="Sname" name="Match_Number" placeholder="MATCH NUMBER" className="name" />
                <br />
                <br />
                <div className="boxes">
                    <div className="team1">

                        {/* <input type="text" placeholder="TEAM 1" className="login" id="team1" name="Team_1" onChange={handleInputChange} /> */}
                        <SearchBar setSelectedOption={setTeamOption1} name="Team_1" className="teamSearch" />
                        <Popup trigger=
                            {<input type="button" className="popupButton" value="Add foul"></input>}
                            modal nested>
                            {
                                close => (
                                    <div className='modal'>
                                        <div className='content'>
                                            <label className="label-title">{teamOption1.label}</label>
                                            <br />
                                            <br />
                                            <select name="Competition" id="selector" defaultValue="Choose" >
                                                <option value="Choose" className="Placeholder" disabled>For?</option>
                                                <option value="Pinning">Pinning</option>
                                                <option value="Disabled">Disabled</option>
                                                <option value="Overextension">Overextension</option>
                                                <option value="InsideOtherRobot">Inside other robot</option>
                                                <option value="MultipleGameObjects">Holding multiple game pieces</option>
                                                <option value="InsideProtectedZone">Inside protected zone</option>
                                            </select>
                                            <br />
                                            <textarea id="note" placeholder="Details" rows="4" cols="25" ></textarea>

                                        </div>

                                        <div className="subButton">

                                            <button onClick={() => {
                                                // setFouls = [document.getElementById("popupSelect"), document.getElementById("selector"), document.getElementById("note")];

                                                // let teams = document.getElementById("teamSearch");
                                                // let currentTeam = teams.options[teams.selectedIndex].value;
                                                let selector = document.getElementById("selector");
                                                let text = selector.options[selector.selectedIndex].text; //then save let text as index 1?
                                                let content = document.getElementById("note").value;

                                                props.setFouls([...props.fouls, [teamOption1.value, text, content, selector.selectedIndex]]);

                                                close();
                                            }}>
                                                Enter foul
                                            </button>
                                            <br />

                                        </div>
                                        <br />
                                    </div>
                                )
                            }
                        </Popup>


                    </div>
                    <div className="team2">

                        <SearchBar setSelectedOption={setTeamOption2} name="Team_2" className="teamSearch" />
                        <Popup trigger=
                            {<input type="button" className="popupButton" value="Add foul"></input>}
                            modal nested>
                            {
                                close => (
                                    <div className='modal'>
                                        <div className='content'>
                                            <label className="label-title">{teamOption2.label}</label>

                                            <br />
                                            <br />
                                            <select name="Competition" id="selector" defaultValue="Choose" >
                                                <option value="Choose" className="Placeholder" disabled>For?</option>
                                                <option value="Pinning">Pinning</option>
                                                <option value="Disabled">Disabled</option>
                                                <option value="Overextension">Overextension</option>
                                                <option value="InsideOtherRobot">Inside other robot</option>
                                                <option value="MultipleGameObjects">Holding multiple game pieces</option>
                                                <option value="InsideProtectedZone">Inside protected zone</option>
                                            </select>
                                            <br />
                                            <textarea id="note" placeholder="Details" rows="4" cols="25" ></textarea>
                                            <br />
                                        </div>
                                        <div className="subButton">

                                            <button onClick={() => {
                                                // setFouls = [document.getElementById("popupSelect"), document.getElementById("selector"), document.getElementById("note")];
                                                let selector = document.getElementById("selector");
                                                let text = selector.options[selector.selectedIndex].text; //then save let text as index 1?
                                                let content = document.getElementById("note").value;
                                                props.setFouls([...props.fouls, [teamOption2.value, text, content, selector.selectedIndex]]);

                                                close();
                                            }

                                            }>
                                                Enter foul
                                            </button>
                                            <br />
                                        </div>
                                        <br />
                                    </div>
                                )
                            }
                        </Popup>


                    </div>

                    <div className="team3">

                        <SearchBar setSelectedOption={setTeamOption3} name="Team_3" className="teamSearch" />
                        <Popup trigger=
                            {<input type="button" className="popupButton" value="Add foul"></input>}
                            modal nested>
                            {
                                close => (
                                    <div className='modal'>
                                        <div className='content'>
                                            <label className="label-title">{teamOption3.label}</label>
                                            <br />
                                            <br />
                                            <select name="Competition" id="selector" defaultValue="Choose" >
                                                <option value="Choose" className="Placeholder" disabled>For?</option>
                                                <option value="Pinning">Pinning</option>
                                                <option value="Disabled">Disabled</option>
                                                <option value="Overextension">Overextension</option>
                                                <option value="InsideOtherRobot">Inside other robot</option>
                                                <option value="MultipleGameObjects">Holding multiple game pieces</option>
                                                <option value="InsideProtectedZone">Inside protected zone</option>


                                            </select>
                                            <br />
                                            <textarea id="note" placeholder="Details" rows="4" cols="25" ></textarea>
                                            <br />
                                        </div>
                                        <div className="subButton">

                                            <button onClick={() => {
                                                // setFouls = [document.getElementById("popupSelect"), document.getElementById("selector"), document.getElementById("note")];

                                                let selector = document.getElementById("selector");
                                                let text = selector.options[selector.selectedIndex].text; //then save let text as index 1?
                                                let content = document.getElementById("note").value;
                                                props.setFouls([...props.fouls, [teamOption3.value, text, content, selector.selectedIndex]]);

                                                close();
                                            }

                                            }>
                                                Enter foul
                                            </button>
                                            <br />
                                        </div>
                                        <br />
                                    </div>
                                )
                            }
                        </Popup>

                    </div>
                </div>

                <br />
                <br />

                <div className="test2">
                    <FoulCards fouls={props.fouls}></FoulCards>
                </div>

                {props.fouls.map((e, i) => (<React.Fragment key={i}>
                    <input type="hidden" name={`Team_Number[${i}]`} value={e[0]} />
                    <input type="hidden" name={`Comments[${i}]`} value={e[2]} />
                    <input type="hidden" name={`Cause[${i}]`} value={e[3]} />
                </React.Fragment>))}

                <input type="hidden" name="length" value={props.fouls.length} />

                <div className="textArea">
                    <p className="generalLabel">Notes</p>
                    <textarea rows="5" cols="20" id="notes" name="Comments" />
<br/>
                    <ConnectionIndicator/>
                    {/* <input type="submit" className="submit-button" /> */}
                </div>

            </div>

        </Page >
    );
}



export { SignIn, General };
