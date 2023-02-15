import { RadioButtons, NumberInput, ButtonInput, MultiButton, Upload, PageSelector, FoulCards } from "./Form";
import './App.css';
import { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


function Page(props) {
    return (
        <div className={props.selected ? 'page selected' : 'page'} id={props.id}>
            {props.children}
        </div>
    );
}



function SignIn(props) {
    // const [showCheck, setshowCheck] = useState(false);

    // const handleSubmit = (event) => {
    //     setshowCheck(true);
    //     props.onSubmit(event);
    //     setTimeout(() => { setshowCheck(false) }, 5000);
    // }

    return (
        <div>
            <p className="section-label">Super Scouting</p>
            {/* <p className="topNote">If the robot has an "other" drivetrain, specify it in the notes at the bottom!</p> */}
            <form action="#">
                <div className="textArea">
                    <input type="text" id="Sname" name="Scouter_Name" placeholder="Scouter Name" className="name" />
                    <br />
                    <select name="Competition" id="Ename" defaultValue="Choose">
                        <option value="Choose" className="Placeholder" disabled>Choose Event</option>
                        <option value="Port Hueneme">Port Hueneme</option>
                    </select>
                    <br />
                    <div className="allianceSelect">
                        <MultiButton items={[['RED', 'Red'], ['BLUE', 'Blue']]} id="DriveTrain" />
                    </div>
                    <div className="loginButtons">
                        <input type="text" placeholder="TEAM 1" className="login" />
                        <input type="text" placeholder="TEAM 2" className="login" />
                        <input type="text" placeholder="TEAM 3" className="login" />
                    </div>

                    {/* {showCheck && <div class="check"></div>} */}
                    <input type="submit" className="SAVE" value="Sign In" />

                    {/* when submitted 
                        <>checkmark image</> */}
                    {/* onSubmit={handleSubmit} */}

                </div>
            </form>
        </div>
    );
}


function General(props) {

    const [fouls, setFouls] = useState([]);

    const [teamNumber, setTeamNumber] = useState('');

    const handleMultiButtonChange = (teamNumber) => {
        setTeamNumber(teamNumber);
    }



    // this.state.items[id][0] pass this in somehow?

    return (
        <Page selected={props.selected} id="general">
            <p className="section-label">General</p>
            <div className="textArea">

                <Popup trigger=
                    {<input type="button" className="popupButton" value="Add foul"></input>}
                    modal nested>
                    {
                        close => (
                            <div className='modal'>
                                <div className='content'>
                                    <MultiButton items={[['4201', '4201'], ['330', '330'], ['4414', '4414']]} id="popupSelect" onChange={handleMultiButtonChange
                                    } />
                                    <br />
                                    <select name="Competition" id="selector" defaultValue="Choose" >
                                        <option value="Choose" className="Placeholder" disabled>For?</option>
                                        <option value="Pinning">Pinning</option>
                                        <option value="Disabled">Disabled</option>
                                        <option value="Overextension">Overextension</option>
                                        <option value="InsideOtherRobot">Inside other robot</option>
                                    </select>
                                    <br />
                                    <textarea id="note" placeholder="Details" rows="4" cols="25" ></textarea>
                                    <br />
                                </div>
                                <div className="subButton">

                                    <button onClick={() => {
                                        // setFouls = [document.getElementById("popupSelect"), document.getElementById("selector"), document.getElementById("note")];

                                        var selector = document.getElementById("selector");
                                        var text = selector.options[selector.selectedIndex].text; //then save var text as index 1?
                                        var content = document.getElementById("note").value;
                                        setFouls([...fouls, [teamNumber, text, content]]);

                                        close();
                                    }

                                    }>
                                        Enter foul
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </Popup>

                <br />
                <br />

                <div className="test2">
                    <FoulCards fouls={fouls}></FoulCards>
                </div>

                <div className="textArea">
                    <p className="generalLabel">Notes</p>
                    <textarea rows="5" cols="20" id="notes" name="Comments" />
                    <input type="submit" className="submit-button" />
                </div>

            </div>

        </Page >
    );
}



export { SignIn, General };
