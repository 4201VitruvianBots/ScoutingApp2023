import { RadioButtons, NumberInput, ButtonInput } from "./Form";
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
            <p className="section-label">Team LOOK UP!</p>
            <p><em>Is that the roof?!</em></p>
            {/* <form onSubmit={props.onSubmit} action="#">
                <div className="textArea">
                
                    <input type="text" id="Sname" name="Sname" placeholder="Scouter Name"/>
                    <label className="item-label" htmlFor="Ename"><strong>Event Name</strong> </label>
                    <select name="Ename" id="Ename" defaultValue="Choose">
                        <option value="Choose" className="Placeholder" disabled>Choose Event</option>
                        <option value="BeachBlitz">Port Hueneme</option>
                    </select>
                    <input type="submit" className="SAVE" value="Sign In"/> 
                </div>

            </form> */}
        </div>
    );
}

function TeamInfo(props) {
    return (
        <Page selected={props.selected} className="page" id="teaminfo">
            <p className="section-label">Team Info</p>
    <div className="textArea">
        <h2>Team number (sync)</h2>
        <h2>match number (sync?)</h2>
        <p><strong>Score Averages</strong></p>
        {/* <button className="generalButton">High</button>
        <button className="generalButton">Mid</button>
        <button className="generalButton">Low</button> */}
         <ButtonInput off_label="Show High Average?" on_label="(a popup?)" />
        <ButtonInput off_label="Show Mid Average?" on_label="(a popup?)" />
        <ButtonInput off_label="Show Low Average?" on_label="(a popup?)" />
        <br></br>
        <ButtonInput off_label="Show Fouls" on_label="(a popup?)" />
        <ButtonInput off_label="Cooperation" on_label="(a popup?)" />
        {/* <button className="generalButton">Fouls</button>
        <button className="generalButton">Cooperation</button> */}
        <br></br>
        <ButtonInput off_label="Cargo Preference?" on_label="(a popup?)" />
        <ButtonInput off_label="Autos Average?" on_label="(a popup?)" />
        {/* <button className="generalButton">Cargo Preference</button>
        <button className="generalButton">Autos Average</button> */}
        
        {/* <input className="text-input" type="text" id="Num" name="Num" placeholder="Team NUMBER"/>
        <input className="text-input" type="text" id="Num" name="Num" placeholder="Team NAME"/> */}

       

    </div>
        </Page>
    );
}

function General(props) {
    return (
        <Page selected={props.selected} id="comments">
           <p className="section-label">Comments</p>
            <div className="textArea">
                <div className="gallery">
                    <input type="textbox" placeholder="Type here"></input>

                    {/* <div className="green-block">
                        <p className="generalLabel">Drivetrain Type</p>
                        <input type="button" className="generalButton" value="Tank"/> 
                        <input type="button" className="generalButton" value="Swerve"/> 
                        <input type="button" className="generalButton" value="Mecanum"/>
                        <input type="button" className="generalButton" value="Other"/> 
                    </div> */}

                    {/* <div className="green-block">
                        <p className="generalLabel">Game Piece Capability</p>
                        <input type="button" className="generalButton" value="Cones"/> 
                        <input type="button" className="generalButton" value="Cubes"/> 
                    </div> */}

                    {/* <div className="green-block">
                        <p className="generalLabel">Scoring Location Capability</p>
                        <input type="button" className="generalButton" value="Low"/> 
                        <input type="button" className="generalButton" value="Mid"/> 
                        <input type="button" className="generalButton" value="High"/> 
                    </div> */}

                    {/* <div className="motors">
                        <p className="generalLabel"># of Motors (Tank- on each side)</p>
                        <NumberInput items={['1']}/>
                    </div> */}

                    {/* <div className="batteries">
                        <p className="generalLabel"># of Batteries (total)</p>
                        <NumberInput items={['1']}/>
                    </div> */}

                    {/* <div className="motorType">
                        <input type="text" placeholder="Drivetrain Motor Type"></input>
                    </div> */}

                    {/* <div className="autos">
                    <input type="text" placeholder="Autos (# and type)"></input>
                    </div> */}

                    {/* <div className="workingOn">
                    <input type="text" placeholder="Things they are working on"></input>
                    </div> */}

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
