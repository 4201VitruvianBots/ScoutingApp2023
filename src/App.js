import './App.css';

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
            <label for="Sname">Name </label>
            <input type="text" id="Sname" name="Sname" />
          </p>
          <p>
            <label for="Ename">Event Name </label>
            <select name="Ename" id="Ename">
              <option value="Choose" class="Placeholder" disabled selected>Choose Event</option>
              <option value="Blitz">Beach Blitz</option>
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
          <label for="Num">Team Number </label>
          <input type="text" id="Num" name="Num" />
        </p>
        <p>
          <label for="Alliance">Team Alliance </label>
          <select name="Alliance" id="Alliance">
            <option value="Choose" class="Placeholder" disabled selected>Choose Alliance</option>
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
        <label for="Taxi">Taxi</label>
        <input type="checkbox" id="Taxi" name="Taxi" />
      </p>
      <p>
        <label for="noAuto">Not Attempted</label>
        <input type="checkbox" id="noAuto" name="noAuto" />
      </p>
      <p>
        <label for="Upper">Upper Cargo</label>
        <input type="number" value="Upper" name="Upper" min="1" max="100"/>
      </p>
      <p>
        <label for="Lower">Lower Cargo</label>
        <input type="number" value="Lower" name="Lower" min="1" max="100"/>
      </p>
    </div>

      {/*3. Teleop
    - Upper & Lower Cargo
    - Fouls*/}
    <h2>Tele-op</h2>
    <label>Upper Cargo</label>
      {/*4. Endgame
    - 5 large multi choice buttons
        - climb levels + did not attmpet (smaller)
    - No Timer*/}

      {/*5. Save page
    - "Currently saved" counter*/}


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
