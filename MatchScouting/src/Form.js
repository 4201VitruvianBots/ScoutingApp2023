import './App.css';
import Select from 'react-select';
import React from 'react';

// Radio Buttons
function RadioButtons(props) {
    let output = [];
    for (let item in props.items) {
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
        // eslint-disable-next-line no-restricted-globals
        addEventListener('reset', () => { this.setState({ value: 0 }) })
    }


    setValue(value) {
        this.setState({ value: Math.abs(parseInt(value)) });
    }

    handleChange(event) {
        this.setValue(event.target.value);
    }

    increaseValue() {
        if (this.state.value < 99)
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

                <div className="labelleft">
                    <label htmlFor={this.state.id}>{this.state.label}</label>
                </div>
                <div className="buttonright">
                    <input type="button" className="chonk" value="-" onClick={this.decreaseValue} />
                    <input type="number" value={this.state.value} onChange={this.handleChange} name={this.state.id} min="0" max="99" step="1" />
                    <input type="button" className="chonk" value="+" onClick={this.increaseValue} />
                </div>
            </div>


        );
    }
}

class ButtonInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: props.id, off_label: props.off_label, value: 0, on_label: props.on_label };
        this.setValue = this.setValue.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.increaseValue = this.increaseValue.bind(this);
        this.decreaseValue = this.decreaseValue.bind(this);
        this.setValueFinal = this.setValueFinal.bind(this);
        // eslint-disable-next-line no-restricted-globals
        addEventListener('reset', () => { this.setState({ value: 0 }) })
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
        if (this.state.value === 0) {
            this.increaseValue();
        } else if (this.state.value === 1) {
            this.decreaseValue();
        }
    }
    render() {
        if (this.state.value === 0) {
            return (
                <div className="ToggleButton">
                    <input type="hidden" value={false} name={this.state.id} />
                    <input type="button" className="number-off" value={this.state.off_label} onClick={this.setValueFinal} />
                </div>
            );
        } else if (this.state.value === 1) {
            return (
                <div className="ToggleButton">
                    <input type="hidden" value={true} name={this.state.id} />
                    <input type="button" className="number-on" value={this.state.on_label} onClick={this.setValueFinal} />
                </div>
            );
        }
    }
}


class MultiButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: props.items, id: props.id, label: props.label, value: 0, selected: null };
        this.test1 = this.test1.bind(this);
        this.generateButtons = this.generateButtons.bind(this);
        // eslint-disable-next-line no-restricted-globals
        addEventListener('reset', () => { this.setState({ selected: 0 }) })

    }

    test1(id) {
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
                // component = <input type="button" value={1} on_label={(this.state.items[index][0])} off_label={(this.state.items[index][1])} id={index} test1={this.test1} />
                console.log('Selected button generated');

            } else {
                // component = <input type="button" value={0} on_label={(this.state.items[index][0])} off_label={(this.state.items[index][1])} id={index} test1={this.test1} />
                component = <input key={index} type="button" className="number-off" value={this.state.items[index][1]} onClick={() => this.test1(index)} />
                console.log('Not selected button generated');
            }

            output.push(component)

        }
        return output; 
    }


    render() {

        return (
            <div className="[className]">
                <this.generateButtons />
                <input type='hidden' name={this.state.id} value={this.state.selected} />
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
}

const options = [
    { value: null, label: "Select..." },
    { value: 294, label: 294 },
    { value: 359, label: 359 },
    { value: 399, label: 399 },
    { value: 498, label: 498 },
    { value: 597, label: 597 },
    { value: 696, label: 696 },
    { value: 968, label: 968 },
    { value: 987, label: 987 },
    { value: 1160, label: 1160 },
    { value: 1836, label: 1836 },
    { value: 2102, label: 2102 },
    { value: 2122, label: 2122 },
    { value: 2658, label: 2658 },
    { value: 2710, label: 2710 },
    { value: 2839, label: 2839 },
    { value: 3128, label: 3128 },
    { value: 3255, label: 3255 },
    { value: 3309, label: 3309 },
    { value: 3473, label: 3473 },
    { value: 3476, label: 3476 },
    { value: 3647, label: 3647 },
    { value: 3952, label: 3952 },
    { value: 4079, label: 4079 },
    { value: 4141, label: 4141 },
    { value: 4201, label: 4201 },
    { value: 4276, label: 4276 },
    { value: 4322, label: 4322 },
    { value: 4415, label: 4415 },
    { value: 4419, label: 4419 },
    { value: 4501, label: 4501 },
    { value: 4738, label: 4738 },
    { value: 5199, label: 5199 },
    { value: 6072, label: 6072 },
    { value: 6220, label: 6220 },
    { value: 6560, label: 6560 },
    { value: 6995, label: 6995 },
    { value: 7042, label: 7042 },
    { value: 7157, label: 7157 },
    { value: 7447, label: 7447 },
    { value: 8888, label: 8888 },
    { value: 9271, label: 9271 },
    { value: 9408, label: 9408 },
    
];

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }

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

function SubmitButtons(props) {
}

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

export { RadioButtons, NumberInput, ButtonInput, MultiButton, Upload, SearchBar, options, SubmitButtons, CheckDecimal };
