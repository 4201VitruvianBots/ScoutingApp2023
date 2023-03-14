import React from 'react';
import './App.css';
import Select from 'react-select';
import Popup from 'reactjs-popup';


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

class MultiButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: props.items, id: props.id, label: props.label, value: 0, selected: null, onChange: props.onChange };
        this.test1 = this.test1.bind(this);
        this.generateButtons = this.generateButtons.bind(this);
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
        this.state = { fouls: props.fouls, items: props.items, id: props.id, label: props.label, value: 0, selected: 0, teamOption: null  };
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
                            let updatedFouls = [...this.props.fouls];
                            updatedFouls.splice(index, 1);
                            this.props.setFouls(updatedFouls);
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
    { value: "", label: 'Select...' },
    { value: "4", label: '4' },
    { value: "294", label: '294' },
    { value: "498", label: '498' },
    { value: "589", label: '589' },
    { value: "687", label: '687' },
    { value: "691", label: '691' },
    { value: "696", label: '696' },
    { value: "972", label: '972' },
    { value: "973", label: '973' },
    { value: "1159", label: '1159' },
    { value: "1266", label: '1266' },
    { value: "1452", label: '1452' },
    { value: "1515", label: '1515' },
    { value: "1572", label: '1572' },
    { value: "1661", label: '1661' },
    { value: "1678", label: '1678' },
    { value: "2102", label: '2102' },
    { value: "2429", label: '2429' },
    { value: "2465", label: '2465' },
    { value: "2486", label: '2486' },
    { value: "2543", label: '2543' },
    { value: "2584", label: '2584' },
    { value: "3008", label: '3008' },
    { value: "3128", label: '3128' },
    { value: "3255", label: '3255' },
    { value: "3328", label: '3328' },
    { value: "3354", label: '3354' },
    { value: "3473", label: '3473' },
    { value: "3647", label: '3647' },
    { value: "3859", label: '3859' },
    { value: "3863", label: '3863' },
    { value: "3881", label: '3881' },
    { value: "4201", label: '4201' },
    { value: "4414", label: '4414' },
    { value: "4481", label: '4481' },
    { value: "4711", label: '4711' },
    { value: "4731", label: '4731' },
    { value: "5012", label: '5012' },
    { value: "5089", label: '5089' },
    { value: "6036", label: '6036' },
    { value: "6059", label: '6059' },
    { value: "6479", label: '6479' },
    { value: "6658", label: '6658' },
    { value: "7424", label: '7424' },
    { value: "8891", label: '8891' }
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


export { RadioButtons, NumberInput, ButtonInput, MultiButton, PageSelector, Upload, FoulCards, SearchBar, options, CheckDecimal };
