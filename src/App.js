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
          <label for="Name" className="subtitle-in-green">Name: </label>
        <input type="text" id="Name" name="Name" minlength="2"></input> 
          <br/>
          <div className="robotselector">
          <p className="subtitle-in-green" >Robot ID:</p>
          <button id="robot-id" className="robotIDb-t" value="Red1" >Red 1</button>
          <button id="robot-id" className="robotIDb-t" value="Red2" >Red 2</button>
          <button id="robot-id" className="robotIDb-t" value="Red3">Red 3</button>
          <br/>
          <button id="robot-id" className="robotIDb-c" value="Blue1" >Blue 1</button>
          <button id="robot-id" className="robotIDb-c" value="Blue2" >Blue 2</button>
          <button id="robot-id" className="robotIDb-c" value="Blue3">Blue 3</button>
          </div>
          <br/>
          <label for="Team Number" className="subtitle-in-green" >Team Number: </label>
        <input type="text" id="Name" name="Name" minlength="2"></input>
        <br></br>
        <br></br>
        <label for="Event" className="subtitle-in-green" >Choose the Event: </label>
        <select name="names of event" id="Name">
          <option value="Port Hueneme">Beach Blitz</option>
          <option value="Port Hueneme">Port Hueneme</option>
          <option value="LAR">LAR</option>
        </select>
        <br></br>
        <br></br>
        <label for="Match Level" className="subtitle-in-green" >Match Level: </label>
        <select name="names" id="Name">
          <option value="Quals">Quals</option>
          <option value="Quarter-Final">Quarter-Final</option>
          <option value="Finals">Finals</option>
        </select>
        <br></br>
        <br></br>
        <label for="Match Number" className="subtitle-in-green" >Match Level: </label>
        <input type="text" id="Name" name="Name" minlength="2"></input>

      </div>

      {/* AUTONOMOUS */}
      <div className="section-header">
        <p className="title-in-green">Autonomous</p>
        <div>
          <p className="autoB">Taxi: </p>
          <button type="radio" className="autoB" >Yes</button>
          <button type="radio" className="autoB">No</button>
        </div>
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

      {/* TELEOP */}
      <div className="section-header">
        <p className="subtitle-in-green">Telop</p>
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
      
      {/* ENDGAME */}
      <div className="section-header">
        <p className="subtitle-in-green">Endgame</p>
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
     /*
      fun displayQR(contents: String) {
        AwesomeQRCode.Renderer().contents(contents)
            .size(800).margin(20).dotScale(dataDotScale = 1f)
            .renderAsync(object : AwesomeQRCode.Callback {
                override fun onRendered(renderer: AwesomeQRCode.Renderer, bitmap: Bitmap) {
                    this@QRGenerateActivity.runOnUiThread {
                        iv_display_qr.setImageBitmap(bitmap)
                    }
                }

                override fun onError(renderer: AwesomeQRCode.Renderer, e: Exception) {
                    e.printStackTrace()
                }
            })
          }
            */
  
  );
}

export default App;