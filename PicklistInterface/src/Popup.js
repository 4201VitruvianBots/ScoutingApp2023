import { useState } from "react";

function SimplePopup({close}) {
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
            <label for="title">Descending?</label>
            <input type="checkbox"></input>

            <button className="close" onClick={close}>Okay</button>
                


        </div>

    )

}

function WeightedPopup() {

}

function BlankPopup() {

}
function PopupButton(){

    const [option, setOption] = useState();

    return(
        <div>
        <input type="button" className="popupButton" value="Add foul" ></input>
        <select>
            <option>Simple</option>
            <option>Weighted</option>
            <option>Blank</option>
        </select>
        {/* // conditional formatting, hiding it until clicked
        //hidden until clicked
    //option clicked gets set to state, which is psassed into the popups as the title */}
        </div>
    )
}

export { SimplePopup, WeightedPopup, BlankPopup };

