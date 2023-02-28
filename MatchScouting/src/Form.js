import React from "react";
import './App.css';
import Select from 'react-select';

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
        this.state = { items: props.items, id: props.id, label: props.label, value: 0, selected: 0 };
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
    { value: null, label: '' },
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


class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        // eslint-disable-next-line no-restricted-globals
        addEventListener('reset', () => { this.setState({ value: null }) })
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

export { RadioButtons, NumberInput, ButtonInput, MultiButton, Upload, SearchBar, options };
