import React from 'react';
import './App.css';
import Select from 'react-select';
import Popup from 'reactjs-popup';
import ReactSlider from "react-slider";


// Radio Buttons
function RadioButtons(props) {
    let output = [];
    for (let item in props.items) {
        console.log(props.items[item]);

        output.push(
            <p key={item}>
                <label className="label-size">
                    <input className="align-radio" type="radio" name={props.name} value={item} />
                    {props.items[item]}
                </label>
            </p>
        )
    }
    return output;

}

// Number input
class NumberInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: props.id, label: props.label, value: 0 };
        this.setValue = this.setValue.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.increaseValue = this.increaseValue.bind(this);
        this.decreaseValue = this.decreaseValue.bind(this);
    }

    setValue(value) {
        this.setState({ value: Math.abs(parseInt(value)) });
    }

    handleChange(event) {
        this.setValue(event.target.value);
    }

    increaseValue() {
        this.setState({ value: this.state.value + 1 });
    }

    decreaseValue() {
        if (this.state.value > 0)
            this.setState({ value: this.state.value - 1 });
    }

    render() {
        // props = {id: "teleopUp", label: "Upper Cargo"};
        return (
            <div>
                <div className="labelleft"><label htmlFor={this.state.id}>{this.state.label}</label></div>
                <div className="buttonright"><input type="button" className="chonk" value="-" onClick={this.decreaseValue} />
                    <input type="number" value={this.state.value} onChange={this.handleChange} name={this.state.id} min="0" step="1" />
                    <input type="button" className="chonk" value="+" onClick={this.increaseValue} /></div>
            </div>


        );
    }
}

class ButtonInput extends React.Component {
    constructor(props) {
        super(props);
        console.log('hello');
        this.state = { id: props.id, off_label: props.off_label, value: props.value || 0, on_label: props.on_label, test1: props.test1 }; //this last prop looks to see if the instance has a value for test1.
        this.setValue = this.setValue.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.increaseValue = this.increaseValue.bind(this);
        this.decreaseValue = this.decreaseValue.bind(this);
        this.setValueFinal = this.setValueFinal.bind(this);

    }

    setValue(value) {
        this.setState({ value: Math.abs(parseInt(value)) });
    }

    handleChange(event) {
        this.setValue(event.target.value);
    }

    increaseValue() {
        this.setState({ value: this.state.value + 1 });
    }

    decreaseValue() {
        this.setState({ value: this.state.value - 1 });
    }
    setValueFinal() {
        // check 'IIIIIFFFFFF' - nathan 

        if (this.state.test1) { //if there IS a value, it'll evaluate to true
            this.state.test1(this.state.id) //we need it to be this.state because that's how we put it into this component, since it's not defined in here (it's in MultiButton)
        }

        //now, setValueFinal runs this.state.test1() only if there's a value for it, which only ButtonInputs being used in MultiButton have

        if (this.state.value === 0) {
            this.increaseValue();
        } else if (this.state.value === 1) {
            this.decreaseValue();
        }

        //issue now - id is undefined - because it's running in ButtonInput 
    }
    render() {

        if (this.state.value === 0) {
            return (
                // <div>

                <div className="ToggleButton">
                    <input type='hidden' value={false} name={this.state.id} />
                    <input type="button" className="number-off" value={this.state.off_label} onClick={this.setValueFinal} />

                    {/* for the onClick function:
                        this.state.test1 --> checks to see if the ButtonInput instance has a value for test1. If it's being used for MultiButton, it WILL. If it's just being used as a ButtonInput, it WON'T.
                            if test1 DOES NOT return null, onClick will evaluate to this.state.test1
                                this will run the test1 function in the ButtonInput instance (function in MultiButton)
                                    test1 will update the state of MultiButon
                                        [this is the process of the child updating the state of the parent]
                                        
                            if test1 DOES return null, onClick will evaluate to this.setValueFinal, as normal.
                    */}
                </div>
            );
        } else if (this.state.value === 1) {
            return (
                <div className="ToggleButton">
                    <input type='hidden' value={true} name={this.state.id} />
                    <input type="button" className="number-on" value={this.state.on_label} onClick={this.setValueFinal} />
                </div>
            );
        }
    }
}

