import { RadioButtons, NumberInput, ButtonInput} from "./Form";
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
                <li><a href="#Save">Save</a></li>
            </ul>
        </Page>
    );
}

function SignIn(props) {
    return (
        <Page selected={props.selected} className="page" id="sign-in">
        <div>
            <p className="section-label" id="SignIn">Energized</p>

            <div className="textArea">
                <input type="text" id="Scouter_Name" name="Scouter_Name" placeholder="Scouter Name" className="text-input"/>
                <br />
                <label className="item-label" htmlFor="Competition"><strong>Event Name</strong> </label>
                <br />
                <br />
                <select name="Competition" id="Competition" defaultValue="Choose">
                    <option value="Choose" className="Placeholder" disabled>Choose Event</option>
                    <option value="Hueneme">Port Hueneme</option>
                </select>
                {/* <input type="submit" className="SAVE" value="Sign In" /> */}
            </div>
        </div>
        </Page>
    );
}

function PreGame(props) {
    return (
        <Page selected={props.selected} className="page" id="pre-game">
            <p className="section-label" id="Pre">Pre-Game</p>

            <div className="textArea">
                {/* <label className="item-label" htmlFor="Match_Number"><strong>Match Number</strong> </label> */}
                <input type="number" id="Match_Number" name="Match_Number" placeholder="Match Number" />
                <br></br>
                <br></br>
                {/* <label className="item-label" htmlFor="Team_Number"><strong>Team Number</strong> </label> */}
                <input type="number" id="Team_Number" name="Team_Number" placeholder="Team Number" />

                <div className="textArea">

                    <h1><strong>Team Alliance</strong></h1>
                    <div className="align-radio">
                        <RadioButtons items={['Red 1', 'Red 2', 'Red 3']} name="Team_Alliance" />
                        </div>
                        <br></br>
                        <div className="align-radio">
                        <RadioButtons items={['Blue 1', 'Blue 2', 'Blue 3']} name="Team_Alliance" />
                         </div>
                    <br></br>
                    <br></br>
                    <h1><strong>No show robot?</strong></h1>
                    <ButtonInput on_label="Robot did not show" off_label="Robot showed" id="Show_Time" />
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
            <ButtonInput on_label='Mobility Bonus Selected' off_label = 'Mobility ' id="Mobility" />
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
                <br></br>
                <br></br>
                <br></br>
                <h1>Charging Station</h1>
                <div className="align-radio">
                    <RadioButtons items={['Docked', 'Engaged', 'No points']} name="Auto_Station" />
                </div>
                <h1>Cones</h1>
                <NumberInput id="Auto_Cone_High" />
                <br></br>
                <NumberInput id="Auto_Cone_Mid" />
                <br></br>
                <NumberInput id="Auto_Cone_Low" />
                <br></br>
                <h1>Cubes</h1>
                <NumberInput id="Auto_Cube_High" />
                <br></br>
                <NumberInput id="Auto_Cube_Mid" />
                <br></br>
                <NumberInput id="Auto_Cube_Low" />
            </div>
        </Page>
    );
}

function TeleOp(props) {
    return (
        <Page selected={props.selected} id="tele-op">
            <p className="section-label" id="Tele">Teleop/Endgame</p>

            <div className="textArea">
                <h1>Charging Station</h1>
                <div className="align-radio">
                    <RadioButtons items={['Docked', 'Engaged', 'No points', 'Parking']} name="Tele_Station" />
                </div>
                <h1>Cones</h1>
                <NumberInput id="Tele_Cone_High" />
                <br></br>
                <NumberInput id="Tele_Cone_Mid" />
                <br></br>
                <NumberInput id="Tele_Cone_Low" />
                <br></br>
                <h1>Cubes</h1>
                <NumberInput id="Tele_Cube_High" />
                <br></br>
                <NumberInput id="Tele_Cube_Mid" />
                <br></br>
                <NumberInput id="Tele_Cube_Low" />
            </div>
        </Page>
    );
}
// charge station
// button for mobility
function SavePage(props) {
    return (

        <Page selected={props.selected} id="save-page">


            <p className="section-label" id="Save">Submit</p>
            <div className="textArea">
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

                <input type="text" id="Comments" name="Comments" placeholder="Comment here" />
                {/* <label className="item-label" htmlFor="clear">QR code and clear</label>
                <input type="submit" className="SAVE" value="Generate QR code"></input>
                <br />
                <label className="item-label" htmlFor="continue">Save and continue</label>
                <input type="reset" className="CLEAR" value="Clear Form" /> */}
                <input type="submit" className="submit-button"></input>
                {/* <div id="QRCode">{props.QRCode}</div> */}

            </div>

        </Page>
    );
}

export { SignIn, PreGame, Auto, TeleOp, SavePage, Navigation };
