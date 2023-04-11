import { useState } from "react";
import { inputSetterText } from './Util.js';
import Popup from 'reactjs-popup';
import React from 'react';
import { SimpleTableData, WeightedTableData } from './Table.js';

function SimplePopup({ onSubmit, close }) {

    // <SimplePopup onSubmit={updateTable(5)} />

    const [title, setTitle] = useState();
    const [statistic, setStatistic] = useState();
    const [descending, setDescending] = useState(false);

    const handleCheckboxChange = (event) => {
        setDescending(event.target.checked);
    }

    return (
        <div className="popup">
            <p className="popupHeader">Simple Statistic</p>

            <div className="popupContent">
                <label className="popupLabel" htmlFor="title">Title: </label>
                <input type="text" id="title" className="popupInput" onChange={inputSetterText(setTitle)} />
            </div>


            <div className="popupContent">
                <label htmlFor="sortBy" className="popupLabel">Statistic: </label>
                <select name="Competition" id="sortBy" defaultValue="Choose" className="popupInput" onChange={inputSetterText(setStatistic)}>
                    <option value="average_auto_grid_score">Avg Auto Grid Score</option>
                    <option value="average_auto_balance">Avg Auto Balance</option>
                    <option value="average_teleop_grid_score">Avg Teleop Grid Score</option>
                    <option value="average_teleop_cycle_time">Avg Teleop Cycle Time</option>
                    <option value="average_total_teleop_points">Avg Total Teleop Points</option>
                </select>

            </div>

            <div className="popupContent">
                <label className="popupLabelLast" htmlFor="checkbox">
                    Descending?
                    <input type="checkbox" id="checkbox" className="popupInputLast" onChange={handleCheckboxChange} />
                </label>
            </div>



            <button className="popupClose" onClick={() => {


                onSubmit(new SimpleTableData())


                // console.log([name, sort, descending]);


                console.log(title, statistic, descending);


                // console.log(tables);

                close();
            }}>
                Create Table
            </button>

        </div>
    )
}

function WeightedPopup({ onSubmit, close }) {

    const [title, setTitle] = useState();
    const [factors, setFactors] = useState([{statistic: null, weight: 1}]);
    const [descending, setDescending] = useState(false);
    
    // type factor = {statistic: x, weight: x}

    // function listing() {
    //     setDescending(true)
    // }

    const updateFactor = (index, updatedStatistic) => {
        setFactors(factors.map((e, i) => i == index ? updatedStatistic : e));
    }
    
    const updateFactorStatistic = (index) => (
        (statistic) => {
            updateFactor(index, {statistic: statistic, weight: factors[index].weight});
        }
    )
    
    const updateFactorWeight = (index) => (
        (weight) => {
            updateFactor(index, {statistic: factors[index].statistic, weight: weight});
        }
    )
    
    const addFactor = () => {
        setFactors([...factors, {statistic: null, weight: 1}]);
    }
    
    const removeFactor = (index) => {
        setFactors(factors.filter((e, i) => i !== index));
    }


    return (
        <div className="popup">
            <p className="popupHeader">Weighted Statistic</p>

            <div className="gallery">
                <div className="popupContent">
                    <label className="popupLabel" htmlFor="title" >Title: </label>
                    <input type="text" id="title" className="popupInput" onChange={inputSetterText(setTitle)}></input>
                </div>
                
                {factors.map((e, i) => (
                    <React.Fragment key={i}>
                        <div className="popupContent-Stat">
                            <label htmlFor="sortBy" className="popupLabel">Statistic: </label>
                            <br />
                            <select value={e.statistic} className="popupInput" onChange={updateFactorStatistic(i)}>
                                <option value="average_auto_grid_score">Avg Auto Grid Score</option>
                                <option value="average_auto_balance">Avg Auto Balance</option>
                                <option value="average_teleop_grid_score">Avg Teleop Grid Score</option>
                                <option value="average_teleop_cycle_time">Avg Teleop Cycle Time</option>
                                <option value="average_total_teleop_points">Avg Total Teleop Points</option>
                            </select>

                        </div>

                        <div className="popupContent-Weight">
                            <label htmlFor="weight" className="popupLabel">Weight: </label>
                            <br />
                            <input type="number" id="weight" className="popupInput" value={e.weight} onChange={updateFactorWeight(i)}></input>

                        </div>

                        <input type="button" onClick={removeFactor(i)} value="X"/>
                    </React.Fragment>
                    
                ))}

                <input type="button" onClick={addFactor} value="+"/>

                
                {/* how does addStatistic() work with the following? */}
                                

                    {/* --> NEED TO FINISH THIS!
                        - Essentially, this Statistic/Weight selection is the same thing as our Foul cards
                        in SuperScouting. We generate something interactive (buttons, dropdowns, etc), and
                        then set its value to state. We then add each new item (in this case, each
                        new Statisitc) to the exising state array. This allows us to create and delete items. 
                        Use the Foulcards component code in SuperScouting as a reference. */}
                


                {/* <div className="popupContent">
                    <label className="popupLabelLast" htmlFor="checkbox">Descending?</label>
                    <input type="checkbox" id="checkbox" className="popupInputLast" onClick={listing}></input>
                </div> */}



                <button className="popupClose" onClick={() => {

                    // let name = document.getElementById("title").value;
                    // let option = document.getElementById("sortBy");
                    // let sort = option.options[option.selectedIndex].text;

                    // { data = [name, sort, descending] };
                    // console.log([data]);

                    close();

                    onSubmit(new WeightedTableData())

                }}> Create Table </button>
            </div>
    
        </div>
    );
}

function BlankPopup({ data, close }) {

}

function PopupButton({ tables, setTables }) {

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
        <div >
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
                            {close => (<SimplePopup tables={tables} setTables={setTables} close={end} />)}
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
