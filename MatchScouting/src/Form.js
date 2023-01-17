import React from "react";
import './App.css';

// Radio Buttons
function RadioButtons(props) {
    let output = [];
    for (let item in props.items) {
        output.push(
            <div >
                <p key={item}>
                    <input className="align-radio" type="radio" id={item} name={props.name} value={item} />
                    <label className="label-size" htmlFor={item}>{props.items[item]}</label>
                </p>
            </div>
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

                <div className="labelleft">
                    <label htmlFor={this.state.id}>{this.state.label}</label>
                </div>
                <div className="buttonright">
                    <input type="button" className="chonk" value="-" onClick={this.decreaseValue} />
                    <input type="number" value={this.state.value} onChange={this.handleChange} name={this.state.id} min="0" />
                    <input type="button" className="chonk" value="+" onClick={this.increaseValue} />
                </div>
            </div>


        );
    }
}





class ButtonInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: props.id, off_label: props.off_label, value: 0,  on_label: props.on_label };
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
        if (this.state.value === 0) {
            this.increaseValue();
        } else if (this.state.value === 1) {
            this.decreaseValue();
        }
    }



    render() {
        if (this.state.value === 0) {
            return (
                // <div>

                    <div className="ToggleButton">
                        <input type="button" className="number-off" value={this.state.off_label} onClick={this.setValueFinal} />

                    {/* </div> */}
                </div>

            );
        } else if (this.state.value === 1) {
            return (
                // <div>


                    <div className="ToggleButton">
                        <input type="button" className="number-on" value={this.state.on_label} onClick={this.setValueFinal} />
                    </div>
                // </div>
            );
        }
        // return (
        //     <div>
        //         <div className="labelleft">
        //             <label htmlFor={this.state.id}>{this.state.label}</label>
        //             </div>

        //         <div className = "buttonright">
        //             <input type="button" className="number-input" value={this.state.value} onClick={this.setValueFinal}/>     
        //     </div>
        //     </div>

        // );
    }
}

export { RadioButtons, NumberInput, ButtonInput };

