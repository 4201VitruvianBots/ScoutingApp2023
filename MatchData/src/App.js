import './App.css';
import { scaleLinear } from 'd3-scale';
import { SearchBar, Title, PopupGfg, options } from "./Pages";
import React from "react";
import QRCode from 'react-qr-code';

var colorScale0 = scaleLinear().domain([0, 50, 100]).range(['red', 'yellow', 'lime'])
var colorScale1 = scaleLinear().domain([0, 0.5, 1, 1.01]).range(['red', 'yellow', 'lime', 'fuchsia']);


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: false, ScouterName: "",
            matchSchedule: null,
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
        this.SignInHandler = this.SignInHandler.bind(this);
        this.SubmitHandler = this.SubmitHandler.bind(this);
        this.handleMatchUpdate = this.handleMatchUpdate.bind(this);   

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

    handleMatchUpdate(event) {
        const matchNumber = event.target.value;
        const team = this.state.matchSchedule[matchNumber][0].toString();
        const team2 = this.state.matchSchedule[matchNumber][1].toString();
        const team3 = this.state.matchSchedule[matchNumber][2]?.toString();
        const team4 = this.state.matchSchedule[matchNumber][3]?.toString();
        const team5 = this.state.matchSchedule[matchNumber][4]?.toString();
        const team6 = this.state.matchSchedule[matchNumber][5]?.toString();
        if (team !== undefined) {
            this.setSelectedOption1({ label: team, value: team })
            this.setSelectedOption2({ label: team2, value: team2 })
            this.setSelectedOption3({ label: team3, value: team3 })
            this.setSelectedOption4({ label: team4, value: team4 })
            this.setSelectedOption5({ label: team5, value: team5 })
            this.setSelectedOption6({ label: team6, value: team6 })
        }
    }

    componentDidMount() {
        let scheduleInterval;

        const fetchSchedule = async () => {
            const url = `http://${process.env.REACT_APP_BACKEND_IP}/schedule.json`;
            try {
                const response = await fetch(url);
                if (response.ok) {
                    const data = await response.json();
                    this.setState({ matchSchedule: data });
                }
                clearInterval(scheduleInterval);
            } catch (error) {
            }
        }

        fetchSchedule();

        scheduleInterval = setInterval(fetchSchedule, 10000);

        return function cleanup() {
            clearInterval(scheduleInterval);
        };
    }
    // async componentDidMount() {
    //     await this.componentDidUpdate({ selectedOption1: { value: null }, selectedOption2: { value: null }, selectedOption3: { value: null }, selectedOption4: { value: null }, selectedOption5: { value: null }, selectedOption6: { value: null } });
    // }

    // Replace all props with state
    async componentDidUpdate(prevProps, prevState) {
        if (prevState.selectedOption1.value !== this.state.selectedOption1.value) {
            const response = await fetch(`http://${process.env.REACT_APP_BACKEND_IP}/data/analysis/team/` + this.state.selectedOption1.value, { crossDomain: true, method: 'GET' });
            if (response.status === 404) {
                this.setState({ data1: null });
            } else {
                const testData = await response.json();
                this.setState({ data1: testData });
            }
        }
        else if (prevState.selectedOption2.value !== this.state.selectedOption2.value) {
            const response = await fetch(`http://${process.env.REACT_APP_BACKEND_IP}/data/analysis/team/` + this.state.selectedOption2.value, { crossDomain: true, method: 'GET' });
            if (response.status === 404) {
                this.setState({ data2: null });
            } else {
                const testData = await response.json();
                this.setState({ data2: testData });
            }
        }
        else if (prevState.selectedOption3.value !== this.state.selectedOption3.value) {
            const response = await fetch(`http://${process.env.REACT_APP_BACKEND_IP}/data/analysis/team/` + this.state.selectedOption3.value, { crossDomain: true, method: 'GET' });
            if (response.status === 404) {
                this.setState({ data3: null });
            } else {
                this.setState({ data3: await response.json() });
            }
        }
        else if (prevState.selectedOption4.value !== this.state.selectedOption4.value) {
            const response = await fetch(`http://${process.env.REACT_APP_BACKEND_IP}/data/analysis/team/` + this.state.selectedOption4.value, { crossDomain: true, method: 'GET' });
            if (response.status === 404) {
                this.setState({ data4: null });
            } else {
                this.setState({ data4: await response.json() });
            }
        }
        else if (prevState.selectedOption5.value !== this.state.selectedOption5.value) {
            const response = await fetch(`http://${process.env.REACT_APP_BACKEND_IP}/data/analysis/team/` + this.state.selectedOption5.value, { crossDomain: true, method: 'GET' });
            if (response.status === 404) {
                this.setState({ data5: null });
            } else {
                this.setState({ data5: await response.json() });
            }
        }
        else if (prevState.selectedOption6.value !== this.state.selectedOption6.value) {
            const response = await fetch(`http://${process.env.REACT_APP_BACKEND_IP}/data/analysis/team/` + this.state.selectedOption6.value, { crossDomain: true, method: 'GET' });
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

        return (
            <main>
                <form onSubmit={this.SubmitHandler} action="#">
                    <Title selected={this.state.selected === 'title'} />
                    <table >
                        <tr>
                            <td rowspan="2" colspan="3" className="colorbg1">Match Number<br /><input type="number" min="1" max="100" onChange={this.handleMatchUpdate} required></input></td>
                            <td colspan="2" className="colorbg1">
                                <SearchBar setSelectedOption={this.setSelectedOption1} selectedOption={this.state.selectedOption1} />
                            </td>
                            <td colspan="2" className="colorbg1">
                                <SearchBar setSelectedOption={this.setSelectedOption2} selectedOption={this.state.selectedOption2} />
                            </td>
                            <td colspan="2" className="colorbg1">
                                <SearchBar setSelectedOption={this.setSelectedOption3} selectedOption={this.state.selectedOption3} />
                            </td>
                            <td colspan="2" className="colorbg1">
                                <SearchBar setSelectedOption={this.setSelectedOption4} selectedOption={this.state.selectedOption4} />
                            </td>
                            <td colspan="2" className="colorbg1">
                                <SearchBar setSelectedOption={this.setSelectedOption5} selectedOption={this.state.selectedOption5} />
                            </td>
                            <td colspan="2" className="colorbg1">
                                <SearchBar setSelectedOption={this.setSelectedOption6} selectedOption={this.state.selectedOption6} />
                            </td>
                        </tr>
                        <tr>
                            {[...Array(12)].map((_, i) => (
                                <td key={i} className="colorbg">{i % 2 === 0 ? "AVG" : "MAX"}</td>
                            ))}
                        </tr>
                        <tr>
                            <td colspan="3" className="colorbg1">Pin Fouls</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <td key={i} colspan="2" className="colorbg2">{this.state[`data${i}`]?.Total_Pin_Fouls}</td>
                            ))}
                        </tr>
                        <tr>
                            <td colspan="3" className="colorbg1">G204 Fouls</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <td key={i} colspan="2" className="colorbg2">{this.state[`data${i}`]?.Total_Inside_Robot_Fouls}</td>
                            ))}
                        </tr>
                        <tr>
                            <td rowspan="5" className="colorbg1">Auto</td>
                            <td colspan="2" className="colorbg">Total Game Pieces</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <React.Fragment key={i}>
                                    <td className="nobgcolor" style={{ backgroundColor: colorScale1(Math.round(this.state[`data${i}`]?.Auto_Total_Average * 100) / 100), }}>{Math.round(this.state[`data${i}`]?.Auto_Total_Average * 100) / 100}</td>
                                    <td className="test">{Math.round(this.state[`data${i}`]?.Auto_Total_Max * 100) / 100}</td>
                                </React.Fragment>
                            ))}
                        </tr>
                        <tr>
                            <td className="colorbg"></td>
                            <td className="colorbg">Game Pieces High</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <React.Fragment key={i}>
                                    <td className="nobgcolor">{Math.round(this.state[`data${i}`]?.Auto_High_Average * 100) / 100}</td>
                                    <td className="test">{Math.round(this.state[`data${i}`]?.Auto_High_Max * 100) / 100}</td>
                                </React.Fragment>
                            ))}
                        </tr>
                        <tr>
                            <td className="colorbg"></td>
                            <td className="colorbg">Game Pieces Mid</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <>
                                    <td className="nobgcolor">{Math.round(this.state[`data${i}`]?.Auto_Mid_Average * 100) / 100}</td>
                                    <td className="test">{Math.round(this.state[`data${i}`]?.Auto_Mid_Max * 100) / 100}</td>
                                </>
                            ))}
                        </tr>
                        <tr>
                            <td className="colorbg"></td>
                            <td className="colorbg">Game Pieces Low</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <>
                                    <td className="nobgcolor">{Math.round(this.state[`data${i}`]?.Auto_Low_Average * 100) / 100}</td>
                                    <td className="test">{Math.round(this.state[`data${i}`]?.Auto_Low_Max * 100) / 100}</td>
                                </>
                            ))}
                        </tr>
                        <tr>
                            <td colSpan="2" className="colorbg">% Balanced / Docked</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <td colSpan="2" className="colorbg2" style={{ backgroundColor: colorScale0((this.state[`data${i}`]?.Auto_Balance_Frequency) * 100) }}>{`${(this.state[`data${i}`]?.Auto_Balance_Frequency) * 100}%`}</td>
                            ))}
                        </tr>
                        <tr>
                            <td rowspan="12" className="colorbg1">Tele-Op</td>
                            <td colspan="2" className="colorbg">Total Game Pieces</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <React.Fragment key={i}>
                                    <td className="nobgcolor">{Math.round(this.state[`data${i}`]?.Tele_Pieces_Total_Average * 100) / 100}</td>
                                    <td className="test">{Math.round(this.state[`data${i}`]?.Tele_Pieces_Total_Max * 100) / 100}</td>
                                </React.Fragment>
                            ))}
                        </tr>
                        <tr>
                            <td className="colorbg"></td>
                            <td className="colorbg">Game Pieces High</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <React.Fragment key={i}>
                                    <td className="nobgcolor">{Math.round(this.state[`data${i}`]?.Tele_Pieces_High_Average * 100) / 100}</td>
                                    <td className="test">{Math.round(this.state[`data${i}`]?.Tele_Pieces_High_Max * 100) / 100}</td>
                                </React.Fragment>
                            ))}
                        </tr>
                        <tr>
                            <td className="colorbg"></td>
                            <td className="colorbg">Game Pieces Mid</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <React.Fragment key={i}>
                                    <td className="nobgcolor">{Math.round(this.state[`data${i}`]?.Tele_Pieces_Mid_Average * 100) / 100}</td>
                                    <td className="test">{Math.round(this.state[`data${i}`]?.Tele_Pieces_Mid_Max * 100) / 100}</td>
                                </React.Fragment>
                            ))}
                        </tr>
                        <tr>
                            <td className="colorbg"></td>
                            <td className="colorbg">Game Pieces Low</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <React.Fragment key={i}>
                                    <td className="nobgcolor">{Math.round(this.state[`data${i}`]?.Tele_Pieces_Low_Average * 100) / 100}</td>
                                    <td className="test">{Math.round(this.state[`data${i}`]?.Tele_Pieces_Low_Max * 100) / 100}</td>
                                </React.Fragment>
                            ))}
                        </tr>
                        <tr>
                            <td colspan="2" className="colorbg">Total Cubes Scored</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <React.Fragment key={i}>
                                    <td className="nobgcolor">{Math.round(this.state[`data${i}`]?.Tele_Cube_Total_Average * 100) / 100}</td>
                                    <td className="test">{Math.round(this.state[`data${i}`]?.Tele_Cube_Total_Max * 100) / 100}</td>
                                </React.Fragment>
                            ))}
                        </tr>
                        <tr>
                            <td className="colorbg"></td>
                            <td className="colorbg">Cube High</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <React.Fragment key={i}>
                                    <td className="nobgcolor">{Math.round(this.state[`data${i}`]?.Tele_Cube_High_Average * 100) / 100}</td>
                                    <td className="test">{Math.round(this.state[`data${i}`]?.Tele_Cube_High_Max * 100) / 100}</td>
                                </React.Fragment>
                            ))}
                        </tr>
                        <tr>
                            <td className="colorbg"></td>
                            <td className="colorbg">Cube Mid</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <React.Fragment key={i}>
                                    <td className="nobgcolor">{Math.round(this.state[`data${i}`]?.Tele_Cube_Mid_Average * 100) / 100}</td>
                                    <td className="test">{Math.round(this.state[`data${i}`]?.Tele_Cube_Mid_Max * 100) / 100}</td>
                                </React.Fragment>
                            ))}
                        </tr>
                        <tr>
                            <td className="colorbg"></td>
                            <td className="colorbg">Cube Low</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <React.Fragment key={i}>
                                    <td className="nobgcolor">{Math.round(this.state[`data${i}`]?.Tele_Cube_Low_Average * 100) / 100}</td>
                                    <td className="test">{Math.round(this.state[`data${i}`]?.Tele_Cube_Low_Max * 100) / 100}</td>
                                </React.Fragment>
                            ))}
                        </tr>
                        <tr>
                            <td colspan="2" className="colorbg">Total Cones Scored</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <React.Fragment key={i}>
                                    <td className="nobgcolor">{Math.round(this.state[`data${i}`]?.Tele_Cone_Total_Average * 100) / 100}</td>
                                    <td className="test">{Math.round(this.state[`data${i}`]?.Tele_Cone_Total_Max * 100) / 100}</td>
                                </React.Fragment>
                            ))}
                        </tr>
                        <tr>
                            <td className="colorbg"></td>
                            <td className="colorbg">Cone High</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <React.Fragment key={i}>
                                    <td className="nobgcolor">{Math.round(this.state[`data${i}`]?.Tele_Cone_High_Average * 100) / 100}</td>
                                    <td className="test">{Math.round(this.state[`data${i}`]?.Tele_Cone_High_Max * 100) / 100}</td>
                                </React.Fragment>
                            ))}
                        </tr>
                        <tr>
                            <td className="colorbg"></td>
                            <td className="colorbg">Cone Mid</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <React.Fragment key={i}>
                                    <td className="nobgcolor">{Math.round(this.state[`data${i}`]?.Tele_Cone_Mid_Average * 100) / 100}</td>
                                    <td className="test">{Math.round(this.state[`data${i}`]?.Tele_Cone_Mid_Max * 100) / 100}</td>
                                </React.Fragment>
                            ))}
                        </tr>
                        <tr>
                            <td className="colorbg"></td>
                            <td className="colorbg">Cone Low</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <React.Fragment key={i}>
                                    <td className="conelow">{Math.round(this.state[`data${i}`]?.Tele_Cone_Low_Average * 100) / 100}</td>
                                    <td className="colorbg2">{Math.round(this.state[`data${i}`]?.Tele_Cone_Low_Max * 100) / 100}</td>
                                </React.Fragment>
                            ))}
                        </tr>
                        <tr>
                            <td rowspan="2" className="colorbg1">Endgame</td>
                            <td colspan="2" className="colorbg">% Docked</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <td className="test" colspan="2" key={i} style={{ backgroundColor: colorScale0(Math.round(this.state[`data${i}`]?.End_Dock_Frequency * 10000) / 100), }}>{Math.round(this.state[`data${i}`]?.End_Dock_Frequency * 10000) / 100}%</td>
                            ))}
                        </tr>
                        <tr>
                            <td colspan="2" className="colorbg">% Balanced</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <td className="test" colspan="2" key={i}>{Math.round(this.state[`data${i}`]?.End_Balance_Frequency * 10000) / 100}%</td>
                            ))}
                        </tr>
                    </table>
                    <PopupGfg data={this.state.data} />

                    {/* <General selected={this.state.selected === 'general'} /> */}

                    {/* <SavePage selected={this.state.selected === 'save-page'} QRCode={this.state.QRCode} /> */}
                </form>
            </main>
        );
    }

}

export default App;