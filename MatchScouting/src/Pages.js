import { RadioButtons, NumberInput } from "./Form";
import './App.css';

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
            <p className="section-label">Energized</p>
            <form onSubmit={props.onSubmit} action="#">
                <div className="textArea">
                    
                    <input type="text" id="Sname" name="Sname" placeholder="Scouter Name"/>
                    <br />
                    <label className="item-label" htmlFor="Ename"><strong>Event Name</strong> </label>
                    <br />
                    <br />
                    <select name="Ename" id="Ename" defaultValue="Choose">
                        <option value="Choose" className="Placeholder" disabled>Choose Event</option>
                        <option value="BeachBlitz">Port Hueneme</option>
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
     
    <div className="textArea">
    <label className="item-label" htmlFor="Num"><strong>Math Number</strong> </label> 
    <input className="text-input" type="text" id="Num" name="Num" />

    <br></br>
<br></br>
        <label className="item-label" htmlFor="Num"><strong>Team Number</strong> </label>
        <input className="text-input" type="text" id="Num" name="Num" />
        <br />
        <div className="textArea">

        <h1><bold>Team Alliance</bold></h1>
       
        <RadioButtons items={['Red 1', 'Red 2', 'Red 3', 'Blue 1', 'Blue 2', 'Blue 3']} />
    <h1><strong>No show robot?</strong></h1>
    <RadioButtons items={['Yes, my robot did not show up', 'No, my robot did  show up']} />
    </div> 
        </div>
        </Page>

    );
}
function Auto(props) {
    return (
        <Page selected={props.selected} id="auto">
           <p className="section-label">Auto</p>
            <div className="textArea">
            {/* <button type="button">Mobility?</button> */}
            
            {/* <h2>Mobility</h2> */}
<div class="container">
  <div class="center">
    <button>Mobility</button>
  </div>
</div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

           <h1>Charging Station</h1>

           <RadioButtons items={['Docked', 'Engaged', 'No points']} />
           <h1>Cones</h1>
            <NumberInput items={['1']}/>    
            <br></br>
            <NumberInput items={['1']}/>           
            <br></br>
            <NumberInput items={['1']}/>           
            <br></br>
            <h1>Cubes</h1>
            <NumberInput items={['1']}/>    
            <br></br>
            <NumberInput items={['1']}/>           
        	<br></br>
            <NumberInput items={['1']}/>           



           </div>
        </Page>
    );
}

function TeleOp(props) {
    return (
        <Page selected={props.selected} id="tele-op">
            <p className="section-label">Teleop/Endgame</p>

             <div className="textArea">
             <h1>Charging Station</h1>

             <RadioButtons items={['Docked', 'Engaged', 'No points', 'Parking']} />
           <h1>Cones</h1>
            <NumberInput items={['1']}/>    
            <br></br>
            <NumberInput items={['1']}/>           
            <br></br>
            <NumberInput items={['1']}/>           
            <br></br>
            <h1>Cubes</h1>
            <NumberInput items={['1']}/>    
            <br></br>
            <NumberInput items={['1']}/>           
        	<br></br>
            <NumberInput items={['1']}/>           
</div>
           
            

        </Page>

    );
}
// charge station
// button for mobility
function SavePage(props) {
    return (
        <Page selected={props.selected} id="S">
           <br></br>
            <br></br>
          
            <p className="section-label">Sumbit</p>
            <div className="areaSaP">
            <label htmlFor="notes" className="item-label">Notes</label>
            <h1>Some things you could comment are</h1>
            <li>  defensive bot </li>
            <li> do they play defense  </li>
            <li>  do they play optimistical  </li>
            <li> thinking of other questions   </li>

                <br/>
                <br/>
                <input type="text" id="notes" name="notes" />
            <label className="item-label" htmlFor="clear">QR code and clear</label> 
                <input type="submit" className="SAVE" value="Generate QR code"></input>
                <br /> 
                <label className="item-label" htmlFor="continue">Save and continue</label> 
                <input type="reset" className="CLEAR" value="Clear Form" />
                <br/>
                <br/>

               <div id="QRCode">{props.QRCode}</div>                
            </div> 
        </Page>
    );
}

export { SignIn, PreGame, Auto, TeleOp,  SavePage };
