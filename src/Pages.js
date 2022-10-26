import { RadioButtons, NumberInput } from "./Form";

function SignIn(props) {
    return (
        <div className="page">
            <h2>Sign In</h2>
            <form>
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
                <input type="button" value="START SCOUTING!" />
            </form>
        </div>
    );
}

function PreGame(props) {
    return (
        <div className="page" id="pre-game">
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
        </div>
    );
}

function Auto(props) {
    return (
        <div className="page" id="auto">
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

        </div>
    );
}

function TeleOp(props) {
    return (
        <div className={props.selected ? "page selected" : "page"} id="tele-op">
            <h2>Teleop</h2>

            <NumberInput id="teleopUp" label="Upper Cargo" />
            <NumberInput id="teleopLow" label="Lower Cargo" />
            <NumberInput id="foul" label="Foul" />
            <NumberInput id="tfoul" label="Tech Foul" />
        </div>
    );
}

function Endgame(props) {
    return (
        <div className="page" id="endgame">
            <h2>Endgame</h2>
            <RadioButtons name="climbType" items={{
                "lowClimb": "Low Bar",
                "midClimb": "Mid Bar",
                "highClimb": "High Bar",
                "traversalClimb": "Traversal Climb",
                "noClimb": "Not Attempted",
                "failedClimb": "Attempted But Failed"
            }} />
        </div>
    );
}

function SavePage(props) {
    return (
        <div className="page" id="save-page">
            <h2>Save Page</h2>
            <p>
                <label htmlFor="clear">QR code and clear</label>
                <input type="submit" value="clear" />
            </p>
            <p>
                <label htmlFor="continue">Save and continue</label>
                <input type="submit" value="continue" />
            </p>
        </div>
    );
}

export { SignIn, PreGame, Auto, TeleOp, Endgame, SavePage };