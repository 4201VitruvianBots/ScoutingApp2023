import { NumberInput, MultiButton, SearchBar, options, ConnectionIndicator, ButtonInput } from "./Form";
import './App.css';
import { useState } from "react";

function Page(props) {
    return (
        <div className={props.selected ? 'page selected' : 'page'} id={props.id}>
            {props.children}
        </div>
    );
}

function Navigation(props) {
    return (
        <Page selected={props.selected} className="page" id="navigation">
            <div>
                <ul>
                    <li><a href="#SignIn">Sign-In</a></li>
                    <li><a href="#Pre">Pre-Game</a></li>
                    <li><a href="#Auto">Auto</a></li>
                    <li><a href="#Tele">Tele-Op</a></li>
                    <li><a href="#Save">Submit</a></li> {/*change the rest of the code to 'submit' as well? does it matter?*/}
                    <br />
                    <br />
                    <li className="showalliance">Team ????</li>
                    <li>1/2/3</li>
                </ul>
            </div>

        </Page>
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
            <p className="section-label" id="SignIn">Match Scouting</p>

            <form onSubmit={handleSubmit} action="#">
                <div className="textArea">
                    <input type="text" id="Sname" name="Scouter_Name" placeholder="Scouter Name" required />
                    <br />
                    <select name="Competition" id="Ename" defaultValue="Choose" >
                        <option value="Choose" className="Placeholder" disabled>Choose Event</option>
                        <option value="Port Hueneme">Port Hueneme</option>
                    </select>
                    <br />
                    {showCheck && <div class="check"></div>}
                    <input type="submit" className="submit-button" value="Sign In" />

                    {/* when submitted 
                        <>checkmark image</> */}

                </div>
            </form>
        </div>
    );
}

function PreGame(props) {

    const [teamOption, setTeamOption] = useState(options[0]); //state

    const setSelectedOption = (newOption) => {

        setTeamOption(newOption);

        //functions (setting a function to a variable)
    }

    return (
        <Page selected={props.selected} className="page" id="pre-game">
            <p className="section-label" id="Pre">Pre-Game</p>

            <div className="textArea">

                <p className="itemLabel" htmlFor="Match_Number" required>MATCH NUMBER</p>
                <input type="number" id="Match_Number" name="Match_Number" className="textInput" required min="1" max="100" />

                <p className="itemLabel" htmlFor="Match_Number">TEAM NUMBER</p>
                {/* <input type="number" id="Team_Number" name="Team_Number" className="textInput" /> */}

                <SearchBar setSelectedOption={setSelectedOption} selectedOption={teamOption} name="Team_Number" className="teamSearch" required />


                <p className="itemLabel" htmlFor="Match_Number">ALLIANCE</p>
                <div className="allianceSelect">
                    <MultiButton items={[['BLUE 1', 'Blue 1'], ['BLUE 2', 'Blue 2'], ['BLUE 3', 'Blue 3'], ['RED 1', 'Red 1'], ['RED 2', 'Red 2'], ['RED 3', 'Red 3']]} id="Team_Alliance" />

                </div>
            </div>
        </Page>

    );
}



function Auto(props) {
    return (
        <Page selected={props.selected} id="auto">
            <p className="section-label" id="Auto">Auto</p>
            <div className="textArea">

                <ButtonInput on_label="Activated!" off_label='Mobility?' id="Mobility" />
                <br />
                <p className="itemLabel">CHARGING STATION</p>
                <div className="align-radio">

                    <MultiButton items={[['NO POINTS', 'No points'], ['FAILED BALANCE', 'Failed Balance'], ['DOCKED', 'Docked'], ['ENGAGED', 'Engaged']]} id="Auto_Station" />

                </div>

                <div className="gallery">

                    <div className="test">
                        <h2>High</h2>
                        <br></br>
                        <h2>Mid</h2>
                        <br></br>
                        <h2>Low</h2>
                    </div>

                    <div className="cones">
                        <h1 className="conecube"><div class="triangle-up"></div>Cones</h1>
                        <NumberInput id="Auto_Cone_High" />
                        <NumberInput id="Auto_Cone_Mid" />
                        <NumberInput id="Auto_Cone_Low" />
                    </div>
                    <div className="cubes">
                        <h1 className="conecube"><div class="square"></div>Cubes</h1>
                        <NumberInput id="Auto_Cube_High" />
                        <NumberInput id="Auto_Cube_Mid" />
                        <NumberInput id="Auto_Cube_Low" />
                    </div>
                </div>
            </div>
        </Page>
    );
}

function TeleOp(props) {
    return (
        <Page selected={props.selected} id="Tele">
            <p className="section-label">Teleop/Endgame</p>

            <div className="textArea">

                <div className="gallery">

                    <div className="test">
                        <h2>High</h2>
                        <br></br>
                        <h2>Mid</h2>
                        <br></br>
                        <h2>Low</h2>
                    </div>

                    <div className="cones">

                        <h1 className="conecube"><div class="triangle-up"></div>Cones</h1>
                        <NumberInput id="Tele_Cone_High" />
                        <NumberInput id="Tele_Cone_Mid" />
                        <NumberInput id="Tele_Cone_Low" />
                    </div>
                    <div className="cubes">
                        <h1 className="conecube"><div class="square"></div>Cubes</h1>
                        <NumberInput id="Tele_Cube_High" />
                        <NumberInput id="Tele_Cube_Mid" />
                        <NumberInput id="Tele_Cube_Low" />
                    </div>
                </div>

            </div>


            <div className="textArea">
                <h1>Charging Station</h1>
                <div className="align-radio">

                    <MultiButton items={[['NO POINTS', 'No points'], ['PARKED', 'Parked'], ['FAILED BALANCE', 'Failed Balance'], ['DOCKED', 'Docked'], ['ENGAGED', 'Engaged']]} id="Tele_Station" />

                </div>

            </div>
        </Page>
    );
}
// charge station
// button for mobility
function SavePage(props) {
    return (

        <Page selected={props.selected} id="Save">
            <p className="section-label">Submit</p>
            <div className="textArea">

                <input type="textarea" id="Comments" name="Comments" placeholder="Comment here" className="textInput" />
                <br />
                <br />
                <ConnectionIndicator downloadCSV={props.downloadCSV} clearData={props.clearData} />
            </div>
            <div>
                <p className="version">Version 0</p>
            </div>


        </Page>
    );
}



export { SignIn, PreGame, Auto, TeleOp, SavePage, Navigation };
