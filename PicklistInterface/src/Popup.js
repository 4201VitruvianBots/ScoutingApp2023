import { useState } from "react";
import { inputSetter } from './Util.js';
import Popup from 'reactjs-popup';
import React from 'react';
import { SimpleTableData, WeightedTableData, BlankTableData } from "./Data.js";
import Select from 'react-select';

function SimplePopup({ onSubmit, close, isEditing, statisticOptions }) {

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
                <input type="text" id="title" className="popupInput" onChange={inputSetter(setTitle)} />
            </div>


            <div className="popupContent">
                <label htmlFor="sortBy" className="popupLabel">Statistic: </label>
                <Select
                    options={statisticOptions}
                    value={statisticOptions.find(option => option === statistic)}
                    onChange={e => setStatistic(e.value)}
                />
            </div>

            <div className="popupContent">
                <label className="popupLabelLast" htmlFor="checkbox">
                    Descending?
                    <input type="checkbox" id="checkbox" className="popupInputLast" onChange={handleCheckboxChange} />
                </label>
            </div>




           

                <button className="exitButton" onClick={close}>Exit</button>

                <button className="popupClose" onClick={() => {
                    onSubmit(new SimpleTableData(title, undefined, statistic, descending));
                    close();
                }}>
                    {isEditing ? "Edit Table" : "Create Table"}
                </button>

                {isEditing && <button>DEEEELEEEEETE</button>}

                
            

        </div>
    )
}

function WeightedPopup({ onSubmit, close, statisticOptions }) {

    const [title, setTitle] = useState();
    const [factors, setFactors] = useState([{ statistic: '', weight: 1 }]);
    // const [descending, setDescending] = useState(false);

    // type factor = {statistic: x, weight: x}

    // function listing() {
    //     setDescending(true)
    // }

    const updateFactor = (index, updatedStatistic) => {
        setFactors(factors.map((e, i) => i === index ? updatedStatistic : e));
    };

    const updateFactorStatistic = (index) => (
        (statistic) => {
            updateFactor(index, { statistic: statistic, weight: factors[index].weight });
        }
    );

    const updateFactorWeight = (index) => (
        (weight) => {
            updateFactor(index, { statistic: factors[index].statistic, weight: weight });
        }
    );

    const addFactor = () => {
        setFactors([...factors, { statistic: null, weight: 1 }]);
    };

    const removeFactor = (index) => (
        () => {
            setFactors(factors.filter((e, i) => i !== index));
        }
    );


    return (
        <div className="popup">
            <p className="popupHeader">Weighted Statistic</p>

           
                <div className="popupContent">
                    <label className="popupLabel" htmlFor="title" >Title: </label>
                    <input type="text" id="title" className="popupInput" onChange={inputSetter(setTitle)}></input>
                </div>

                {factors.map((e, i) => (
                    <React.Fragment key={i}>
                        <div className="popupContent-Stat">
                            <label htmlFor="sortBy" className="popupLabel">Statistic: </label>
                            <br />
                            <Select
                                options={statisticOptions}
                                value={statisticOptions.find(option => option === e.statistic)}
                                onChange={option => updateFactorStatistic(i)(option.value)}
                            />

                        </div>

                        <div className="popupContent-Weight">
                            <label htmlFor="weight" className="popupLabel">Weight: </label>
                            <br />
                            <input type="number" id="weight" className="popupInput" value={e.weight} onChange={inputSetter(updateFactorWeight(i))}></input>

                        </div>
                        

                        <input type="button" className="removeFactor" onClick={removeFactor(i)} value="X" />
                        

                    </React.Fragment>

                ))}
             
                <input type="button" className="addFactor" onClick={addFactor} value="+" />

                

                {/* how does addStatistic() work with the following? */}


                {/* --> NEED TO FINISH THIS!
                        - Essentially, this Statistic/Weight selection is the same thing as our Foul cards
                        in SuperScouting. We generate something interactive (buttons, dropdowns, etc), and
                        then set its value to state. We then add each new item (in this case, each
                        new Statisitc) to the exising state array. This allows us to create and delete items. 
                        Use the Foulcards component code in SuperScouting as a reference. */}


                <button onClick={close} className="exitButton">Exit</button>

                <br/>
                <br/>
                <button className="popupClose" onClick={() => {

                    onSubmit(new WeightedTableData(title, undefined, factors));
                    close();

                }}> Create Table </button>
           

        </div>
    );
}

function BlankPopup({ data, close }) {

}

function PopupButton({ addTable, statisticOptions }) {

    const [showDropdown, setShowDropdown] = useState(false);

    function buttonMenu() {
        setShowDropdown(true);
    }

    function end() {
        setShowDropdown(false);
    }

    return (
        <div >
            <input type="button" className="popupButton" value="Add table" onClick={buttonMenu}></input>

            {showDropdown && (
                <div className='hiddenDropdown'>

                    <Popup trigger=
                        {<button className="dropdownButtons">Simple</button>}
                        modal nested>
                        {close => (<SimplePopup onSubmit={addTable} close={close} isEditing={false} statisticOptions={statisticOptions} />)}
                    </Popup>


                    <Popup trigger=
                        {<button className="dropdownButtons">Weighted</button>}
                        modal nested>
                        {close => (<WeightedPopup onSubmit={addTable} close={close} statisticOptions={statisticOptions} />)}
                    </Popup>


                    <Popup trigger=
                        {<button className="dropdownButtons">Blank</button>}
                        modal nested>
                        {close => (<BlankPopup onSubmit={addTable} close={close} />)}
                    </Popup>







                    {/* {option == 'Weighted' && (
                        <Popup trigger=
                            {<input type="button" className="dropdownContinue" value="Continue - Weighted" ></input>}
                            modal nested >
                            {close => (<close = { end } />)}
                        </Popup>

                    )} */}




                    {/* Three buttons instead of dropdown */}

                    {/* <select>
                        <option onSelect={() => assign("Simple")}>Simple</option>
                        <option onSelect={() => assign("Weighted")}>Weighted</option>
                        <option onSelect={() => assign("Blank")}>Blank</option>
                    </select>
                    <br /> */}

                    {/* <input type="button" onClick={SimpleSelected("Simple")}>Simple</input> */}

                    <br/>
                    <button className="exitButtonMain" onClick={end}>X</button>

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
