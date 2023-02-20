import './App.css';
import { SearchBar, Title, options } from "./Pages";
import React from "react";
import QRCode from 'react-qr-code';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: false, ScouterName: "",
            EventName: "",
            selectedOption1: options[0],
            selectedOption2: options[0],
            selectedOption3: options[0],
            selectedOption4: options[0],
            selectedOption5: options[0],
            selectedOption6: options[0],
            data1: null,
            data2: null,
            data3: null,
            data4: null,
            data5: null,
            data6: null
        };
        this.setSelectedOption1 = this.setSelectedOption1.bind(this);
        this.setSelectedOption2 = this.setSelectedOption2.bind(this);
        this.setSelectedOption3 = this.setSelectedOption3.bind(this);

        this.setSelectedOption4 = this.setSelectedOption4.bind(this);
        this.setSelectedOption5 = this.setSelectedOption5.bind(this);
        this.setSelectedOption6 = this.setSelectedOption6.bind(this);

        this.setSelected = this.setSelected.bind(this);
        this.SignInHandler = this.SignInHandler.bind(this)
        this.SubmitHandler = this.SubmitHandler.bind(this)

    }

    setSelectedOption1(e) {
        this.setState({ selectedOption1: e });
    }
    setSelectedOption2(e) {
        this.setState({ selectedOption2: e });
    }
    setSelectedOption3(e) {
        this.setState({ selectedOption3: e });
    }
    setSelectedOption4(e) {
        this.setState({ selectedOption4: e });
    }
    setSelectedOption5(e) {
        this.setState({ selectedOption5: e });
    }
    setSelectedOption6(e) {
        this.setState({ selectedOption6: e });
    }

    // async componentDidMount() {
    //     await this.componentDidUpdate({ selectedOption1: { value: null }, selectedOption2: { value: null }, selectedOption3: { value: null }, selectedOption4: { value: null }, selectedOption5: { value: null }, selectedOption6: { value: null } });
    // }

    // Replace all props with state
    async componentDidUpdate(prevProps, prevState) {
        if (prevState.selectedOption1.value !== this.state.selectedOption1.value) {
            const response = await fetch(`http://${process.env.REACT_APP_BACKEND_IP}:5000/data/analysis/team/` + this.state.selectedOption1.value, { crossDomain: true, method: 'GET' });
            if (response.status === 404) {
                this.setState({ data1: null });
            } else {
                const testData = await response.json();
                this.setState({ data1: testData });
            }
        }
        else if (prevState.selectedOption2.value !== this.state.selectedOption2.value) {
            const response = await fetch(`http://${process.env.REACT_APP_BACKEND_IP}:5000/data/analysis/team/` + this.state.selectedOption2.value, { crossDomain: true, method: 'GET' });
            if (response.status === 404) {
                this.setState({ data2: null });
            } else {
                const testData = await response.json();
                this.setState({ data2: testData });
            }
        }
        else if (prevState.selectedOption3.value !== this.state.selectedOption3.value) {
            const response = await fetch(`http://${process.env.REACT_APP_BACKEND_IP}:5000/data/analysis/team/` + this.state.selectedOption3.value, { crossDomain: true, method: 'GET' });
            if (response.status === 404) {
                this.setState({ data3: null });
            } else {
                this.setState({ data3: await response.json() });
            }
        }
        else if (prevState.selectedOption4.value !== this.state.selectedOption4.value) {
            const response = await fetch(`http://${process.env.REACT_APP_BACKEND_IP}:5000/data/analysis/team/` + this.state.selectedOption4.value, { crossDomain: true, method: 'GET' });
            if (response.status === 404) {
                this.setState({ data4: null });
            } else {
                this.setState({ data4: await response.json() });
            }
        }
        else if (prevState.selectedOption5.value !== this.state.selectedOption5.value) {
            const response = await fetch(`http://${process.env.REACT_APP_BACKEND_IP}:5000/data/analysis/team/` + this.state.selectedOption5.value, { crossDomain: true, method: 'GET' });
            if (response.status === 404) {
                this.setState({ data5: null });
            } else {
                this.setState({ data5: await response.json() });
            }
        }
        else if (prevState.selectedOption6.value !== this.state.selectedOption6.value) {
            const response = await fetch(`http://${process.env.REACT_APP_BACKEND_IP}:5000/data/analysis/team/` + this.state.selectedOption6.value, { crossDomain: true, method: 'GET' });
            if (response.status === 404) {
                this.setState({ data6: null });
            } else {
                this.setState({ data6: await response.json() });
            }
        }
        // GET request using fetch with async/await
    }

    SignInHandler(e) {
        e.preventDefault();
        const answers = e.target.elements;
        this.setState({ signedIn: true, ScouterName: answers.Sname.value, EventName: answers.Ename.value, QRCode: null });
        return false;
    }

    SubmitHandler(e) {
        e.preventDefault();
        const answers = e.target.elements;
        this.setState({
            QRCode: <QRCode value={
                `${this.state.ScouterName}\t` +
                `${this.state.EventName}\t` +
                `${answers.match.value}\t` +
                `${answers.Num.value}\t` +
                `${answers.Alliance.value}\t` +
                `${answers.GeneralUp.value}\t` +
                `${answers.GeneralLow.value}\t` +
                `${answers.PhotosUp.value}\t` +
                `${answers.PhotosLow.value}\t` +
                `${answers.foul.value}\t` +
                `${answers.tfoul.value}\t` +
                `${answers.climbType.value}\t` +
                `${answers.notes.value}`
            } size={512} />
        });
        return false;
    }

    setSelected(id) {
        this.setState({ selected: id });
    }

    render() {
        const DataRow = props => {
            const cells = [];

            for (let i = 1; i <= 6; i++) {
                for (let j of ['Average', 'Max']) {
                    cells.push(<td key={j+i}>{(this.state['data' + i])?.[props.stat + '_' + j]}</td>);
                }
            }

            return (<tr>{props.children}{cells}</tr>);
        }

        return (
            <main>
                <form onSubmit={this.SubmitHandler} action="#">
                    <Title selected={this.state.selected === 'title'} />

                    {/* <SearchBar setSelectedOption={this.setSelectedOption1} selectedOption={this.state.selectedOption1} /> */}
                    {/* <SearchBar setSelectedOption={this.setSelectedOption2} selectedOption={this.state.selectedOption2} /> */}
                    {/* <SearchBar setSelectedOption={this.setSelectedOption3} selectedOption={this.state.selectedOption3} /> */}

                    {/* <SearchBar setSelectedOption={this.setSelectedOption3} selectedOption={this.state.selectedOption3} /> */}
                    {/* <SearchBar setSelectedOption={this.setSelectedOption5} selectedOption={this.state.selectedOption5} /> */}
                    {/* <SearchBar setSelectedOption={this.setSelectedOption6} selectedOption={this.state.selectedOption6} /> */}

                    <table className="test"><tbody>
                        <tr>
                            <td rowSpan="2" colSpan="3">Match Data Table</td>
                            <td className="test" colSpan="2">
                                <SearchBar setSelectedOption={this.setSelectedOption1} selectedOption={this.state.selectedOption1} />
                            </td>
                            <td colSpan="2">
                                <SearchBar setSelectedOption={this.setSelectedOption2} selectedOption={this.state.selectedOption2} />
                            </td>
                            <td colSpan="2">
                                <SearchBar setSelectedOption={this.setSelectedOption3} selectedOption={this.state.selectedOption3} />
                            </td>
                            <td colSpan="2">
                                <SearchBar setSelectedOption={this.setSelectedOption4} selectedOption={this.state.selectedOption4} />
                            </td>
                            <td colSpan="2">
                                <SearchBar setSelectedOption={this.setSelectedOption5} selectedOption={this.state.selectedOption5} />
                            </td>
                            <td colSpan="2">
                                <SearchBar setSelectedOption={this.setSelectedOption6} selectedOption={this.state.selectedOption6} />
                            </td>
                        </tr>

                        <tr>
                            <td className="test">AVG</td>
                            <td>MAX</td>
                            <td>AVG</td>
                            <td>MAX</td>
                            <td>AVG</td>
                            <td>MAX</td>
                            <td>AVG</td>
                            <td>MAX</td>
                            <td>AVG</td>
                            <td>MAX</td>
                            <td>AVG</td>
                            <td>MAX</td>
                        </tr>
                        <tr>
                            <td className="test" colSpan="3">Pin Fouls</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                        </tr>
                        <tr>
                            <td colSpan="3">G204 Fouls</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td ></td>
                        </tr>
                        <DataRow stat="Auto_Total">
                            <td rowSpan="5">Auto</td>
                            <td colSpan="2">Total Game Pieces</td>
                        </DataRow>
                        <DataRow stat='Auto_High'>
                            <td></td>
                            <td>Game Pieces High</td>
                        </DataRow>
                        <DataRow stat="Auto_Mid">
                            <td></td>
                            <td>Game Pieces Mid</td>
                        </DataRow>
                        <DataRow stat='Auto_Low'>
                            <td></td>
                            <td>Game Pieces Low</td>
                        </DataRow>
                        <tr>
                            <td colSpan="2">% Balanced / Docked</td>
                            <td colSpan="2">{this.state.data1?.Auto_Balance_Frequency}</td>
                            <td colSpan="2">{this.state.data2?.Auto_Balance_Frequency}</td>
                            <td colSpan="2">{this.state.data3?.Auto_Balance_Frequency}</td>
                            <td colSpan="2">{this.state.data4?.Auto_Balance_Frequency}</td>
                            <td colSpan="2">{this.state.data5?.Auto_Balance_Frequency}</td>
                            <td colSpan="2">{this.state.data6?.Auto_Balance_Frequency}</td>
                        </tr>
                        <DataRow stat="Tele_Pieces_Total">
                            <td rowSpan="12">Tele-Op</td>
                            <td colSpan="2">Total Game Pieces</td>
                        </DataRow>
                        <DataRow stat="Tele_Pieces_High">
                            <td></td>
                            <td>Game Pieces High</td>
                        </DataRow>
                        <DataRow stat="Tele_Pieces_Mid">
                            <td></td>
                            <td>Game Pieces Mid</td>
                        </DataRow>
                        <DataRow stat="Tele_Pieces">
                            <td></td>
                            <td>Game Pieces Low</td>
                        </DataRow>
                        <DataRow stat="Tele_Cube_Total">
                            <td colSpan="2">Total Cubes Scored</td>
                        </DataRow>
                        <DataRow stat="Tele_Cube_High">
                            <td></td>
                            <td>Cube High</td>
                        </DataRow>
                        <DataRow stat="Tele_Cube_Mid">
                            <td></td>
                            <td>Cube Mid</td>
                        </DataRow>
                        <DataRow stat="Tele_Cube_Low">
                            <td></td>
                            <td>Cube Low</td>
                        </DataRow>
                        <DataRow stat="Tele_Cone_Total">
                            <td colSpan="2">Total Cones Scored</td>
                        </DataRow>
                        <DataRow stat="Tele_Cone_High">
                            <td></td>
                            <td>Cone High</td>
                        </DataRow>
                        <DataRow stat="Tele_Cone_Mid">
                            <td></td>
                            <td>Cone Mid</td>
                        </DataRow>
                        <DataRow stat="Tele_Cone_Low">
                            <td></td>
                            <td>Cone Low</td>
                        </DataRow>
                        <tr>
                            <td rowSpan="2">Endgame</td>
                            <td colSpan="2">% Docked</td>
                            <td colSpan="2">{this.state.data1?.End_Dock_Frequency}</td>
                            <td colSpan="2">{this.state.data2?.End_Dock_Frequency}</td>
                            <td colSpan="2">{this.state.data3?.End_Dock_Frequency}</td>
                            <td colSpan="2">{this.state.data4?.End_Dock_Frequency}</td>
                            <td colSpan="2">{this.state.data5?.End_Dock_Frequency}</td>
                            <td colSpan="2">{this.state.data6?.End_Dock_Frequency}</td>

                        </tr>
                        <tr>
                            <td colSpan="2">% Balanced</td>
                            <td colSpan="2">{this.state.data1?.End_Balance_Frequency}</td>
                            <td colSpan="2">{this.state.data2?.End_Balance_Frequency}</td>
                            <td colSpan="2">{this.state.data3?.End_Balance_Frequency}</td>
                            <td colSpan="2">{this.state.data4?.End_Balance_Frequency}</td>
                            <td colSpan="2">{this.state.data5?.End_Balance_Frequency}</td>
                            <td colSpan="2">{this.state.data6?.End_Balance_Frequency}</td>

                        </tr>

                    </tbody></table>

                    {/* <General selected={this.state.selected === 'general'} /> */}

                    {/* <SavePage selected={this.state.selected === 'save-page'} QRCode={this.state.QRCode} /> */}
                </form>
            </main>
        );
    }

}

export default App;
