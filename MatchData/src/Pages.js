import React from 'react'
import Select from 'react-select'
import './App.css';

import 'reactjs-popup/dist/index.css';

export default function PopupGfg(props) {
    return (
        <div>
            {/* <table className="test">
                <tr>
                    <td rowspan="2">&nbsp;</td>
                    <td className="test">
                        <SearchBar setSelectedOption={this.setSelectedOption1} selectedOption={this.state.selectedOption1} />
                    </td>
                    <td>text 2</td>
                </tr>
                <tr>
                    <td>aaaaaaaaaaaaaaaaaa</td>
                    <td className="test">rjkjkgrjkrgjkdgkjdf</td>
                </tr>
                <tr>
                    <td className="test">rererrf</td>
                    <td>hi</td>
                    <td>qwertui</td>
                </tr>
            </table> */}
            <br></br>
            <br></br>

        </div>

    )
};



const options = [
    { value: "0", label: 'Select...' },
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
    handleChange = (selectedOption) => {
        this.props.setSelectedOption(selectedOption)
    }

    render() {
        // console.log(this.props.selectedOption)
        return (
            <div>
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
