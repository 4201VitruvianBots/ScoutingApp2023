import { RadioButtons, NumberInput, ButtonInput, MultiButton, Upload } from "./Form";
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
                    <input type="text" id="Sname" name="Sname" placeholder="Scouter Name" />
                    <label className="item-label" htmlFor="Ename"><strong>Event Name</strong> </label>
                    <select name="Ename" id="Ename" defaultValue="Choose">
                        <option value="Choose" className="Placeholder" disabled>Choose Event</option>
                        <option value="BeachBlitz">Port Hueneme</option>
                    </select>
                    <input type="submit" className="SAVE" value="Sign In" />
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
                <input className="text-input" type="text" id="Num" name="Num" placeholder="Team NUMBER" />
                <input className="text-input" type="text" id="Num" name="Num" placeholder="Team NAME" />
                <RadioButtons />
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
                        {/* <MultiButton />
                        <MultiButton />
                        <MultiButton />
                        <MultiButton /> */}
                        <MultiButton items={[['Tank', 't'], ['Swerve', 's'], ['Mecanum', 'm'], ['Other', 'o']]} name="autostation" />
                    </div>

                    
                    {/* <div className="test2" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                        <label class="btn btn-outline-primary" for="btnradio1">Radio 1</label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                        <label class="btn btn-outline-primary" for="btnradio2">Radio 2</label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                        <label class="btn btn-outline-primary" for="btnradio3">Radio 3</label>
                    </div> */}

                    <div className="gamepieces">
                        <p className="generalLabel">Game Piece Capability</p>
                        <ButtonInput on_label='CONES' off_label='Cones' />
                        <ButtonInput on_label='CUBES' off_label='Cubes' />
                    </div>

                    <div className="scoringLocation">
                        <p className="generalLabel">Scoring Location Capability</p>
                        <ButtonInput on_label='LOW' off_label='Low' id='1' value="1" />
                        <ButtonInput on_label='MID' off_label='Mid' id='2' value="1" />
                        <ButtonInput on_label='HIGH' off_label='High' id='3' value="1" />

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
                <p>DRIVETRAIN</p>
                <Upload size="100px"></Upload>
                <p>INTAKE</p>
                <Upload></Upload>
                <p>UPTAKE</p>
                <Upload></Upload>
                <p>OUTTAKE</p>
                <Upload></Upload>
                <p>EXTRAS</p>
                <Upload></Upload>
            {/* <input type="file" multiple accept="image/*" /> */}
            </div>
        </Page>
    );
}

function SavePage(props) {
    return (
        <Page selected={props.selected} id="save-page">
            
            <p className="section-label">Save Page</p>
            <div className="textArea">
            <label htmlFor="notes" className="item-label">Notes</label>
                <br/>
                <br/>
                <input type="text" id="notes" name="notes" />
                
             {/* <label className="item-label" htmlFor="continue">Save and continue</label>  */}
            
            <input type="submit" className="submit-button"/>Save and continue

            <input type="reset" className="CLEAR" value="Clear Form"/>
            {/* </div> */}

            {/* <div id="QRCode">{props.QRCode}</div>                
            </div> */}
            </div>
        </Page>
    );
}

export { SignIn, TeamInfo, General, Photos, SavePage };
