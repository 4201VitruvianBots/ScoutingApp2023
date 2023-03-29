import { useState } from "react";
import Popup from 'reactjs-popup';


function SimplePopup({ data, close }) {
    return (
        <div className="popup">
            <h4>Simple statistic</h4>
            <label for="title">Title: </label>
            <input type="text" id="title"></input>
            <br />
            <label for="sortBy">Statistic: </label>
            <select name="Competition" id="sortBy" defaultValue="Choose" >
                <option value="average_auto_grid_score">Avg Auto Grid Score</option>
                <option value="average_auto_balance">Avg Auto Balance</option>
                <option value="average_teleop_grid_score">Avg Teleop Grid Score</option>
                <option value="average_teleop_cycle_time">Avg Teleop Cycle Time</option>
                <option value="average_total_teleop_points">Avg Total Teleop Points</option>
            </select>
            <br />
            <label>Descending?</label>
            <input type="checkbox"></input>

            <button className="close" onClick={close}>Okay</button>



        </div>

    )

}

function WeightedPopup({ data, close }) {

}

function BlankPopup({ data, close }) {

}
function PopupButton() {

    const [showDropdown, setShowDropdown] = useState(false);

    const [option, setOption] = useState();


    // function handleHover() {

    // }

    function dropdown() {
        setShowDropdown(true);
    }

    function assign(selectedOption) {
        console.log('pointZ');
        setOption(selectedOption);
        console.log(option);
    }


    return (
        <div>
            <input type="button" className="popupButton" value="Add table" onMouseEnter={dropdown}></input>

            {showDropdown && (
                <div className='hiddenDropdown'>
                    {/* Three buttons instead of dropdown */}
                    <select>
                        <option onSelect={() => assign("Simple")}>Simple</option>
                        <option onSelect={() => assign("Weighted")}>Weighted</option>
                        <option onSelect={() => assign("Blank")}>Blank</option>
                    </select>
                    <br />


                    <Popup trigger=
                        {<input type="button" className="popupButton" value="ok"></input>}
                        modal nested >
                        {close => (<SimplePopup close={close} />)}
                    </Popup>
                </div>
            )
            }


            {/* {dropdown()} */}


            {/* store what the mouse is hovering on in a state variable
        onMouseEnter=

        // conditional formatting, hiding it until clicked
        //hidden until clicked
    //option clicked gets set to state, which is psassed into the popups as the title 
    onClick={dropdown}*/}
        </div>
    )
}

export { SimplePopup, WeightedPopup, BlankPopup, PopupButton };
