import React from 'react'
import './App.css';

class GetDataAuto extends React.Component {
    constructor(props) {
        super(props);
        this.state = { AutoConeHighValue: 0 };
        this.state = { AutoConeMidValue: 0 };
        this.state = { AutoConeLowValue: 0 };
    }

    async componentDidMount() {
        // GET request using fetch with async/await
        const response = await fetch(`http://${process.env.BACKEND_SERVER_IP}:5000/data/matches`, { crossDomain: true, method: 'GET' });
        const data = await response.json();
        this.setState({ AutoConeHighValue: data[2].Auto_Cone_High })
        this.setState({ AutoConeMidValue: data[2].Auto_Cone_Mid })
        this.setState({ AutoConeLowValue: data[2].Auto_Cone_Low })
    }

    render() {
        return (
            <div>
                <p>Auto Cone High, {this.state.AutoConeHighValue}</p>
                <p>Auto Cone Mid, {this.state.AutoConeMidValue}</p>
                <p>Auto Cone Low, {this.state.AutoConeLowValue}</p>
            </div>
        );
    }
}

class GetDataTele extends React.Component {
    constructor(props) {
        super(props);
        this.state = { TeleConeHighValue: 0 };
        this.state = { TeleConeMidValue: 0 };
        this.state = { TeleConeLowValue: 0 };
    }

    async componentDidMount() {
        // GET request using fetch with async/await
        const response = await fetch('http://localhost:5000/data/matches', { crossDomain: true, method: 'GET' });
        const data = await response.json();
        this.setState({ TeleConeHighValue: data[2].Tele_Cone_High })
        this.setState({ TeleConeMidValue: data[2].Tele_Cone_Mid })
        this.setState({ TeleConeLowValue: data[2].Tele_Cone_Low })
    }

    render() {
        return (
            <div>
                <p>Tele Cone High, {this.state.TeleConeHighValue}</p>
                <p>Tele Cone Mid, {this.state.TeleConeMidValue}</p>
                <p> Cone Low, {this.state.TeleConeLowValue}</p>
            </div>
        );
    }
}

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
                // <div>
                <div className="ToggleButton">
                    <input type="hidden" value={false} name={this.state.id} />
                    <input type="button" className="number-off" value={this.state.off_label} onClick={this.setValueFinal} />

                    {/* </div> */}
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


export { RadioButtons, NumberInput, ButtonInput, GetDataAuto, GetDataTele };
