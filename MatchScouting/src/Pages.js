import { RadioButtons, NumberInput } from "./Form";
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
                <input type="text" id="Sname" name="Sname" placeholder="Scouter Name" className="text-input"/>
                <br />
                <label className="item-label" htmlFor="Ename"><strong>Event Name</strong> </label>
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
            <p className="section-label">Pre-Game</p>

            <div className="textArea">
                <label className="item-label" htmlFor="Num"><strong>Match Number</strong> </label>
                <input className="text-input" type="text" id="Num" name="match" />

                <br></br>
                <br></br>
                <label className="item-label" htmlFor="Num"><strong>Team Number</strong> </label>
                <input className="text-input" type="text" id="Num" name="team" />

                <div className="textArea">

                    <h1><bold>Team Alliance</bold></h1>
                    <div className="align-radio">
                        <RadioButtons items={['Red 1', 'Red 2', 'Red 3', 'Blue 1', 'Blue 2', 'Blue 3']} name="alliance" />
                    </div>
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
            <p className="section-label">Auto</p>
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

                <div className="align-radio">
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
            <p className="section-label">Teleop/Endgame</p>

            <div className="textArea">
                <h1>Charging Station</h1>
                <div className="align-radio">
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


            <p className="section-label">Submit</p>
            <div className="textArea">
                {/* <label htmlFor="notes" className="item-label">Notes</label> */}
                <h1>Some things you could comment are:</h1>
                <div className="bullet-points">
                    <li>defensive bot</li>
                    <li>do they play defense</li>
                    <li>do they play optimistical</li>
                    <li>thinking of other questions</li>
                </div>
                <br />
                
                <input type="text" id="notes" name="notes" placeholder="Comment here" className="text-input" />
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
