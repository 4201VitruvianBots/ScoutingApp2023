import { NumberInput, ButtonInput, MultiButton, SearchBar, Upload } from "./Form";
import './App.css';
import { useState } from "react";


function Page(props) {
    return (
        <div className={props.selected ? 'page selected' : 'page'} id={props.id}>
            {props.children}
        </div>
    );
}


function SignIn(props) {
    const [showCheck, setshowCheck] = useState(false);

    const handleSubmit = (event) => {
        setshowCheck(true);
        props.onSubmit(event);
        setTimeout(() => { setshowCheck(false) }, 5000);
    }

    return (
        <div id="SignIn">
            <p className="section-label">Pit Scouting</p>
            <p className="topNote">If the robot has an "other" drivetrain, specify it in the notes at the bottom!</p>
            <form onSubmit={handleSubmit} action="#">
                <div className="textArea">
                    <input type="text" id="Sname" name="Scouter_Name" placeholder="Scouter Name" className="name" required />
                    <br />
                    <select name="Competition" id="Ename" defaultValue="Choose">
                        <option value="LAR">LAR</option>
                    </select>
                    {showCheck && <div class="check"></div>}
                    <input type="submit" className="SAVE" value="Sign In" />

                    {/* when submitted 
                        <>checkmark image</> */}

                </div>
            </form>
        </div>
    );
}


function General(props) {
    return (
        <Page selected={props.selected} id="general">
            <p className="section-label">General</p>
            <div className="textArea">
                <div className="test2">

                    <div className="team">
                        <p className="generalLabel">Team Number</p>
                        <SearchBar setSelectedOption={props.setTeamOption} selectedOption={props.teamOption} name="Team_Number" className="teamSearch" />
                    </div>

                    <div className="drivetrain">
                        <p className="generalLabel">Drivetrain Type</p>
                        <div className="allianceSelect">
                            <MultiButton items={[['TANK', 'Tank'], ['SWERVE', 'Swerve'], ['MECANUM', 'Mecanum'], ['OTHER', 'Other']]} id="DriveTrain" />
                        </div>
                    </div>

                    <div className="gamepieces">
                        <p className="generalLabel">Game Piece Capability</p>
                        <ButtonInput on_label='CONES' off_label='Cones' id='Can_Hold_Cone' className="cone" />
                        <ButtonInput on_label='CUBES' off_label='Cubes' id='Can_Hold_Cube' className="cube" />
                    </div>

                    <div className="scoringLocation">
                        <p className="generalLabel">Scoring Location Capability</p>
                        <ButtonInput on_label='LOW' off_label='Low' id='Low' />
                        <ButtonInput on_label='MID' off_label='Mid' id='Mid' />
                        <ButtonInput on_label='HIGH' off_label='High' id='High' />


                    </div>

                    <div className="motors">
                        <p className="generalLabel"># of Motors </p> {/*(Tank- on each side)*/}
                        <NumberInput id="Number_Of_Motors" />
                    </div>

                    <div className="batteries">
                        <p className="generalLabel"># of Batteries (total)</p>
                        <NumberInput id="Number_Of_Batteries" />
                    </div>

                    <div className="motorType">
                        <textarea rows="4" cols="15" placeholder="Drivetrain Motor Types" name="DriveTrain_Motor_Type" required></textarea>
                    </div>

                    <div className="autos">
                        <textarea rows="4" cols="15" placeholder="Autos (# and type)" name="Autos" required></textarea>
                    </div>

                    <div className="workingOn">
                        <textarea rows="5" cols="40" placeholder="They're working on..." name="Working_On" required></textarea>
                    </div>

                </div>

            </div>
        </Page >
    );
}

function Photos(props) {
    return (
        <Page selected={props.selected} id="photos">
            <p className="section-label">Photos</p>
            <div className="textArea">
                <p className="smallLabel">DRIVETRAIN</p>
                <Upload name="Drivetrain_Photo"></Upload>
                <p className="smallLabel">INTAKE</p>
                <Upload name="Intake_Photo"></Upload>
                <p className="smallLabel">UPTAKE</p>
                <Upload name="Uptake_Photo"></Upload>
                <p className="smallLabel">OUTTAKE</p>
                <Upload name="Outtake_Photo"></Upload>
                <p className="smallLabel">EXTRAS</p>
                <Upload name="Extras_Photo"></Upload>
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
                <p className="generalLabel">Notes</p>
                <textarea rows="5" cols="20" id="notes" name="Comments" />
                <input type="submit" className="submit-button" value="Save" />
                <br />
                <br />
                {/* <div className="nonSubmit">
                    <p className="reminder">DO NOT use this section unless instructed</p>
                    <input type="button" className="download-button" value="Download Data" onClick={props.downloadCSV} />
                    <input type="button" className="clear-button" value="Clear Data" onClick={props.clearData} />
                </div> */}
            </div>

            <div>
                <p className="version">Version LAR.0.1</p>
            </div>

        </Page>
    );
}

export { SignIn, General, Photos, SavePage };
