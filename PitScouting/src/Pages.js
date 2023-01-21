import { RadioButtons, NumberInput, ButtonInput, MultiButton } from "./Form";
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

                    <div className="drivetrain">
                        <p className="generalLabel">Drivetrain Type</p>
                        {/* some kind of input where you can declare the number and titles of all your options in one input*/}
                        <MultiButton name='erp'/>
                        <MultiButton />
                        <MultiButton />
                        <MultiButton />
                    </div>

                    <div className="gamepieces">
                        <p className="generalLabel">Game Piece Capability</p>
                        <ButtonInput on_label='CONES' off_label = 'Cones' /> 
                        <ButtonInput on_label='CUBES' off_label = 'Cubes' />
                    </div>

                    <div className="scoringLocation">
                        <p className="generalLabel">Scoring Location Capability</p>
                        <ButtonInput on_label='LOW' off_label = 'Low' id='1' value="1"/>
                        <ButtonInput on_label='MID' off_label = 'Mid' id='2' value="1"/>
                        <ButtonInput on_label='HIGH' off_label = 'High' id='3' value="1"/>
                    </div>

                    <div className="motors">
                        <p className="generalLabel"># of Motors (Tank- on each side)</p>
                        <NumberInput />
                    </div>

                    <div className="batteries">
                        <p className="generalLabel"># of Batteries (total)</p>
                        <NumberInput />
                    </div>

                    <div className="motorType">
                        <input type="text" placeholder="Drivetrain Motor Type"></input>
                    </div>

                    <div className="autos">
                    <input type="text" placeholder="Autos (# and type)"></input>
                    </div>

                    <div className="workingOn">
                    <input type="text" placeholder="They're working on..."></input>
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
