import { MultiButton, FoulCards } from "./Form";
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

    return (
        <div>
            <p className="section-label">Super Scouting</p>
            {/* <p className="topNote">If the robot has an "other" drivetrain, specify it in the notes at the bottom!</p> */}
            <form action="#" onSubmit={props.onSubmit}>
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
                    {/* <div className="loginButtons">
                        <input type="text" placeholder="TEAM 1" className="login" />
                        <input type="text" placeholder="TEAM 2" className="login" />
                        <input type="text" placeholder="TEAM 3" className="login" />
                    </div> */}

                    {/* {showCheck && <div class="check"></div>} */}

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

    const [fouls, setFouls] = useState([]);

    const [teamInput, setTeamInput] = useState('');


    const handleInputChange = (teamInput) => {
        let one = document.getElementById("team1").value;
        let two = document.getElementById("team2").value;
        let three = document.getElementById("team3").value;
        setTeamInput([one, two, three]);
    }


    return (
        <Page selected={props.selected} id="general" className="page">
            <p className="section-label">Fouls</p>
            <div className="textArea">
                <br />
                <input type="text" id="Sname" name="Match_Number" placeholder="MATCH NUMBER" className="name" />
                <br />
                <br />
                <div className="boxes">
                    <div className="team1">

                        <input type="text" placeholder="TEAM 1" className="login" id="team1" onChange={handleInputChange} />
                        <Popup trigger=
                            {<input type="button" className="popupButton" value="Add foul"></input>}
                            modal nested>
                            {
                                close => (
                                    <div className='modal'>
                                        <div className='content'>
                                            <label className="label-title">{teamInput[0]}</label>
                                            <br />
                                            <br />
                                            <select name="Competition" id="selector" defaultValue="Choose" >
                                                <option value="Choose" className="Placeholder" disabled>For?</option>
                                                <option value="Pinning">Pinning</option>
                                                <option value="Disabled">Disabled</option>
                                                <option value="Overextension">Overextension</option>
                                                <option value="InsideOtherRobot">Inside other robot</option>
                                            </select>
                                            <br />
                                            <textarea id="note" placeholder="Details" rows="4" cols="25" ></textarea>

                                        </div>

                                        <div className="subButton">

                                            <button onClick={() => {
                                                // setFouls = [document.getElementById("popupSelect"), document.getElementById("selector"), document.getElementById("note")];

                                                let selector = document.getElementById("selector");
                                                let text = selector.options[selector.selectedIndex].text; //then save let text as index 1?
                                                let content = document.getElementById("note").value;
                                                setFouls([...fouls, [teamInput[0], text, content, selector.selectedIndex]]);

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
                    <div className="team2">

                        <input type="text" placeholder="TEAM 2" className="login" id="team2" onChange={handleInputChange} />
                        <Popup trigger=
                            {<input type="button" className="popupButton" value="Add foul"></input>}
                            modal nested>
                            {
                                close => (
                                    <div className='modal'>
                                        <div className='content'>
                                            <label className="label-title">{teamInput[1]}</label>

                                            <br />
                                            <br />
                                            <select name="Competition" id="selector" defaultValue="Choose" >
                                                <option value="Choose" className="Placeholder" disabled>For?</option>
                                                <option value="Pinning">Pinning</option>
                                                <option value="Disabled">Disabled</option>
                                                <option value="Overextension">Overextension</option>
                                                <option value="InsideOtherRobot">Inside other robot</option>
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
                                                setFouls([...fouls, [teamInput[1], text, content, selector.selectedIndex]]);

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

                        <input type="text" placeholder="TEAM 3" className="login" id="team3" onChange={handleInputChange} />
                        <Popup trigger=
                            {<input type="button" className="popupButton" value="Add foul"></input>}
                            modal nested>
                            {
                                close => (
                                    <div className='modal'>
                                        <div className='content'>
                                            <label className="label-title">{teamInput[2]}</label>
                                            <br />
                                            <br />
                                            <select name="Competition" id="selector" defaultValue="Choose" >
                                                <option value="Choose" className="Placeholder" disabled>For?</option>
                                                <option value="Pinning">Pinning</option>
                                                <option value="Disabled">Disabled</option>
                                                <option value="Overextension">Overextension</option>
                                                <option value="InsideOtherRobot">Inside other robot</option>
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
                                                setFouls([...fouls, [teamInput[2], text, content, selector.selectedIndex]]);

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
                    <FoulCards fouls={fouls}></FoulCards>
                </div>

                {fouls.map((e,i) => (<React.Fragment key={i}>
                    <input type="hidden" name={`Team_Number[${i}]`} value={e[0]} />
                    <input type="hidden" name={`Comments[${i}]`} value={e[2]} />
                    <input type="hidden" name={`Cause[${i}]`} value={e[3]} />
                </React.Fragment>))}

                <input type="hidden" name="length" value={fouls.length} />

                <div className="textArea">
                    <p className="generalLabel">Notes</p>
                    <textarea rows="5" cols="20" id="notes" name="Comments" />
                    <input type="submit" className="submit-button" />
                </div>

            </div>

        </Page >
    );
}



export { SignIn, General };
