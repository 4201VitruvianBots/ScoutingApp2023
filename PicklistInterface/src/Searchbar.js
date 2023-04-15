import React from 'react'
import Select from 'react-select'
import { useState } from "react";

function SearchBar() {
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
                options={options}
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
const options = [
    { value: '20', label: '20' },
    { value: '100', label: '100' },
    { value: '125', label: '125' },
    { value: '144', label: '144' },
    { value: '203', label: '203' },
    { value: '230', label: '230' },
    { value: '321', label: '321' },
    { value: '695', label: '695' },
    { value: '870', label: '870' },
    { value: '1038', label: '1038' },
    { value: '1138', label: '1138' },
    { value: '1325', label: '1325' },
    { value: '1477', label: '1477' },
    { value: '1511', label: '1511' },
    { value: '1533', label: '1533' },
    { value: '1710', label: '1710' },
    { value: '1731', label: '1731' },
    { value: '1781', label: '1781' },
    { value: '1922', label: '1922' },
    { value: '2054', label: '2054' },
    { value: '2073', label: '2073' },
    { value: '2264', label: '2264' },
    { value: '2333', label: '2333' },
    { value: '2363', label: '2363' },
    { value: '2412', label: '2412' },
    { value: '2438', label: '2438' },
    { value: '2445', label: '2445' },
    { value: '2486', label: '2486' },
    { value: '2491', label: '2491' },
    { value: '2590', label: '2590' },
    { value: '2659', label: '2659' },
    { value: '2667', label: '2667' },
    { value: '2713', label: '2713' },
    { value: '2767', label: '2767' },
    { value: '2869', label: '2869' },
    { value: '2883', label: '2883' },
    { value: '3082', label: '3082' },
    { value: '3314', label: '3314' },
    { value: '3390', label: '3390' },
    { value: '3414', label: '3414' },
    { value: '3527', label: '3527' },
    { value: '3641', label: '3641' },
    { value: '3647', label: '3647' },
    { value: '3875', label: '3875' },
    { value: '3928', label: '3928' },
    { value: '4091', label: '4091' },
    { value: '4201', label: '4201' },
    { value: '4206', label: '4206' },
    { value: '4226', label: '4226' },
    { value: '4272', label: '4272' },
    { value: '4613', label: '4613' },
    { value: '4795', label: '4795' },
    { value: '4907', label: '4907' },
    { value: '4946', label: '4946' },
    { value: '5216', label: '5216' },
    { value: '5406', label: '5406' },
    { value: '5422', label: '5422' },
    { value: '5460', label: '5460' },
    { value: '5472', label: '5472' },
    { value: '5712', label: '5712' },
    { value: '5724', label: '5724' },
    { value: '6081', label: '6081' },
    { value: '6424', label: '6424' },
    { value: '6510', label: '6510' },
    { value: '6806', label: '6806' },
    { value: '6838', label: '6838' },
    { value: '6989', label: '6989' },
    { value: '7153', label: '7153' },
    { value: '7769', label: '7769' },
    { value: '8575', label: '8575' },
    { value: '9000', label: '9000' },
    { value: '9079', label: '9079' },
    { value: '9136', label: '9136' },
    { value: '9280', label: '9280' },
    { value: '9287', label: '9287' },
    { value: '9293', label: '9293' }

]

export default SearchBar;
