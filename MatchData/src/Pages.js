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
