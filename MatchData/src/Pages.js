import React from 'react'
import Select from 'react-select'
import './App.css';

import 'reactjs-popup/dist/index.css';

export default function PopupGfg(props) {
    return (
        <div>
            <br></br>
            <br></br>

        </div>

    )
};



const options = [
    { value: null, label: 'Select...' },
    { value: '4',    label: '4'},
    { value: '294',  label: '294'},
    { value: '597',  label: '597'},
    { value: '599',  label: '599'},
    { value: '687',  label: '687'},
    { value: '696',  label: '696'},
    { value: '968',  label: '968'},
    { value: '1138', label: '1138'},
    { value: '1197', label: '1197'},
    { value: '1452', label: '1452'},
    { value: '2584', label: '2584'},
    { value: '2637', label: '2637'},
    { value: '2710', label: '2710'},
    { value: '3473', label: '3473'},
    { value: '3759', label: '3759'},
    { value: '4123', label: '4123'},
    { value: '4201', label: '4201'},
    { value: '4322', label: '4322'},
    { value: '4470', label: '4470'},
    { value: '4999', label: '4999'},
    { value: '5089', label: '5089'},
    { value: '5199', label: '5199'},
    { value: '6072', label: '6072'},
    { value: '6220', label: '6220'},
    { value: '6904', label: '6904'},
    { value: '7042', label: '7042'},
    { value: '8006', label: '8006'},
    { value: '9408', label: '9408'},
    { value: '9993', label: '9993'},
    { value: '9995', label: '9995'},
    { value: '9996', label: '9996'},
    { value: '9997', label: '9997'},
    { value: '9998', label: '9998'},
    { value: '9999', label: '9999'},    
];

class SearchBar extends React.Component {
    handleChange = (selectedOption) => {
        this.props.setSelectedOption(selectedOption)
    }

    render() {
        // console.log(this.props.selectedOption)
        return (
            <div className="testtest">
                <Select
                    options={options}
                    value={this.props.selectedOption}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}



function Page(props) {
    return (
        <div className={props.selected ? 'page selected' : 'page'} id={props.id}>
            {props.children}
        </div>
    );
}

function Title(props) {
    return (
        <Page selected={props.selected} id="title">
            <p className="section-label">Recon Interface</p>
        </Page>
    );
}




function General(props) {
    return (
        <Page selected={props.selected} id="comments">

        </Page>
    );
}

<br></br>



export { General, Title, SearchBar, PopupGfg, options };
