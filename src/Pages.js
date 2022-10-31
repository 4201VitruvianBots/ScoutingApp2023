import { RadioButtons, NumberInput } from "./Form";

function Page(props) {
    return (
        <div className={props.selected ? 'page selected' : 'page'} id={props.id}>
            {props.children}
        </div>
    );
}

function SignIn(props) {
    return (
        <div className="pageselected">
            <h2>Sign In</h2>
            <form onSubmit={props.onSubmit} action="#">
                <p>
                    <label htmlFor="Sname">Name </label>
                    <input type="text" id="Sname" name="Sname" />
                </p>

                <p>
                    <label htmlFor="Ename">Event Name </label>
                    <select name="Ename" id="Ename" defaultValue="Choose">
                        <option value="Choose" className="Placeholder" disabled>Choose Event</option>
                        <option value="BeachBlitz">Beach Blitz</option>
                    </select>

                </p>
                <input type="submit" className="savept2" value="START SCOUTING!" />
            </form>
        </div>
    );
}

function PreGame(props) {
    return (
        <Page selected={props.selected} className="page" id="pre-game">
            <h2 className="selection">Pre-Game</h2>
            <p>
                <label htmlFor="Num">Team Number </label>
                <input type="text" id="Num" name="Num" />
            </p>
            <p>
                <label htmlFor="Alliance">Team Alliance </label>
                <select name="Alliance" id="Alliance" defaultValue="Choose">
                    <option value="Choose" className="Placeholder" disabled>Choose Alliance</option>
                    <option value="Red">Red Alliance</option>
                    <option value="Blue">Blue Alliance</option>
                </select>
            </p>
            <input type="button" value="GAME BEGIN!" />
        </Page>
    );
}

function Auto(props) {
    return (
        <Page selected={props.selected} id="auto">
            <h2 className="selection">Auto</h2>
            <p className="selection">
                <label htmlFor="Taxi">Taxi</label>
                <input type="checkbox" id="Taxi" name="Taxi" />
            </p>
            <br/>
            <p className="selection">
                <label htmlFor="noAuto">Did not attempt</label>
                <input type="checkbox" id="noAuto" name="noAuto" />
            </p>
            <br/>
            <br/>
            <NumberInput id="autoUp" label=" Upper Cargo" />
            <br/>
            <br/>
            <NumberInput id="autoLow" label=" Lower Cargo" />
            <br/>
            <br/>
        </Page>
    );
}

function TeleOp(props) {
    return (
        <Page selected={props.selected} id="tele-op">
            <h2 className="selection">Teleop</h2>

            <NumberInput id="teleopUp" label="Upper Cargo" />
            <NumberInput id="teleopLow" label="Lower Cargo" />
            <NumberInput id="foul" label="Foul" />
            <NumberInput id="tfoul" label="Tech Foul" />
        </Page>
    );
}

function Endgame(props) {
    return (
        <Page selected={props.selected} id="endgame">
            <h2 className="selection">Endgame</h2>
            <RadioButtons name="climbType" items={{
                "lowClimb": "Low Bar",
                "midClimb": "Mid Bar",
                "highClimb": "High Bar",
                "traversalClimb": "Traversal Climb",
                "noClimb": "Not Attempted",
                "failedClimb": "Attempted But Failed"
            }} />
        </Page>
    );
}

function SavePage(props) {
    return (
        <Page selected={props.selected} id="save-page">
            <h2 className="selection">Save Page</h2>
            <p className="selection">
                <label htmlFor="clear">QR code and clear</label>
                <input type="submit" className="SAVE"value="clear" />
            </p>
            <p className="selection">
                <label htmlFor="continue">Save and continue</label>
                <input type="submit" className="SAVE" value="continue" />
            </p>
            <div id="QRCode" className="selection"> 

            </div>
        </Page>
    );
}

export { SignIn, PreGame, Auto, TeleOp, Endgame, SavePage };
