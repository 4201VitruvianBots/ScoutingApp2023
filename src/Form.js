import React from "react";
import './App.css';

// Radio Buttons
function RadioButtons(props) {
    let output = [];
    for (let item in props.items) {
        output.push(
            <p key={item}>
                <input type="radio" id={item} name={props.name} value={item} />
                <label htmlFor={item}>{props.items[item]}</label>
            </p>
        )
    }
    return output;

}

// Number input
class NumberInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {id: props.id, label: props.label, value: 0};
        this.setValue = this.setValue.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.increaseValue = this.increaseValue.bind(this);
        this.decreaseValue = this.decreaseValue.bind(this);
    }
    
    setValue(value) {
        this.setState({value: value});
    }
    
    handleChange(event) {
        this.setValue(event.target.value);
    }
    
    increaseValue() {
        this.setState({value: this.state.value + 1});
    }

    decreaseValue() {
        this.setState({value: this.state.value - 1});
    }

    render() {
        // props = {id: "teleopUp", label: "Upper Cargo"};
        return (
            <p>
               <div className = "labelleft"><label htmlFor={this.state.id}>{this.state.label}</label></div>
                <div className = "buttonright"><input type="button" className="chonk" value="-" onClick={this.decreaseValue}/>
                <input type="number" value={this.state.value} onChange={this.handleChange} name={this.state.id} min="0" />
                <input type="button" className="chonk" value="+" onClick={this.increaseValue}/></div>
            </p>


        );
    }
}

export { RadioButtons, NumberInput };