// class MultiButton extends React.Component {
//     constructor(props) {
//         // eslint-disable-next-line no-restricted-globals
//         addEventListener('reset', () => { this.setState({ selected: 0 }) })
//         super(props);
//         this.state = {
//             items: props.items,
//             id: props.id,
//             label: props.label,
//             selected: null,
//         };
//         this.test1 = this.test1.bind(this);
//         this.generateButtons = this.generateButtons.bind(this);
//     }
//     test1(id) {
//         if (this.props.onChange) {
//             this.props.onChange(this.state.items[id][0]);
//         }
//         this.setState({ selected: id });
//         console.log('I\'ve been called ' + id);
//     }
//     generateButtons() {
//         let output = [];
//         for (let index in this.state.items) {
//             let component;
//             if (this.state.selected === index) {
//                 component = (
//                     <input
//                         key={index}
//                         type="button"
//                         className="number-on"
//                         value={this.state.items[index][0]}
//                         onClick={() => this.test1(index)}
//                     />
//                 );
//                 console.log('Selected button generated');
//             } else {
//                 component = (
//                     <input
//                         key={index}
//                         type="button"
//                         className="number-off"
//                         value={this.state.items[index][1]}
//                         onClick={() => this.test1(index)}
//                     />
//                 );
//                 console.log('Not selected button generated');
//             }
//             output.push(component);
//         }
//         return output;
//     }
//     render() {
//         const colors = ['#FF0000', '#0000FF']; // Define array of background colors
//         const shouldChangeColor = this.props.shouldChangeColor; // Get the shouldChangeColor prop
//         return (
//             <div style={{ backgroundColor: shouldChangeColor ? colors[this.state.selected] : null }}>
//                 {this.generateButtons()}
//                 <input type="hidden" name={this.state.id} value={this.state.selected} />
//             </div>
//         );
//     }
// }

class MultiButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: props.items, id: props.id, label: props.label, value: 0, selected: null, onChange: props.onChange };
        this.test1 = this.test1.bind(this);
        this.generateButtons = this.generateButtons.bind(this);


        // eslint-disable-next-line no-restricted-globals
        addEventListener('reset', () => { this.setState({ selected: 0 }) })
    }

    test1(id) {

        if (this.state.onChange) {
            this.state.onChange(this.state.items[id][0]); //when onChange is run (when test1 is run) its setting the state to the first of the array

        };
        this.setState({
            selected: id
        })
        console.log('I\'ve been called ' + (id));

    }

    generateButtons() {
        let output = [];

        for (let index in this.state.items) {

            let component;

            if (this.state.selected === index) {
                component = <input key={index} type="button" className="number-on" value={this.state.items[index][0]} onClick={() => this.test1(index)} />

                console.log('Selected button generated');

            } else {

                component = <input key={index} type="button" className="number-off" value={this.state.items[index][1]} onClick={() => this.test1(index)} />
                console.log('Not selected button generated');
            }

            output.push(component)

        }

        return output;
    }

    //rendering twice from here

    render() {

        return (
            <div>
                <this.generateButtons />
                <input type='hidden' name={this.state.id} value={this.state.selected} />
            </div>
        )

    }
}

class PageSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: props.items, id: props.id, label: props.label, value: 0, selected: 0 };
        this.test1 = this.test1.bind(this);
        this.generateButtons = this.generateButtons.bind(this);
    }

    setSelected(id) {
        this.setState({ selected: id });
    }

    generateButtons() {
        let output = [];

        for (let index in this.state.items) {

            let component;

            if (this.state.selected === index) {
                component = this.state.items[index]

                console.log('Selected page generated');

            } else {
                component = null;
                console.log('Not selected page generated');
            }

            output.push(component)
        }

        return output;
    }

    //rendering twice from here

    render() {

        return (
            <div>
                <this.generateButtons />
                <input type='hidden' name={this.state.id} value={this.state.selected} />
            </div>
        )

    }
}

class FoulCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fouls: props.fouls, items: props.items, id: props.id, label: props.label, value: 0, selected: 0, teamOption: null };
        this.generateDiv = this.generateDiv.bind(this);

        // const [teamOption, setTeamOption] = useState(options[0]); //state


        // alternateList = [this.props.teamOption1, this.props.teamOption2, this.props.teamOption3];

        // this.setFouls = this.setFouls.bind(this);

        // this.setFouls = this.setFouls(this);
    }


    generateDiv() {
        let output = [];




        for (let index in this.props.fouls) {



            output.push(
                <div className="foul" key={index}>

                    {/* <p className="label4">FOUL</p> */}
                    <p className="label-number" key={1}>{this.props.fouls[index][0]}</p>
                    <p className="label-cause" key={2}>{this.props.fouls[index][1]}</p>
                    <p className="label-notes" key={3}>{this.props.fouls[index][2]}</p>

                    <div className="deleteButton">
                        <input type="button" value="Delete" onClick={() => {
                            // event.preventDefault();


                            if (window.confirm('Are you sure you want to delete this foul?')) {
                                let updatedFouls = [...this.props.fouls];
                                updatedFouls.splice(index, 1);
                                this.props.setFouls(updatedFouls);
                            }
                        }
                        } />
                    </div>

                    <div className="editButton">
                        <Popup trigger=
                            {<input type="button" value="Edit" ></input>}
                            modal nested >
                            {
                                close => (
                                    <div className='modal'>
                                        <div className='content'>

                                            {/* <input type="text" className="label-title" id="number" placeholder={this.props.fouls[index][0]} />

                                            <label className="label-title">{teamOption1.label}</label> 
                                            
                                            setSelectedOption={this.props.setTeamOption}
                                            
                                            setSelectedOption={this.props.fouls[index][0]} 
                                            
                                            */}
                                            {/* <SearchBar alternateList={this.props.alternateList} id="team" className="teamSearch" /> */}

                                            <br />
                                            <label className="label-title">{this.props.fouls[index][0]}</label>

                                            {/* why does ".text" after [index][0] break it? */}
                                            <br />
                                            <br />
                                            <select name="Competition" id="selector" defaultValue="Choose" >
                                                <option value="Choose" className="Placeholder" disabled>{this.props.fouls[index][1]}</option>
                                                <option value="Pinning">Pinning</option>
                                                <option value="Disabled">Disabled</option>
                                                <option value="Overextension">Overextension</option>
                                                <option value="InsideOtherRobot">Inside other robot</option>
                                                <option value="MultipleGameObjects">Holding multiple game pieces</option>
                                                <option value="InsideProtectedZone">Inside protected zone</option>
                                                <option value="InsideProtectedZone">Other (specify)</option>
                                            </select>
                                            <br />
                                            <textarea id="note" placeholder="Details" rows="4" cols="25" ></textarea>
                                            <br />
                                        </div>

                                        <div className="subButton">

                                            <button onClick={() => {

                                                // let teamSelect = document.getElementById("team");
                                                // let teamSelector = teamSelect.options[teamSelect.selectedIndex].text; 

                                                // let teamNumber = number.options[number.selectedIndex].text; 

                                                let selector = document.getElementById("selector");
                                                let text = selector.options[selector.selectedIndex].text;

                                                let content = document.getElementById("note").value;
                                                //Current index is stored in index variable
                                                //team # (same as OG)


                                                this.props.fouls[index][1] = text;
                                                this.props.fouls[index][2] = content;
                                                this.props.fouls[index][3] = selector.selectedIndex;

                                                this.props.setFouls(this.props.fouls);

                                                close();
                                            }

                                            }>
                                                Edit foul
                                            </button>

                                            <br />
                                        </div>




                                        <br />
                                    </div>
                                )
                            }
                        </Popup>




                    </div>



                </div>
            )
        }
        return output;
    }

    render() {

        return (
            <div className="fouls">
                <this.generateDiv></this.generateDiv>


            </div>
        )

    }
}


class Upload extends React.Component {
    constructor(props) {
        super(props)
        this.state = { file: null }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }

    render() {
        return (
            <div>
                <input type="file" onChange={this.handleChange} />
                <img src={this.state.file} height="400px" width="300px" alt="Upload" />
            </div>
        );

    }
}

class SearchBar extends React.Component {

    // alternateList() {
    //     let setList;

    //     if (this.alternateList) {
    //         setList = [this.props.teamOption1, this.props.teamOption2, this.props.teamOption3];
    //     } else {
    //         setList = options;
    //     }

    //     console.log('I\'ve been called ' + (setList));

    // }


    render() {

        return (
            <div className="testtest">
                <Select className="teamSearch"
                    options={this.props.alternateList ?? options}
                    value={this.props.selectedOption}
                    onChange={this.props.setSelectedOption}
                    name={this.props.name}

                />
            </div>
        );
    }
}


const options = [
    { value: null, label: 'Select...' },
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
    { value: '3035', label: '3035' },
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
    { value: '9135', label: '9135' },
    { value: '9136', label: '9136' },
    { value: '9280', label: '9280' },
    { value: '9287', label: '9287' },
    { value: '9293', label: '9293' }
];

function CheckDecimal(props) {
    const inputField = document.getElementById("Match_Number");

    inputField.addEventListener('input', function () {
        if (inputField.value.includes(".")) {
            inputField.setCustomValidity("Please enter an integer.");
        } else {
            inputField.setCustomValidity("");
        }
    });
}

function Slider() {
    return (
        <ReactSlider />
    );
};

export default Slider;


export { RadioButtons, NumberInput, ButtonInput, MultiButton, PageSelector, Upload, FoulCards, SearchBar, options, CheckDecimal, Slider };
