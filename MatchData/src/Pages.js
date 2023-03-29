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
    { value: '207', label: '207' },
    { value: '294', label: '294' },
    { value: '597', label: '597' },
    { value: '606', label: '606' },
    { value: '687', label: '687' },
    { value: '702', label: '702' },
    { value: '846', label: '846' },
    { value: '980', label: '980' },
    { value: '1148', label: '1148' },
    { value: '1159', label: '1159' },
    { value: '1197', label: '1197' },
    { value: '1452', label: '1452' },
    { value: '1515', label: '1515' },
    { value: '1661', label: '1661' },
    { value: '1759', label: '1759' },
    { value: '2584', label: '2584' },
    { value: '2710', label: '2710' },
    { value: '3408', label: '3408' },
    { value: '3473', label: '3473' },
    { value: '3863', label: '3863' },
    { value: '3952', label: '3952' },
    { value: '4123', label: '4123' },
    { value: '4201', label: '4201' },
    { value: '4470', label: '4470' },
    { value: '4501', label: '4501' },
    { value: '4964', label: '4964' },
    { value: '4999', label: '4999' },
    { value: '5089', label: '5089' },
    { value: '5124', label: '5124' },
    { value: '5199', label: '5199' },
    { value: '5500', label: '5500' },
    { value: '5669', label: '5669' },
    { value: '5857', label: '5857' },
    { value: '6000', label: '6000' },
    { value: '6658', label: '6658' },
    { value: '6833', label: '6833' },
    { value: '6904', label: '6904' },
    { value: '7185', label: '7185' },
    { value: '7230', label: '7230' },
    { value: '7611', label: '7611' },
    { value: '8020', label: '8020' },
    { value: '8600', label: '8600' },
    { value: '8898', label: '8898' },
    { value: '9172', label: '9172' },
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
