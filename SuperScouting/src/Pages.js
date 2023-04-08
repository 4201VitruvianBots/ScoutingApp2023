import { MultiButton, FoulCards, SearchBar } from "./Form";
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
    const [name, setName] = useState(false);
    const [greeting, setGreeting] = useState(null);

    const handleSubmit = (event) => {
        setshowCheck(true);
        props.onSubmit(event);
        setTimeout(() => { setshowCheck(false) }, 5000);
    }

    function gameTime() {
        let nameInput = document.getElementById("Sname").value;
        setName(nameInput);
        console.log(name);

        if (nameInput === 'Natalie') {
            setGreeting(
                <div className="natalie">
                    <p>GOOD MORNING!</p>
                </div>,
                setTimeout(() => { setGreeting(false) }, 3000)
            );
        } else if (nameInput.includes('Josiah')) {
            setGreeting(
                <div className="josiah">
                    <p>did it</p>
                </div>,
                setTimeout(() => { setGreeting(false) }, 1000)
            );
        } else if (nameInput.includes('Kyle')) {
            setGreeting(
                <div className="kyle">
                    <input type="button" value="Hmmmm, wonder what this does..." onClick={() => {
                        if (window.confirm('Are you sure you bought enough Girl Scout cookies yet today?')) {
                            setGreeting(
                                <div className="kyle">
                                    <p>No, you haven't. Go get more.</p>
                                </div>

                            )
                        }
                    }
                    } />
                </div>,
            );
        }

        else {
            setGreeting(null);
        }

    }

    return (
        <div>
            <p className="section-label">Super Scouting</p>
            {/* <p className="topNote">If the robot has an "other" drivetrain, specify it in the notes at the bottom!</p> */}
            <form action="#" onSubmit={handleSubmit} id="signin">
                <div className="textArea">
                    <input type="text" id="Sname" name="Scouter_Name" placeholder="SCOUTER NAME" className="name" onChange={gameTime} required />
                    {greeting}
                    <br />

                    <select name="Competition" id="Ename" defaultValue="Choose" >


                        <option value="LAR">LAR</option>
                    </select>
                    <br />
                    <div className="allianceSelect">
                        <MultiButton items={[['RED', 'Red'], ['BLUE', 'Blue']]} id="Team_Alliance" />
                    </div>


                    {showCheck && <div class="check"></div>}

                    <input type="submit" className="SAVE" value="Sign In" />

                </div>
            </form>
        </div>
    );
}


