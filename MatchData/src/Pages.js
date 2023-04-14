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
    { value: '321', label: '321' },
    { value: '695', label: '695' },
    { value: '870', label: '870' },
    { value: '1038', label: '1038' },
    { value: '1325', label: '1325' },
    { value: '1477', label: '1477' },
    { value: '1511', label: '1511' },
    { value: '2246', label: '2246' },
    { value: '2491', label: '2491' },
    { value: '4091', label: '4091' },
    { value: '4201', label: '4201' },
    { value: '4206', label: '4206' },
    { value: '9287', label: '9287' },
    { value: '9293', label: '9293' }
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
