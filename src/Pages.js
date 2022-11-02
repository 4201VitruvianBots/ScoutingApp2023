import { RadioButtons, NumberInput } from "./Form";
import './index.css';

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
            <p className="page-title">Welcome to Vitruvian Scouting</p>
            <p className="section-label">Sign-In</p>
            <form onSubmit={props.onSubmit} action="#">
                <div className="areaSI">
                    <label className="item-label" htmlFor="Sname" ><strong>Name</strong> </label>
                    <br />
                    <br />
                    <input type="text" id="Sname" name="Sname" />
                    <br />
                    <label className="item-label" htmlFor="Ename"><strong>Event Name</strong> </label>
                    <br />
                    <br />
                    <select name="Ename" id="Ename" defaultValue="Choose">
                        <option value="Choose" className="Placeholder" disabled>Choose Event</option>
                        <option value="BeachBlitz">Beach Blitz</option>
                    </select>
                    <input type="submit" className="SAVE" value="Sign In"/>
                </div>

            </form>
        </div>
    );
}

function PreGame(props) {
    return (
        <Page selected={props.selected} className="page" id="pre-game">
            <p className="section-label">Pre-Game</p>
            <div className="areaPG">
                <label className="item-label" htmlFor="Num"><strong>Team Number</strong> </label>
                <br />
                <br />
                <input className="text-input" type="text" id="Num" name="Num" />
                <br />
                <label className="item-label" htmlFor="Alliance"><strong>Team Alliance</strong> </label>
                <br />
                <br />
                <select name="Alliance" id="Alliance" defaultValue="Choose">
                    <option value="Choose" className="Placeholder" disabled>Choose Alliance</option>
                    <option value="Red">Red Alliance</option>
                    <option value="Blue">Blue Alliance</option>
                </select>
                <br></br>
                <label className="item-label" htmlFor="Match Number"><strong>Match Number</strong></label>
                <br />
                <br />
                <input className="text-input" type="text" id="Num" name="Num" />
            </div>

        </Page>
    );
}

function Auto(props) {
    return (
        <Page selected={props.selected} id="auto">
            <p className="section-label">Auto</p>
            <div className="areaAU">
            <br/>
            <br/>
            <br/>
            <label className="item-label" for="autoUp"><strong>Upper Cargo</strong></label>
                <NumberInput id="autoUp"/>
            <label className="item-label" for="autoLow"><strong>Lower Cargo</strong></label>
                <NumberInput id="autoLow"/>
           </div>
        </Page>
    );
}

function TeleOp(props) {
    return (
        <Page selected={props.selected} id="tele-op">
            <p className="section-label">Teleop</p>
            <div className="areaTE">
                <label className="item-label" for="teleopUp"><strong>Upper Cargo</strong></label>
                <NumberInput id="teleopUp" />
                <label className="item-label" for="teleopLow"><strong>Lower Cargo</strong></label>
                <NumberInput id="teleopLow" />
                <label className="item-label" for="foul"><strong>Fouls</strong></label>
                <NumberInput id="foul" />
                <label className="item-label" for="tfoul"><strong>Tech Fouls</strong></label>
                <NumberInput id="tfoul" />
            </div>
        </Page>
    );
}

function Endgame(props) {
    return (
        <Page selected={props.selected} id="endgame">
            <p className="section-label">Endgame</p>
            <div className="areaEG">
            <h3 className="item-label" for="climbType"></h3>
            <div class="radioButtons">
            <RadioButtons className="item-label" name="climbType" items={{
                "lowClimb": "Low",
                "midClimb": "Mid",
                "highClimb": "High",
                "traversalClimb": "Traversal",
                "noClimb": "Not Attempted",
                "failedClimb": "Attempted But Failed"
            }} />
            </div>
            </div>   
        </Page>
    );
}

function SavePage(props) {
    return (
        <Page selected={props.selected} id="save-page">
            <br></br>
            <br></br>
            <p className="section-label">Save Page</p>
            <div className="areaSaP">
                
            { /* <label className="item-label" htmlFor="clear">QR code and clear</label> */}
                    <input type="submit" className="SAVE"value="QR code and clear" />
                <br/>
            {/* } <label className="item-label" htmlFor="continue">Save and continue</label> */}
                    <input type="submit" className="SAVE" value="Save and continue" />

            <div id="QRCode"></div>

            </div>
        </Page>
    );
}

export { SignIn, PreGame, Auto, TeleOp, Endgame, SavePage };