function General(props) {

    const handleMatchChange = (event) => {
        props.setMatchNumber(parseInt(event.target.value));
    }

    return (

        <Page selected={props.selected} id="general" className="page">
            <p className="section-label">Fouls</p>

            <div className="textArea">
                <br />
                <input type="number" id="Sname" name="Match_Number" placeholder="MATCH NUMBER" className="name" required min="1" value={props.matchNumber} onChange={handleMatchChange} />
                <br />
                <br />
                {/* <div className="driverSkill">Driver skill</div> */}


                <div className="boxes">


                    <div className="team1">

                        {/* <input type="text" placeholder="TEAM 1" className="login" id="team1" name="Team_1" onChange={handleInputChange} /> */}
                        <SearchBar selectedOption={props.teamOption1} setSelectedOption={props.setTeamOption1} name="Team_1" className="teamSearch" />
                        <div className="driverSkill">Defense Rating




                            <MultiButton items={[['0', '0'], ['1', '1'], ['2', '2'], ['3', '3'], ['4', '4']]} id="Team_1_Defense" />


                        </div>

                        <Popup trigger=
                            {<input type="button" className="popupButton" value="Add foul"></input>}
                            modal nested>
                            {
                                close => (
                                    <div className='modal'>
                                        <div className='content'>
                                            <label className="label-title">{props.teamOption1.label}</label>
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
                                                <option value="Unknown">Unknown</option>
                                                <option value="InsideProtectedZone">Other (specify)</option>

                                            </select>
                                            <br />
                                            <label className="checkboxcss"><input type="checkbox"></input>Tech Foul?</label>
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

                                                props.setFouls([...props.fouls, [props.teamOption1.value, text, content, selector.selectedIndex]]);

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
                        <div className="pleasecenter">
                            <p className="commentlabel">Team 1 Notes</p>
                            <textarea rows="5" cols="18" id="notes" name="Team 1 Comments" />
                        </div>

                    </div>
                    <div className="team2">

                        <SearchBar selectedOption={props.teamOption2} setSelectedOption={props.setTeamOption2} name="Team_2" className="teamSearch" />
                        <div className="driverSkill">Defense Rating





                            <MultiButton items={[['0', '0'], ['1', '1'], ['2', '2'], ['3', '3'], ['4', '4']]} id="Team_2_Defense" />


                        </div>
                        <Popup trigger=
                            {<input type="button" className="popupButton" value="Add foul"></input>}
                            modal nested>
                            {
                                close => (
                                    <div className='modal'>
                                        <div className='content'>
                                            <label className="label-title">{props.teamOption2.label}</label>

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
                                                <option value="InsideProtectedZone">Other (specify)</option>
                                                <option value="Unknown">Unknown</option>
                                            </select>
                                            <br />
                                            <label className="checkboxcss"><input type="checkbox"></input>Tech Foul?</label>
                                            <textarea id="note" placeholder="Details" rows="4" cols="25" ></textarea>
                                            <br />
                                        </div>
                                        <div className="subButton">

                                            <button onClick={() => {
                                                // setFouls = [document.getElementById("popupSelect"), document.getElementById("selector"), document.getElementById("note")];
                                                let selector = document.getElementById("selector");
                                                let text = selector.options[selector.selectedIndex].text; //then save let text as index 1?
                                                let content = document.getElementById("note").value;
                                                props.setFouls([...props.fouls, [props.teamOption2.value, text, content, selector.selectedIndex]]);

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
                        <div>
                            <p className="commentlabel">Team 2 Notes</p>
                            <textarea rows="5" cols="18" id="notes" name="Team 2 Comments" />
                        </div>

                    </div>

                    <div className="team3">

                        <SearchBar selectedOption={props.teamOption3} setSelectedOption={props.setTeamOption3} name="Team_3" className="teamSearch" />

                        <div className="driverSkill">Defense Rating


                            <MultiButton items={[['0', '0'], ['1', '1'], ['2', '2'], ['3', '3'], ['4', '4']]} id="Team_3_Defense" />


                        </div>
                        <Popup trigger=
                            {<input type="button" className="popupButton" value="Add foul"></input>}
                            modal nested>


                            {
                                close => (
                                    <div className='modal'>
                                        <div className='content'>
                                            <label className="label-title">{props.teamOption3.label}</label>
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
                                                <option value="InsideProtectedZone">Other (specify)</option>
                                                <option value="Unknown">Unknown</option>


                                            </select>
                                            <br />
                                            <label className="checkboxcss"><input type="checkbox"></input>Tech Foul?</label>
                                            <textarea id="note" placeholder="Details" rows="4" cols="25" ></textarea>
                                            <br />
                                        </div>
                                        <div className="subButton">

                                            <button onClick={() => {
                                                let selector = document.getElementById("selector");
                                                let text = selector.options[selector.selectedIndex].text; //then save let text as index 1?
                                                let content = document.getElementById("note").value;
                                                props.setFouls([...props.fouls, [props.teamOption3.value, text, content]]);

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
                        <div>
                            <p className="commentlabel">Team 3 Notes</p>
                            <textarea rows="5" cols="18" id="notes" name="Team 3 Comments" />
                        </div>
                    </div>
                </div>

                {/* use what's already here to set a default for the dropdowns? */}

                <br />
                <br />

                <div className="test2">
                    <FoulCards fouls={props.fouls} setFouls={props.setFouls} alternateList={[props.teamOption1, props.teamOption2, props.teamOption3]} ></FoulCards>
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
                    <br />
                    <div>
                        {props.connected
                            ? <input type="submit" className="submit-button" value="Submit & Clear"></input>
                            : <p className='connerror'>Tablet not connected</p>
                        }
                        <br />
                        <br />
                        <div className="nonSubmit">
                            <p className="reminder">DO NOT use this section unless instructed</p>
                            {props.connected ? null : <input type="submit" className="save-button" value="Save Data & Clear" />}
                            {/* <input type="button" className="download-button" value="Download Data" onClick={props.downloadCSV} />
                            <input type="button" className="clear-button" value="Clear Data" onClick={props.clearData} /> */}
                        </div>
                    </div>
                    {/* <input type="submit" className="submit-button" /> */}
                </div>
            </div>

            <div>
                <p className="version">Version LAR.0.1</p>
            </div>

        </Page >
    );
}



export { SignIn, General };
