import { useState } from "react";
import Popup from 'reactjs-popup';


function SimplePopup({ data, close }) {

    const [descending, setDescending] = useState(false);

    function listing() {
        setDescending(true)
    }

    return (
        <div className="popup">
            <p className="popupHeader">Simple Statistic</p>

            <div className="popupContent">
                <label className="popupLabel" htmlFor="title">Title: </label>
                <input type="text" id="title" className="popupInput"></input>
            </div>


            <div className="popupContent">
                <label htmlFor="sortBy" className="popupLabel">Statistic: </label>
                <select name="Competition" id="sortBy" defaultValue="Choose" className="popupInput">
                    <option value="average_auto_grid_score">Avg Auto Grid Score</option>
                    <option value="average_auto_balance">Avg Auto Balance</option>
                    <option value="average_teleop_grid_score">Avg Teleop Grid Score</option>
                    <option value="average_teleop_cycle_time">Avg Teleop Cycle Time</option>
                    <option value="average_total_teleop_points">Avg Total Teleop Points</option>
                </select>

            </div>

            <div className="popupContent">
                <label className="popupLabelLast" htmlFor="checkbox">Descending?</label>
                <input type="checkbox" id="checkbox" className="popupInputLast" onClick={listing}></input>
            </div>

            

            <button className="popupClose" onClick={() => {

                let name = document.getElementById("title").value;
                let option = document.getElementById("sortBy");
                let sort = option.options[option.selectedIndex].text;

                { data = [name, sort, descending] };
                console.log([data]);

                close();

               

            }}>
                Create Table
            </button>
            
        </div>
    )
}

function WeightedPopup({ data, close }) {

    const [descending, setDescending] = useState(false);

    function listing() {
        setDescending(true)
    }

    function addStat(){

            <div>
            <div className="popupContent-Stat">
                <label htmlFor="sortBy" className="popupLabel">Statistic: </label>
                <br/>
                <select name="Competition" id="sortBy" defaultValue="Choose" className="popupInput">
                    <option value="average_auto_grid_score">Avg Auto Grid Score</option>
                    <option value="average_auto_balance">Avg Auto Balance</option>
                    <option value="average_teleop_grid_score">Avg Teleop Grid Score</option>
                    <option value="average_teleop_cycle_time">Avg Teleop Cycle Time</option>
                    <option value="average_total_teleop_points">Avg Total Teleop Points</option>
                </select>

            </div>

            <div className="popupContent-Weight">
                <label htmlFor="weight" className="popupLabel">Weight: </label>
                <br/>
                <input type="number" id="weight" className="popupInput"></input>

            </div>
        </div>

       
    }

    return (
        <div className="popup">
            <p className="popupHeader">Weighted Statistic</p>

            <div className="gallery">

            

            <div className="popupContent">
                <label className="popupLabel" htmlFor="title">Title: </label>
                <input type="text" id="title" className="popupInput"></input>
            </div>


            <div className="popupContent-Stat">
                <label htmlFor="sortBy" className="popupLabel">Statistic: </label>
                <br/>
                <select name="Competition" id="sortBy" defaultValue="Choose" className="popupInput">
                    <option value="average_auto_grid_score">Avg Auto Grid Score</option>
                    <option value="average_auto_balance">Avg Auto Balance</option>
                    <option value="average_teleop_grid_score">Avg Teleop Grid Score</option>
                    <option value="average_teleop_cycle_time">Avg Teleop Cycle Time</option>
                    <option value="average_total_teleop_points">Avg Total Teleop Points</option>
                </select>

            </div>

            <div className="popupContent-Weight">
                <label htmlFor="weight" className="popupLabel">Weight: </label>
                <br/>
                <input type="number" id="weight" className="popupInput"></input>

            </div>
            
            <div className="addStatBox">
                <button onClick={addStat} className="addStat">Add Statistic</button>
               
            </div>
            
        
            <div className="popupContent">
                <label className="popupLabelLast" htmlFor="checkbox">Descending?</label>
                <input type="checkbox" id="checkbox" className="popupInputLast" onClick={listing}></input>
            </div>

            

            <button className="popupClose" onClick={() => {

                let name = document.getElementById("title").value;
                let option = document.getElementById("sortBy");
                let sort = option.options[option.selectedIndex].text;

                { data = [name, sort, descending] };
                console.log([data]);

                close();

            }}>
                Create Table
            </button>

            </div>



        </div>



    )



}

function BlankPopup({ data, close }) {

}

function PopupButton() {

    const [showDropdown, setShowDropdown] = useState(false);
    // const [openPopup, setOpenPopup] = useState(null);
    const [option, setOption] = useState(null);

    function buttonMenu() {
        setShowDropdown(true);
        console.log('point 1');
    }

    function SimpleSelected() {
        setOption('Simple');
        console.log('point 2');
    }

    function WeightedSelected() {
        setOption('Weighted');
        console.log('point 3');
    }

    function BlankSelected() {
        setOption('Blank');
        console.log('point 4');
    }

    console.log(option);


    function end() {
        setShowDropdown(false);
    }

    return (
        <div>
            <input type="button" className="popupButton" value="Add table" onClick={buttonMenu}></input>

            {showDropdown && (
                <div className='hiddenDropdown'>
                    <button onClick={SimpleSelected} className="dropdownButton">Simple</button>
                    <button onClick={WeightedSelected} className="dropdownButton">Weighted</button>
                    <button onClick={BlankSelected} className="dropdownButton">Blank</button>

                    {option == 'Simple' && (
                        <Popup trigger=
                            {<input type="button" className="dropdownContinue" value="Continue - Simple" ></input>}
                            modal nested >
                            {close => (<SimplePopup close={end} />)}
                        </Popup>

                    )}
                    {option == 'Weighted' && (
                        <Popup trigger=
                            {<input type="button" className="dropdownContinue" value="Continue - Weighted" ></input>}
                            modal nested >
                            {close => (<WeightedPopup close={end} />)}
                        </Popup>

                    )}




                    {/* Three buttons instead of dropdown */}

                    {/* <select>
                        <option onSelect={() => assign("Simple")}>Simple</option>
                        <option onSelect={() => assign("Weighted")}>Weighted</option>
                        <option onSelect={() => assign("Blank")}>Blank</option>
                    </select>
                    <br /> */}

                    {/* <input type="button" onClick={SimpleSelected("Simple")}>Simple</input> */}



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
        </div >
    )
}

export { SimplePopup, WeightedPopup, BlankPopup, PopupButton };
