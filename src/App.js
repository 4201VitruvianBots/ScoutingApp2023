import './App.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

function App() {
  return (
    <div className="App">
      <div id="Timer"></div>

      <header className="App-header">
        <p>Scouting App</p>
        <hr></hr>

        <div></div>
        {/* <p> Name</p> */}
        {/* <label for="dog-names">Choose your name:</label>
        <select name="names" id="Name">
          <option value="rigatoni">Rigatoni</option>
          <option value="dave">Dave</option>
          <option value="pumpernickel">Pumpernickel</option>
          <option value="reeses">Reeses</option>
        </select> */}




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
          <option value="Beach Blitz">Beach Blitz</option>

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
            <button onclick="resetCounter()">Delete one point</button>
            <br></br>
            <br></br>
            <h3><center>Lower Cargo Counter</center></h3>
            <div>
              <center><h3 id="counter-label">0</h3></center>
            </div>
            <center>
              <div>
                <button onclick="incrementClick()">Add one point</button>
                <button onclick="resetCounter()">Delete one point</button>
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
        <h3><center>Foul Counter</center></h3>
            <div>
              <center><h3 id="counter-label">0</h3></center>
            </div>
            <center>
              <div>         </div>

                <button onclick="incrementClick()">Add one foul</button>
        <br></br>
        </center>
        <h3><center>Tech Foul Counter</center></h3>
            <div>
              <center><h3 id="counter-label">0</h3></center>
            </div>
            <center>
              <div>         </div>

                <button onclick="incrementClick()">Add one foul</button>
        <br></br>
        </center>
        <h3><center>Upper Cargo Counter</center></h3>
        <div>
          <center><h3 id="counter-label">0</h3></center>
        </div>
        <center>
          <div>
            <button onclick="incrementClick()">Add one point</button>
            <button onclick="resetCounter()">Delete one point</button>
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
            <button onclick="resetCounter()">Delete one point</button>
          </div>
        </center>


      </div>
      <div className="section-header">
        <p>Endgame</p>
        <div id="time">
            <span class="digit" id="sec">
              00</span>
            <span class="txt">Sec</span>
            <span class="digit" id="count">
              00</span>
              <span class="txt">ms</span>
        </div>
        <div id="buttons">
            <button class="btn" id="start">
              Start</button>
            <button class="btn" id="stop">
              Stop</button>
            <button class="btn" id="reset">
              Reset</button>
        </div>
        <timerComponent /> 
        <CountdownCircleTimer
          isPlaying
          duration={220}
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[7, 5, 2, 0]}
        >
          {({ remainingTime }) => remainingTime}
          
        </CountdownCircleTimer>    
           
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
        <label for="Comments">Time it took to climb:</label>
          <input type="text" id="Name" name="Name" minlength="2"></input>
        <br></br>
        <br></br>
        <div className="section-header">

          <div>
          </div>
          <hr></hr>
          <br></br>
          <br></br>
          <br></br>

          <p>Miscellaneous</p>
          <label for="Comments">Comments:</label>
          <input type="text" id="Name" name="Name" minlength="2"></input>
          <br></br>
          <br></br>
          <div class="form_container">
<form id="myform" onsubmit="return handle_form_submission()">
{/* <input type="text" name='name' id='name' placeholder='Name'/> */}
  <button type='submit'>Sumbit</button>
</form>

</div>
        </div>
        {/* <CountdownCircleTimer
          isPlaying
          duration={30}
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[7, 5, 2, 0]}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer> */}
        
        
      </div>
     
    </div>
  );

}





export default App;
