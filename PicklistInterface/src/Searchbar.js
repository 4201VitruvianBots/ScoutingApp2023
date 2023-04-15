import React from 'react'
import Select from 'react-select'
import { useState } from "react";

function SearchBar({ teamOptions }) {
    const [selectedOption, setSelectedOption] = useState();
    const [ifselected, setIfSelected] = useState(false);

    const handleChange = (selectedOption) => {

        setSelectedOption(selectedOption)
    };

    const handleCheckboxChange = (event) => {
        setIfSelected(event.target.checked);
    }

    // console.log(this.props.selectedOption)
    return (
        <div className="searchBox">
            <Select className="searchBar"
                options={teamOptions}
                // value={setSelectedOption}
                onChange={handleChange}
            />
            <input type="checkbox"  classname="showInfo" onClick={handleCheckboxChange}></input>

            
            {ifselected && (
                <div >

                    <p>Photos</p>
                    <p>Comments</p>


                </div>

            )
            }
        </div>
    )
}

export default SearchBar;
