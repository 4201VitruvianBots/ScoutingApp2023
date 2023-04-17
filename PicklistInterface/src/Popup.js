import { useContext, useState } from "react";
import { inputSetter } from './Util.js';
import Popup from 'reactjs-popup';
import React from 'react';
import { SimpleTableData, WeightedTableData, BlankTableData } from "./Data.js";
import Select from 'react-select';
import { OptionsContext } from "./App.js";

function SimplePopup({ currentData, onSubmit, onDelete, close, isEditing }) {
    const { statistics: statisticOptions } = useContext(OptionsContext);

    // <SimplePopup onSubmit={updateTable(5)} />

    const [title, setTitle] = useState(currentData?.name ?? '');
    const [statistic, setStatistic] = useState(currentData?.statistic);
    const [descending, setDescending] = useState(currentData?.descending ?? true);

    const handleCheckboxChange = (event) => {
        setDescending(event.target.checked);
    }

    return (
        <div className="popup">
            <p className="popupHeader">Simple Statistic</p>

            <p>
                <label className="popupLabel" htmlFor="title">Title: </label>
                <input type="text" id="title" className="popupInput" value={title} onChange={inputSetter(setTitle)} />
            </p>


            <p>
                <label htmlFor="sortBy" className="popupLabel">Statistic: </label>
                <Select
                    options={statisticOptions}
                    value={statisticOptions.find(option => option.value === statistic)}
                    onChange={e => setStatistic(e.value)}
                    className="popup-dropdown"
                />
            </p>

            <p>
                <label className="popupLabel" htmlFor="checkbox">
                    Descending?
                    <input type="checkbox" id="checkbox" className="popupInputLast" checked={descending} onChange={handleCheckboxChange} />
                </label>
            </p>

            <div>
                <button className="popupClose" onClick={() => {
                    onSubmit(new SimpleTableData(title, currentData?.entries, statistic, descending));
                    close();
                }}>
                    {isEditing ? "Update Table" : "Create Table"}
                </button>

                {isEditing && <button className="delete-button" onClick={onDelete}><span className="material-icons-outlined">delete</span></button>}
            </div>

            <button className="exitButton" onClick={close}><span className="material-icons-outlined">close</span></button>

        </div>
    )
}

function WeightedPopup({ currentData, onSubmit, onDelete, close, isEditing }) {
    const { statistics: statisticOptions } = useContext(OptionsContext);

    const [title, setTitle] = useState(currentData?.name ?? '');
    const [factors, setFactors] = useState(currentData?.factors ?? [{ statistic: '', weight: 1 }]);
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
        <div className="popup popup-weighted">
            <p className="popupHeader">Weighted Statistic</p>


            <p>
                <label className="popupLabel" htmlFor="title" >Title: </label>
                <input type="text" id="title" className="popupInput" value={title} onChange={inputSetter(setTitle)}></input>
            </p>

            <div className="weighted-labels">
                <label className="popupLabel labelStatistic">Statistic</label>
                <label className="popupLabel labelWeight">Weight</label>
            </div>

            {factors.map((e, i) => (
                <div className="factor" key={i}>

                    <Select
                        options={statisticOptions}
                        value={statisticOptions.find(option => option.value === e.statistic)}
                        onChange={option => updateFactorStatistic(i)(option.value)}
                        className="popup-dropdown"
                    />

                    <input type="number" id="weight" className="popupInput" value={e.weight} onChange={inputSetter(updateFactorWeight(i))}></input>


                    <button className="removeFactor" onClick={removeFactor(i)}><span className="material-icons-outlined">remove</span></button>

                </div>

            ))}

            <button className="addFactor" onClick={addFactor}><span className="material-icons-outlined">add</span></button>



            {/* how does addStatistic() work with the following? */}


            {/* --> NEED TO FINISH THIS!
                        - Essentially, this Statistic/Weight selection is the same thing as our Foul cards
                        in SuperScouting. We generate something interactive (buttons, dropdowns, etc), and
                        then set its value to state. We then add each new item (in this case, each
                        new Statisitc) to the exising state array. This allows us to create and delete items. 
                        Use the Foulcards component code in SuperScouting as a reference. */}


            <div>
                <button className="popupClose" onClick={() => {

                    onSubmit(new WeightedTableData(title, currentData?.entries, factors));
                    close();

                }}>
                    {isEditing ? "Update Table" : "Create Table"}
                </button>

                {isEditing && <button className="delete-button" onClick={onDelete}><span className="material-icons-outlined">delete</span></button>}
            </div>

            <button className="exitButton" onClick={close}><span className="material-icons-outlined">close</span></button>

        </div>
    );
}

function BlankPopup({ currentData, onSubmit, onDelete, close, isEditing }) {
    const [title, setTitle] = useState(currentData?.name ?? '');

    return (
        <div className="popup">
            <p className="popupHeader">Blank</p>
            <label className="popupLabel" htmlFor="title">Title: </label>
            <input type="text" id="title" className="popupInput" value={title} onChange={inputSetter(setTitle)} />
            <div>
                <button className="popupClose" onClick={() => {
                    onSubmit(new BlankTableData(title, currentData?.entries ?? []));
                    close();
                }}>
                    {isEditing ? "Update Table" : "Create Table"}
                </button>
                {isEditing && <button className="delete-button" onClick={onDelete}><span className="material-icons-outlined">delete</span></button>}
            </div>
            <button className="exitButton" onClick={close}><span className="material-icons-outlined">close</span></button>
        </div>
    )
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
                        {close => (<SimplePopup onSubmit={addTable} close={close} isEditing={false} />)}
                    </Popup>


                    <Popup trigger=
                        {<button className="dropdownButtons">Weighted</button>}
                        modal nested>
                        {close => (<WeightedPopup onSubmit={addTable} close={close} isEditing={false} />)}
                    </Popup>


                    <Popup trigger=
                        {<button className="dropdownButtons">Blank</button>}
                        modal nested>
                        {close => (<BlankPopup onSubmit={addTable} close={close} isEditing={false} />)}
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

                    <br />
                    <button className="exitButtonMain" onClick={end}><span className="material-icons-outlined">close</span></button>

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
