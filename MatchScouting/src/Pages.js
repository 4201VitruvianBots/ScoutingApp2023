import { NumberInput, ButtonInput, MultiButton } from "./Form";
import './App.css';

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
            <ul>
                <li><a href="#SignIn">Sign-In</a></li>
                <li><a href="#Pre">Pre-Game</a></li>
                <li><a href="#Auto">Auto</a></li>
                <li><a href="#Tele">Tele-Op</a></li>
                <li><a href="#Save">Submit</a></li> {/*change the rest of the code to 'submit' as well? does it matter?*/}
            </ul>
        </Page>
    );
}

function SignIn(props) {
    return (
        <Page selected={props.selected} className="page" id="sign-in">
            <form onSubmit={props.onSubmit} >
                <p className="section-label" id="SignIn">Energized</p>

                <div className="textArea">
                    <input type="text" id="Scouter_Name" name="Scouter_Name" placeholder="Scouter Name" className="textInput" />
                    <select name="Competition" id="Competition" defaultValue="Choose">
                        <option value="Choose" className="Placeholder" disabled>Choose Event</option>
                        <option value="Hueneme">Port Hueneme</option>
                    </select>
                    <input type="submit" className="save-button" value="Sign In" />
                </div>
            </form>
        </Page>
    );
}

function PreGame(props) {
    return (
        <Page selected={props.selected} className="page" id="pre-game">
            <p className="section-label" id="Pre">Pre-Game</p>

            <div className="textArea">

                <p className="itemLabel" htmlFor="Match_Number">MATCH NUMBER</p>
                <input type="number" id="Match_Number" name="Match_Number" className="textInput" />

                <p className="itemLabel" htmlFor="Match_Number">TEAM NUMBER</p>
                <input type="number" id="Team_Number" name="Team_Number" className="textInput" />


                <p className="itemLabel" htmlFor="Match_Number">ALLIANCE</p>
                <div className="allianceSelect">
                    <MultiButton items={[['Blue 1', 'BLUE 1'], ['Blue 2', 'BLUE 2'], ['Blue 3', 'BLUE 3'], ['Red 1', 'RED 1'], ['Red 2', 'RED 2'], ['Red 3', 'RED 3']]} id="Team_Alliance" />

                </div>
                {/* Off value at index 0, ON value at index 1 */}


                {/* <h1><strong>No show robot?</strong></h1>
                 <ButtonInput id="Show_Time" on_label="Robot did not show" off_label="Robot showed" />
                <div className="one">
                    <MultiButton items={[['Showed up', 'Didn\'t show up']]} name="noShow" />
                </div> */}
                <div></div>
            </div>
        </Page>

    );
}


function Auto(props) {
    return (
        <Page selected={props.selected} id="auto">
            <p className="section-label" id="Auto">Auto</p>
            <div className="textArea">

                <ButtonInput on_label='Mobility' off_label='Mobility' id="Mobility" />
                {/* <button type="button">Mobility?</button> */}

                {/* <h2>Mobility</h2> */}
                {/* <div className="container">
                    <div className="center">
                        <button>Mobility</button>
                    </div>
                </div> 
                <br></br>
                <input type="checkbox" name="mobility"></input>
                <label htmlFor="mobility" className="label-size">Mobility</label> */}
                <br />
                <p className="itemLabel">CHARGING STATION</p>
                <div className="align-radio">
                    <MultiButton items={[['Docked', 'DOCKED'], ['Engaged', 'ENGAGED'], ['No points', 'NO POINTS']]} id="Auto_Station" />
                </div>

                <div className="gallery">

                    <div className="test">
                        <h2>High</h2>
                        <br></br>
                        <h2>Mid</h2>
                        <br></br>
                        <h2>Low</h2>
                    </div>

                    <div>
                        <h1>Cones</h1>
                        <NumberInput id="Auto_Cone_High" />
                        <NumberInput id="Auto_Cone_Mid" />
                        <NumberInput id="Auto_Cone_Low" />
                    </div>
                    <div>
                        <h1>Cubes</h1>
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

                    <div>

                        <h1>Cones</h1>
                        <NumberInput id="Tele_Cone_High" />
                        <NumberInput id="Tele_Cone_Mid" />
                        <NumberInput id="Tele_Cone_Low" />
                    </div>
                    <div>
                        <h1>Cubes</h1>
                        <NumberInput id="Tele_Cube_High" />
                        <NumberInput id="Tele_Cube_Mid" />
                        <NumberInput id="Tele_Cube_Low" />
                    </div>
                </div>

                {/* <h1>Cones</h1>
                <h2>High</h2>
                <NumberInput items={['1']} />
                <h2>Mid</h2>
                {/* <br></br> */}

            </div>


            <div className="textArea">
                <h1>Charging Station</h1>
                <div className="align-radio">
                    <MultiButton items={[['Docked', 'DOCKED'], ['Engaged', 'ENGAGED'], ['No points', 'NO POINTS'], ['Parked', 'PARKED']]} id="Tele_Station" />
                </div>

            </div>
        </Page>
    );
}
// charge station
// button for mobility
function SavePage(props) {
    return (

        <Page selected={props.selected} id="save-page">
            
                {/* <label htmlFor="notes" className="item-label">Notes</label> */}
                {/* <h1>Some things you could comment are:</h1>
                <div className="bullet-points">

                    <li className="questions">Placeholder Questions?</li>
                    <li className="questions">Is it successful?</li>
                    <li className="questions">Does it move?</li>
                    <li className="questions">Conesistent?</li>
                    <li className="questions">Can the robot?</li>
                    <li className="questions">Does it?</li>
                </div>
                <br /> */}
                {/* <label className="item-label" htmlFor="clear">QR code and clear</label>
                <input type="submit" className="SAVE" value="Generate QR code"></input>
                <br />
                <label className="item-label" htmlFor="continue">Save and continue</label>
                 */}
                <input type="submit" className="submit-button"></input>
                {/* <input type="reset" className="CLEAR" value="Clear Form" /> */}
                {/* <div id="QRCode">{props.QRCode}</div> */}


        </Page>
    );
}

export { SignIn, PreGame, Auto, TeleOp, SavePage, Navigation };
