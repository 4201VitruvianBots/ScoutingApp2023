import { RadioButtons, NumberInput, ButtonInput} from "./Form";
import './App.css';

function Page(props) {
    return (
        <div className={props.selected ? 'page selected' : 'page'} id={props.id}>
            {props.children}
        </div>
    );
}

function SignIn(props) {
    return (
        <Page selected={props.selected} className="page" id="sign-in">
        <div>
            <p className="section-label">Energized</p>

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
            <p className="section-label">Pre-Game</p>


            <div className="textArea">
                <label className="item-label" htmlFor="Match_Number"><strong>Match Number</strong> </label>
                <input className="text-input" type="text" id="Match_Number" name="Match_Number" />
                <br></br>
                <br></br>
                <label className="item-label" htmlFor="Team_Number"><strong>Team Number</strong> </label>
                <input className="text-input" type="text" id="Team_Number" name="Team_Number" />

                <div className="textArea">

                    <h1><strong>Team Alliance</strong></h1>
                    <div className="align-radio">
                        <RadioButtons items={['Red 1', 'Red 2', 'Red 3', 'Blue 1', 'Blue 2', 'Blue 3']} name="Team_Alliance" />
                    </div>
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
            <p className="section-label">Auto</p>
            <div className="textArea">
            <ButtonInput on_label='You have selected that the robot has got the Mobility bonus' off_label = 'Mobility ' id="Mobility" />
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
            <p className="section-label">Teleop/Endgame</p>


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


            <p className="section-label">Submit</p>
            <div className="textArea">
                {/* <label htmlFor="notes" className="item-label">Notes</label> */}
                <h1>Some things you could comment are:</h1>
                <div className="bullet-points">
                    <li>defensive bot</li>
                    <li>do they play defense</li>
                    <li>do they play optimistical</li>
                    <li>thinking of other questions</li>
                     <li>Can the robot balance with other robots?</li>
                    <li>Does the robot securely/conesistently control game pieces?</li>
                </div>
                <br />
                
                <input type="text" id="Comments" name="Comments" placeholder="Comment here" className="text-input" />
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

export { SignIn, PreGame, Auto, TeleOp, SavePage };
