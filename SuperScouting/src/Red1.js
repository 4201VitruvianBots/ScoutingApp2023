import { RadioButtons, NumberInput, ButtonInput } from "./Form";
import './App.css';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

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
                <div class="tab">
                    <button class="tablinks" onclick="openCity(event, 'Sign-in')">Sign-in</button>
                    <button class="tablinks" onclick="openCity(event, 'Fouls')">          Fouls        </button>
                    <button class="tablinks" onclick="openCity(event, 'Sumbit')">        Sumbit        </button>
                    <br></br>
                </div>
                <br></br>
                <div class="tab">
                    <button class="tablinks" onclick="openCity(event, 'Red 1')">Red 1</button>
                    <button class="tablinks" onclick="openCity(event, 'Red 2')">Red 2</button>
                    <button class="tablinks" onclick="openCity(event, 'Red 3')">Red 3</button>
                    <button class="tablinks" onclick="openCity(event, 'Blue 1')">Blue 1</button>
                    <button class="tablinks" onclick="openCity(event, 'Blue 2')">Blue 2</button>
                    <button class="tablinks" onclick="openCity(event, 'Blue 3')">Blue 3</button>
                    <br></br>
                    <br />
                </div>
            </div>
        </Page>
    );
}
const FoulsDrop = [
    { label: 'Foul (Bumpers)', value: 'Foul0' },
    { label: 'RED CARD Keep it together', value: 'Foul4' },
    { label: 'FOUL (Tall ROBOTS not allowed.)', value: 'Foul9' },
    { label: 'FOUL ( Don’t overextend yourself )', value: 'Foul8' },
    { label: 'TECH FOUL if the over-extension scores a GAME PIECE ( Don’t overextend yourself )', value: 'Foul3' },
    { label: 'FOUL (Opponent’s zone, no extension.)', value: 'Foul6' },
];
 
function Fouls(props) {
    return (
        <Page selected={props.selected} className="page" id="Fouls">
            <p className="section-label">Fouls</p>
            <div className="textArea">
                <ButtonInput on_label='Robot recieved a yellow card' off_label='Yellow Card ' />
                <ButtonInput on_label='Robot recieved a red card' off_label='Red Card ' />
                <div className="textArea">
                    <h1>Fouls</h1>
                    <NumberInput items={['1']} id="autoconehigh" />
                    <br></br>
                    <h1>Tech Fouls</h1>
                    <NumberInput items={['1']} id="autoconemid" />
                    <br></br>
                    <h1>Disable</h1>
                    <NumberInput items={['1']} id="autoconelow" />
                    <br></br>
                    {/* //ButtonInput for red and yellow card */}
                </div>
            </div>
            <Select
            isMulti
                options={FoulsDrop}
                onChange={opt => console.log(opt)}
            />
        </Page>
    );
}
function SavePage(props) {
    return (
        <Page selected={props.selected} id="save-page">
            <p className="section-label">Submit</p>
            <div className="textArea">
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
export { SignIn, SavePage, Fouls};