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
        <div>
            <h2>Sign In</h2>
            <form onSubmit={props.onSubmit} >
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
                <input type="submit" value="START SCOUTING!" />
            </form>
        </div>
    );
}

function PreGame(props) {
    return (
        <Page selected={props.selected} className="page" id="pre-game">
            <h2>Pre-Game</h2>
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
            <h2>Auto</h2>
            <p>
                <label htmlFor="Taxi">Taxi</label>
                <input type="checkbox" id="Taxi" name="Taxi" />
            </p>
            <p>
                <label htmlFor="noAuto">Not Attempted</label>
                <input type="checkbox" id="noAuto" name="noAuto" />
            </p>
            <NumberInput id="autoUp" label="Upper Cargo" />
            <NumberInput id="autoLow" label="Lower Cargo" />

        </Page>
    );
}

function TeleOp(props) {
    return (
        <Page selected={props.selected} id="tele-op">
            <h2>Teleop</h2>

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
            <h2>Endgame</h2>
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
            <h2>Save Page</h2>
            <p>
                <label htmlFor="clear">QR code and clear</label>
                <input type="submit" className="SAVE"value="clear" />
            </p>
            <p>
                <label htmlFor="continue">Save and continue</label>
                <input type="submit" className="SAVE" value="continue" />
            </p>
        </Page>
    );
}

export { SignIn, PreGame, Auto, TeleOp, Endgame, SavePage };
