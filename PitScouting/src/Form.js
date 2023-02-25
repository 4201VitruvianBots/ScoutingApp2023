import React from "react";
import './App.css';
import Select from 'react-select';

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
                    <input type="number" value={this.state.value} onChange={this.handleChange} name={this.state.id} min="0" />
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
        this.state = { items: props.items, id: props.id, label: props.label, value: 0, selected: 0 };
        this.test1 = this.test1.bind(this);
        this.generateButtons = this.generateButtons.bind(this);

        //switch case
        //if/else statement? for?

        /* 
         Multibutton is the parent, buttoninput is the child?
        the id of the button that's on will be the state of MultiButton
        gets state of multibutton, to see what is selected
        prop in button that's optional but still gets looked for (?)
        when multibutton is rendered, set one of the props to true 
        (state of MultiButton)
        declarative - as you create them, they get altered, you're not changing them
        */
    }

    test1(id) {
        this.setState({
            selected: id
        })
        console.log('I\'ve been called ' + (id));

        //test1 updates the state of MultiButton (updating its parent based on the state of the child, which is where this function is getting run from)
        //(id) and this.test1 are the same? 
    }


    // next question : how to make only one selected at a time?
    /* 
        possible solutions
         - the component state can only accept 1 value at a time? the state has a max of 1?
         - the default of togglebutton is off, unless on, and if one is on, only one can be on 
         (default is already off),
         some setting so that what's using the button id only accepts 1 at a time
            what's using the button id - <ButtonInput id={index}> in generateButtons in MultiButton
            some kind of updating state, if/else, conditional, on event? event listener?
    */
    // another step : changing the formatting for on and off label

    /*
        only allow 1 state?

        keeps its state unless another is clicked
        default is off, unless clicked, and if another is clicked, then reset to default?
        instances can't talk to each other, so something in the parent (multibutton?)

        parent delegating which things are on

    */

    generateButtons() {
        let output = [];

        for (let index in this.state.items) {

            let component;

            if (this.state.selected === index) {
                component = <input key={index} type="button" className="number-on" value={this.state.items[index][0]} onClick={() => this.test1(index)} />
                // component = <input type="button" value={1} on_label={(this.state.items[index][0])} off_label={(this.state.items[index][1])} id={index} test1={this.test1} />
                console.log('Selected button generated');

            } else {
                // component = <input type="button" value={0} on_label={(this.state.items[index][0])} off_label={(this.state.items[index][1])} id={index} test1={this.test1} />
                component = <input key={index} type="button" className="number-off" value={this.state.items[index][1]} onClick={() => this.test1(index)} />
                console.log('Not selected button generated');
            }

            output.push(component)

            // do we need some reset code? to reset the non-selected buttons?

            // Has to be 1 first - if not, all of them will begin as selected

            /*
            
            if (selected:id === special index (index at the moment) {
                render on_label
            } else (){
                render off_label

            }  
            
            this will take the "special" index, the one that's telling the parent it's selected at the moment,
                and render it with the on_label. The other three will be on the off_label.

            Do we need the else? the others should be set to their defaults...
            */

            // <p key={index}>
            //     <ButtonInput on_label={(this.state.items[index][0])} off_label={(this.state.items[index][1])}  id={index} test1={this.test1}/>
            // </p>

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
// const React = require('react')

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
    handleChange = (selectedOption) => {
        this.props.setSelectedOption(selectedOption)
    }

    render() {
        // console.log(this.props.selectedOption)
        return (
            <div className="testtest">
                <Select className="teamSearch"
                    options={options}
                    value={this.props.selectedOption}
                    onChange={this.handleChange}
                    name={this.props.name}
                />
            </div>
        );
    }
}

const options = [
    { value: null, label: 'Select...' },
    { value: "1138", label: '1138' },
    { value: "6072", label: '6072' },
    { value: "687", label: '687' },
    { value: "1159", label: '1159' },
    { value: "7042", label: '7042' },
    { value: "4999", label: '4999' },
    { value: "7157", label: '7157' },
    { value: "4267", label: '4267' },
    { value: "597", label: '597' },
    { value: "2710", label: '2710' },
    { value: "2584", label: '2584' },
    { value: "4501", label: '4501' },
    { value: "3759", label: '3759' },
    { value: "4201", label: '4201' }
];

// module.exports = Upload

//something is making it think it's html...?


export { RadioButtons, NumberInput, ButtonInput, MultiButton, Upload, SearchBar, options };


// RadioButtons
