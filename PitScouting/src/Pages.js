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
            <p className="section-label">Pit Scouting</p>
            <form onSubmit={props.onSubmit} action="#">
                <div className="textArea">
                    <input type="text" id="Sname" name="Sname" placeholder="Scouter Name"/>
                    <label className="item-label" htmlFor="Ename"><strong>Event Name</strong> </label>
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

function TeamInfo(props) {
    return (
        <Page selected={props.selected} className="page" id="teaminfo">
            <p className="section-label">Team Info</p>
    <div className="textArea">
        <input className="text-input" type="text" id="Num" name="Num" placeholder="Team NUMBER"/>
        <input className="text-input" type="text" id="Num" name="Num" placeholder="Team NAME"/>
    </div>
        </Page>
    );
}

function General(props) {
    return (
        <Page selected={props.selected} id="general">
           <p className="section-label">General</p>
            <div className="textArea">
                <div className="gallery">
                    <div className="leftSide">
                        <p>I'm on the left</p>
                    </div>
                    <div className="rightSide">
                        <p>I'm on the right</p>
                    </div>
                </div>
           </div>
        </Page>
    );
}

function Photos(props) {
    return (
        <Page selected={props.selected} id="photos">
            <p className="section-label">Photos</p>
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

export { SignIn, TeamInfo, General, Photos,  SavePage };
