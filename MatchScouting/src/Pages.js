import { RadioButtons, NumberInput } from "./Form";
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
                    <input type="text" id="Sname" name="Sname" placeholder="Scouter Name" />
                    <br />
                    <br />
                    <br />
                    <select name="Ename" id="Ename" defaultValue="Choose">
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
                {/* <label className="item-label" htmlFor="Num"><strong>Match Number</strong> </label> */}
                <input type="text" id="Num" name="match" placeholder="Match Number" />
                <br></br>
                <br></br>
                {/* <label className="item-label" htmlFor="Num"><strong>Team Number</strong> </label> */}
                <input type="text" id="Num" name="team" placeholder="Team Number" />

                <div className="textArea">

                    <h1><bold>Team Alliance</bold></h1>
                    <div className="align-radio">
                        <RadioButtons items={['Red 1', 'Red 2', 'Red 3']} name="alliance" />
                        </div>
                        <div className="align-radio2">
                        <RadioButtons items={['Blue 1', 'Blue 2', 'Blue 3']} name="alliance" />
                         </div>
                    <br></br>
                    <br></br>
                    <h1><strong>No show robot?</strong></h1>
                    <input type="checkbox" name="showtime"></input>
                    <label className="label-size" for="showtime">Robot did not show</label>
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
                {/* <button type="button">Mobility?</button> */}

                {/* <h2>Mobility</h2> */}
                {/* <div class="container">
                    <div class="center">
                        <button>Mobility</button>
                    </div>
                </div> */}
                <br></br>
                <input type="checkbox" name="mobility"></input>
                <label for="mobility" className="label-size">Mobility</label>
                <br></br>
                <br></br>
                <br></br>
                <h1>Charging Station</h1>
                <div className="align-radio3">
                    <RadioButtons items={['Docked', 'Engaged', 'No points']} name="autostation" />
                </div>
                <h1>Cones</h1>
                <NumberInput items={['1']} id="autoconehigh" />
                <br></br>
                <NumberInput items={['1']} id="autoconemid" />
                <br></br>
                <NumberInput items={['1']} id="autoconelow" />
                <br></br>
                <h1>Cubes</h1>
                <NumberInput items={['1']} id="autocubehigh" />
                <br></br>
                <NumberInput items={['1']} id="autocubemid" />
                <br></br>
                <NumberInput items={['1']} id="autocubelow" />
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
                <div className="align-radio4">
                    <RadioButtons items={['Docked', 'Engaged', 'No points', 'Parking']} name="telestation" />
                </div>
                <h1>Cones</h1>
                <NumberInput items={['1']} id="teleconehigh" />
                <br></br>
                <NumberInput items={['1']} id="teleconemid" />
                <br></br>
                <NumberInput items={['1']} id="teleconelow" />
                <br></br>
                <h1>Cubes</h1>
                <NumberInput items={['1']} id="telecubehigh" />
                <br></br>
                <NumberInput items={['1']} id="telecubemid" />
                <br></br>
                <NumberInput items={['1']} id="telecubelow" />
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

                <input type="text" id="notes" name="notes" placeholder="Comment here" />
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
