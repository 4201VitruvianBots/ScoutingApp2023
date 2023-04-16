import React, { useContext } from 'react'
import Select from 'react-select'
import { useState } from "react";
import { TeamOptionsContext } from './App';

function SearchBar() {
    const [selectedOption, setSelectedOption] = useState();
    const [ifselected, setIfSelected] = useState(false);

    const teamOptions = useContext(TeamOptionsContext);

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
            <input type="checkbox" className="showInfo" onClick={handleCheckboxChange}></input>

            
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
