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
        
        <label className="item-label" htmlFor="Num"><strong>Team Number</strong> </label>
        <input className="text-input" type="text" id="Num" name="Num" />
        <br />
        <label className="item-label" htmlFor="Alliance"><strong>Team Alliance</strong> </label>
        <select name="Alliance" id="Alliance" defaultValue="Choose">
            <option value="Choose" className="Placeholder" disabled>Choose Alliance</option>
            <option value="Red">Red Alliance</option>
            <option value="Blue">Blue Alliance</option>
        </select>
        <br />
        <label className="item-label" htmlFor="match"><strong>Match Number</strong></label>
        <br />
        <input className="text-input" type="text" id="match" name="match" />
    </div> 

        </Page>
    );
}

function Auto(props) {
    return (
        <Page selected={props.selected} id="auto">
           <p className="section-label">Auto</p>
            <div className="textArea">
           </div>
        </Page>
    );
}

function TeleOp(props) {
    return (
        <Page selected={props.selected} id="tele-op">
            <p className="section-label">Teleop/Endgame</p>
             <div className="textArea">
            </div>
        </Page>
    );
}

function SavePage(props) {
    return (
        <Page selected={props.selected} id="save-page">
            {/* <br></br>
            <br></br>
          
            <p className="section-label">Save Page</p>
            <div className="areaSaP">
            <label htmlFor="notes" className="item-label">Notes</label>
                <br/>
                <br/>
                <input type="text" id="notes" name="notes" />
                { /* <label className="item-label" htmlFor="clear">QR code and clear</label> */}
                {/* <input type="submit" className="SAVE" value="Generate QR code"></input>
                <br /> */}
                {/* } <label className="item-label" htmlFor="continue">Save and continue</label> */}
                {/* <input type="reset" className="CLEAR" value="Clear Form" /> */}
                <br/>
                <br/>

                {/* <div id="QRCode">{props.QRCode}</div>                
            </div> */}
        </Page>
    );
}

export { SignIn, PreGame, Auto, TeleOp,  SavePage };
