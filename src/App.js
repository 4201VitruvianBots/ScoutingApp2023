import './App.css';
// import { CountdownCircleTimer } from 'react-countdown-circle-timer'

function App() {
  return (
    <div className="App">
      <header>
        <p className="title">Team 4201<br/>The Vitruvian Bots</p>
        <p className="megatitle">2022 Scouting App</p>
      </header>

      {/* GENERAL INFO */}
      <div className="section-header">
        <p className="title-in-green">General Info</p>
          <label for="name1" className="title-in-green-small"> Scouter's Name: </label>
          <input id="name1" type="text" required/> 
          <br/>
          <p className="title-in-green-small" >Robot ID:</p>
          <button id="robot-id" className="robotIDb-t">Red 1</button>
          <button id="robot-id" className="robotIDb-t">Red 2</button>
          <button id="robot-id" className="robotIDb-t">Red 3</button>
          <br/>
          <button id="robot-id" className="robotIDb-c">Blue 1</button>
          <button id="robot-id" className="robotIDb-c">Blue 2</button>
          <button id="robot-id" className="robotIDb-c">Blue 3</button>
      </div>

      {/* AUTONOMOUS */}
      <div className="section-header">
        <p className="title-in-green">Autonomous</p>
        <div>
          <p className="autoB">Taxi: </p>
          <button type="radio" className="autoB">Yes</button>
          <button type="radio" className="autoB">No</button>
        </div>
      </div>

      {/* TELEOP */}
      <div className="section-header">
      <p className="title-in-green">Teleop</p>
      </div>
      
      {/* ENDGAME */}
      <div className="section-header">
      <p className="title-in-green">Endgame</p>
      <p className="title-in-green-small" >Climb status:</p>
          <button id="robot-id" className="robotIDb-e">Low</button>
          <button id="robot-id" className="robotIDb-e">Mid</button><br/>
          <button id="robot-id" className="robotIDb-e">High</button>
          <button id="robot-id" className="robotIDb-e">Traversal</button><br/>
          <button id="robot-id" className="robotIDb-e">Not attempted</button>
          <button id="robot-id" className="robotIDb-e">Attempted but failed</button>
      </div>

      {/* SUBMISSION */}
      <div className="submission-header">
        <p className="title-in-green">Submission</p>
          <label for="name1" className="title-in-green-small"> Comments: </label>
          <input id="name1" type="text" required/> 
        <br/>
        <br/>
        <button id="robot-id" className="robotIDb-z">Submit form</button>
      </div> 
     </div>
      
  );
}

export default App;

 {/*
// Skye: text inputs, dropdowns
// Natalie: radio buttons, checkboxes


      <div id="Timer"></div>
      <header className="App-header">
        <p>Scouting App</p>
        <hr></hr>
        <p> Login Information </p>
        <div></div>
        <p> Name</p>
        <label for="dog-names">Choose your name:</label>
        <select name="names" id="Name">
          <option value="rigatoni">Rigatoni</option>
          <option value="dave">Dave</option>
          <option value="pumpernickel">Pumpernickel</option>
          <option value="reeses">Reeses</option>
        </select>
      </header>
      <div className="section-header">
        <p>Scouter's Info</p>
        <label for="Name">Name:</label>
        <input type="text" id="Name" name="Name" minlength="2"></input>
        <br></br>
        <br></br>
        <label for="Alliance">Choose you Alliance:</label>
        <select name="names" id="Name">
          <option value="Red 1">Red 1</option>
          <option value="Red 2">Red 2</option>
          <option value="Red 3">Red 3</option>
          <option value="Blue 1">Blue 1</option>
          <option value="Blue 2">Blue 2</option>
          <option value="Blue 3">Blue 3</option>
        </select>
        <br></br>
        <br></br>
        <label for="Team Number">Team Number:</label>
        <input type="text" id="Name" name="Name" minlength="2"></input>
        <br></br>
        <br></br>
        <label for="Event">Choose the Event:</label>
        <select name="names of event" id="Name">
          <option value="Port Hueneme">Port Hueneme</option>
          <option value="LAR">LAR</option>
        </select>
        <br></br>
        <br></br>
        <label for="Match Level">Match Level:</label>
        <select name="names" id="Name">
          <option value="Quals">Quals</option>
          <option value="Quarter-Final">Quarter-Final</option>
          <option value="Finals">Finals</option>
        </select>
        <br></br>
        <br></br>
        <label for="Match Number">Match Level:</label>
        <input type="text" id="Name" name="Name" minlength="2"></input>
      </div>
      <div className="section-header">
        <p>Autonomous</p>
        <label for="Taxi">Taxi:</label>
        <select name="Taxi" id="Taxi">
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <h3><center>Upper Cargo Counter</center></h3>
        <div>
          <center><h3 id="counter-label">0</h3></center>
        </div>
        <center>
          <div>
            <button onclick="incrementClick()">Add one point</button>
            <button onclick="resetCounter()">Reset</button>
            <br></br>
            <br></br>
            <h3><center>Lower Cargo Counter</center></h3>
            <div>
              <center><h3 id="counter-label">0</h3></center>
            </div>
            <center>
              <div>
                <button onclick="incrementClick()">Add one point</button>
                <button onclick="resetCounter()">Reset</button>
                <br></br>
                <br></br>
              </div>
            </center>
          </div>
        </center>
      </div>
      <div className="section-header">
        <p>Teleop</p>
        <br></br>
        <br></br>
        <h3><center>Upper Cargo Counter</center></h3>
        <div>
          <center><h3 id="counter-label">0</h3></center>
        </div>
        <center>
          <div>
            <button onclick="incrementClick()">Add one point</button>
            <button onclick="resetCounter()">Reset</button>
          </div>
        </center>
        <br></br>
        <br></br>
        <h3><center>Lower Cargo Counter</center></h3>
        <div>
          <center><h3 id="counter-label">0</h3></center>
        </div>
        <center>
          <div>
            <button onclick="incrementClick()">Add one point</button>
            <button onclick="resetCounter()">Reset</button>
          </div>
        </center>
      </div>
      <div className="section-header">
        <p>Endgame</p>
        <br></br>
        <timerComponent />
        <label for="Climb">Climb:</label>
        <select name="Climb" id="Climb">
          <option value="Low">Low</option>
          <option value="Mid">Mid</option>
          <option value="Traversal">Traversal</option>
          <option value="Attempted but failed">Attempted but failed</option>
          <option value="Not attempted">Not attempted</option>
        </select>
        <br></br>
        <br></br>
        <div className="section-header">
          <div>
          </div>
          <p>Miscellaneous</p>
          <label for="Comments">Comments:</label>
          <input type="text" id="Name" name="Name" minlength="2"></input>
        </div>
        <CountdownCircleTimer
          isPlaying
          duration={30}
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[7, 5, 2, 0]}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      
  */ }