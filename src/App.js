import './App.css';
import { RadioButtons, NumberInput } from "./Form";

function App() {
  return (
    <main>
      {/*Sign-in Page
    - Scouter Name
    - Event*/}
      <div>
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

      {/*1. Pre-game info
    - Team Number
    - Alliance
    - No Robot Number
- No Robot Placement*/}
      <div>
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


      {/*2. Autonomous
    - Taxi?
    - Lower Cargo & upper cargo (large buttons, counter, type in box)
    - Did not attempt*/}
      <div>
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

      {/*3. Teleop
    - Upper & Lower Cargo
    - Fouls*/}
      <div>
        <h2>Teleop</h2>

        <NumberInput id="teleopUp" label="Upper Cargo" />
        <NumberInput id="teleopLow" label="Lower Cargo" />
        <NumberInput id="foul" label="Foul" />
        <NumberInput id="tfoul" label="Tech Foul" />
      </div>

      {/*4. Endgame
    - 5 large multi choice buttons
        - climb levels + did not attempt (smaller)
    - No Timer*/}
      <div>
        <h2>Endgame</h2>

        <RadioButtons name="climbType" items={{
          "lowClimb": "Low Bar",
          "midClimb": "Mid Bar",
          "highClimb": "High Bar",
          "traversalClimb": "Traversal Climb",
          "noClimb": "Not Attempted"
        }}/>
      </div>

      {/*5. Save page
    - "Currently saved" counter*/}
      <div>
        <h2>Save Page</h2>
        <p>
          <input type="submit" value="QR code and clear" /> {/*Make these type="submit", because these are going to be our subit buttons */}
        </p>
        <p>

          <input type="submit" value="Save and continue" />
        </p>
      </div>


      {/*Save options:
      - QR Code at the end?
          - "QR code and clear" and "save and continue" buttons
          - QR code is really big
      - Normal
      - Download a file
          - USB cable
          - wireless sharing*/}
    </main>
  );
}

export default App;
