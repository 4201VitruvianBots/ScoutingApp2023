import './App.css';
import { scaleLinear } from 'd3-scale';
import { SearchBar, Title, PopupGfg, options } from "./Pages";
import React from "react";
import QRCode from 'react-qr-code';

function calc_domain(min, max) {
    const max_bad = 0.1; // bottom 10%
    const min_good = 0.85; // top 15%

    return [
        min,
        min + max_bad * (max - min),
        min + min_good * (max - min),
        max
    ];
}
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
            data6: null,
            maxdata: null, //The thing holding all the max scoring team data numbers
            mindata: null //The thing holding the lowest scoring team data numbers
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

    async fetchData() {
        const maxurl = `http://${process.env.REACT_APP_BACKEND_IP}/data/analysis/max`;
        const minurl = `http://${process.env.REACT_APP_BACKEND_IP}/data/analysis/min`;
        try {
            const responseMax = await fetch(maxurl, { crossDomain: true, method: 'GET' });
            if (responseMax.ok) {
                const dataMax = await responseMax.json();
                this.setState({ maxdata: dataMax })
            }
        } catch (error) {
        }
        try {
            const responseMin = await fetch(minurl, { crossDomain: true, method: 'GET' });
            if (responseMin.ok) {
                const dataMin = await responseMin.json();
                this.setState({ mindata: dataMin })
            }
        } catch (error) {
        }
    }
    componentDidMount() {
        // const fetchData = async () => {
        //     const maxurl = `http://${process.env.REACT_APP_BACKEND_IP}/data/analysis/max`;
        //     const minurl = `http://${process.env.REACT_APP_BACKEND_IP}/data/analysis/min`;
        //     try {
        //         const responseMax = await fetch(maxurl, {crossDomain: true, method: 'GET'});
        //         if (responseMax.ok) {
        //             const dataMax = await responseMax.json();
        //             this.setState({ maxdata: dataMax})
        //         }
        //     } catch (error) {
        //     }
        //     try {
        //         const responseMin = await fetch(minurl, {crossDomain: true, method: 'GET'});
        //         if (responseMin.ok) {
        //             const dataMin = await responseMin.json();
        //             this.setState({ mindata: dataMin})
        //         }
        //     } catch (error) {
        //     }
        // }
        if (this.state.maxdata === null) {
            this.fetchData()
        }
        const dataInterval = setInterval(this.fetchData, 180000);

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
            clearInterval(dataInterval);
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
        if (prevState.selectedOption2.value !== this.state.selectedOption2.value) {
            const response = await fetch(`http://${process.env.REACT_APP_BACKEND_IP}/data/analysis/team/` + this.state.selectedOption2.value, { crossDomain: true, method: 'GET' });
            if (response.status === 404) {
                this.setState({ data2: null });
            } else {
                const testData = await response.json();
                this.setState({ data2: testData });
            }
        }
        if (prevState.selectedOption3.value !== this.state.selectedOption3.value) {
            const response = await fetch(`http://${process.env.REACT_APP_BACKEND_IP}/data/analysis/team/` + this.state.selectedOption3.value, { crossDomain: true, method: 'GET' });
            if (response.status === 404) {
                this.setState({ data3: null });
            } else {
                this.setState({ data3: await response.json() });
            }
        }
        if (prevState.selectedOption4.value !== this.state.selectedOption4.value) {
            const response = await fetch(`http://${process.env.REACT_APP_BACKEND_IP}/data/analysis/team/` + this.state.selectedOption4.value, { crossDomain: true, method: 'GET' });
            if (response.status === 404) {
                this.setState({ data4: null });
            } else {
                this.setState({ data4: await response.json() });
            }
        }
        if (prevState.selectedOption5.value !== this.state.selectedOption5.value) {
            const response = await fetch(`http://${process.env.REACT_APP_BACKEND_IP}/data/analysis/team/` + this.state.selectedOption5.value, { crossDomain: true, method: 'GET' });
            if (response.status === 404) {
                this.setState({ data5: null });
            } else {
                this.setState({ data5: await response.json() });
            }
        }
        if (prevState.selectedOption6.value !== this.state.selectedOption6.value) {
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
        let max = this.state.maxdata
        let min = this.state.mindata
        let ColorRange = ['#EF5850', '#FFFFFF', '#FFFFFF', '#52E592']

        let AutoAverageMax = max?.Auto_Total_Average
        let AutoAverageMin = min?.Auto_Total_Average
        let AutoMaxMax = max?.Auto_Total_Max
        let AutoMaxMin = min?.Auto_Total_Max
        let AutoHighAverageMax = max?.Auto_High_Average
        let AutoHighAverageMin = min?.Auto_High_Average
        let AutoHighMaxMax = max?.Auto_High_Max
        let AutoHighMaxMin = min?.Auto_High_Max
        let AutoMidAverageMax = max?.Auto_Mid_Average
        let AutoMidAverageMin = min?.Auto_Mid_Average
        let AutoMidMaxMax = max?.Auto_Mid_Max
        let AutoMidMaxMin = min?.Auto_Mid_Max
        let AutoLowAverageMax = max?.Auto_Low_Average
        let AutoLowAverageMin = min?.Auto_Low_Average
        let AutoLowMaxMax = max?.Auto_Low_Max
        let AutoLowMaxMin = min?.Auto_Low_Max
        let AutoBalanceFrequencyMax = (max?.Auto_Balance_Frequency) * 100
        let AutoBalanceFrequencyMin = (min?.Auto_Balance_Frequency) * 100
        let AutoDockFrequencyMax = (max?.Auto_Dock_Frequency) * 100
        let AutoDockFrequencyMin = (min?.Auto_Dock_Frequency) * 100
        let TeleTotalAverageMax = max?.Tele_Pieces_Total_Average
        let TeleTotalAverageMin = min?.Tele_Pieces_Total_Average
        let TeleTotalMaxMax = max?.Tele_Pieces_Total_Max
        let TeleTotalMaxMin = min?.Tele_Pieces_Total_Max
        let TeleHighAverageMax = max?.Tele_Pieces_High_Average
        let TeleHighAverageMin = min?.Tele_Pieces_High_Average
        let TeleHighMaxMax = max?.Tele_Pieces_High_Max
        let TeleHighMaxMin = min?.Tele_Pieces_High_Max
        let TeleMidAverageMax = max?.Tele_Pieces_Mid_Average
        let TeleMidAverageMin = min?.Tele_Pieces_Mid_Average
        let TeleMidMaxMax = max?.Tele_Pieces_Mid_Max
        let TeleMidMaxMin = min?.Tele_Pieces_Mid_Max
        let TeleLowAverageMax = max?.Tele_Pieces_Low_Average
        let TeleLowAverageMin = min?.Tele_Pieces_Low_Average
        let TeleLowMaxMax = max?.Tele_Pieces_Low_Max
        let TeleLowMaxMin = min?.Tele_Pieces_Low_Max
        let TeleTotalCubeAverageMax = max?.Tele_Cube_Total_Average
        let TeleTotalCubeAverageMin = min?.Tele_Cube_Total_Average
        let TeleTotalCubeMaxMax = max?.Tele_Cube_Total_Max
        let TeleTotalCubeMaxMin = min?.Tele_Cube_Total_Max
        let TeleCubeHighAverageMax = max?.Tele_Cube_High_Average
        let TeleCubeHighAverageMin = min?.Tele_Cube_High_Average
        let TeleCubeHighMaxMax = max?.Tele_Cube_High_Max
        let TeleCubeHighMaxMin = min?.Tele_Cube_High_Max
        let TeleCubeMidAverageMax = max?.Tele_Cube_Mid_Average
        let TeleCubeMidAverageMin = min?.Tele_Cube_Mid_Average
        let TeleCubeMidMaxMax = max?.Tele_Cube_Mid_Max
        let TeleCubeMidMaxMin = min?.Tele_Cube_Mid_Max
        let TeleCubeLowAverageMax = max?.Tele_Cube_Low_Average
        let TeleCubeLowAverageMin = min?.Tele_Cube_Low_Average
        let TeleCubeLowMaxMax = max?.Tele_Cube_Low_Max
        let TeleCubeLowMaxMin = min?.Tele_Cube_Low_Max
        let TeleTotalConeAverageMax = max?.Tele_Cone_Total_Average
        let TeleTotalConeAverageMin = min?.Tele_Cone_Total_Average
        let TeleTotalConeMaxMax = max?.Tele_Cone_Total_Max
        let TeleTotalConeMaxMin = min?.Tele_Cone_Total_Max
        let TeleConeHighAverageMax = max?.Tele_Cone_High_Average
        let TeleConeHighAverageMin = min?.Tele_Cone_High_Average
        let TeleConeHighMaxMax = max?.Tele_Cone_High_Max
        let TeleConeHighMaxMin = min?.Tele_Cone_High_Max
        let TeleConeMidAverageMax = max?.Tele_Cone_Mid_Average
        let TeleConeMidAverageMin = min?.Tele_Cone_Mid_Average
        let TeleConeMidMaxMax = max?.Tele_Cone_Mid_Max
        let TeleConeMidMaxMin = min?.Tele_Cone_Mid_Max
        let TeleConeLowAverageMax = max?.Tele_Cone_Low_Average
        let TeleConeLowAverageMin = min?.Tele_Cone_Low_Average
        let TeleConeLowMaxMax = max?.Tele_Cone_Low_Max
        let TeleConeLowMaxMin = min?.Tele_Cone_Low_Max
        let DockedPercentMax = (max?.End_Dock_Frequency) * 100
        let DockedPercentMin = (min?.End_Dock_Frequency) * 100
        let BalancePercentMax = (max?.End_Balance_Frequency) * 100
        let BalancePercentMin = (min?.End_Balance_Frequency) * 100

        let AutoTotalPieceAverageColor = scaleLinear().domain(calc_domain(AutoAverageMin, AutoAverageMax)).range(ColorRange);
        let AutoTotalPieceMaxColor = scaleLinear().domain(calc_domain(AutoMaxMin, AutoMaxMax)).range(ColorRange);
        let AutoHighAverageColor = scaleLinear().domain(calc_domain(AutoHighAverageMin, AutoHighAverageMax)).range(ColorRange);
        let AutoHighMaxColor = scaleLinear().domain(calc_domain(AutoHighMaxMin, AutoHighMaxMax)).range(ColorRange)
        let AutoMidAverageColor = scaleLinear().domain(calc_domain(AutoMidAverageMin, AutoMidAverageMax)).range(ColorRange);
        let AutoMidMaxColor = scaleLinear().domain(calc_domain(AutoMidMaxMin, AutoMidMaxMax)).range(ColorRange);
        let AutoLowAverageColor = scaleLinear().domain(calc_domain(AutoLowAverageMin, AutoLowAverageMax)).range(ColorRange);
        let AutoLowMaxColor = scaleLinear().domain(calc_domain(AutoLowMaxMin, AutoLowMaxMax)).range(ColorRange);
        let AutoBalanceFrequencyColor = scaleLinear().domain(calc_domain(AutoBalanceFrequencyMin, AutoBalanceFrequencyMax)).range(ColorRange);
        let AutoDockFrequencyColor = scaleLinear().domain(calc_domain(AutoDockFrequencyMin, AutoDockFrequencyMax)).range(ColorRange);
        let TeleTotalAverageColor = scaleLinear().domain(calc_domain(TeleTotalAverageMin, TeleTotalAverageMax)).range(ColorRange);
        let TeleTotalMaxColor = scaleLinear().domain(calc_domain(TeleTotalMaxMin, TeleTotalMaxMax)).range(ColorRange);
        let TeleHighAverageColor = scaleLinear().domain(calc_domain(TeleHighAverageMin, TeleHighAverageMax)).range(ColorRange);
        let TeleHighMaxColor = scaleLinear().domain(calc_domain(TeleHighMaxMin, TeleHighMaxMax)).range(ColorRange);
        let TeleMidAverageColor = scaleLinear().domain(calc_domain(TeleMidAverageMin, TeleMidAverageMax)).range(ColorRange);
        let TeleMidMaxColor = scaleLinear().domain(calc_domain(TeleMidMaxMin, TeleMidMaxMax)).range(ColorRange);
        let TeleLowAverageColor = scaleLinear().domain(calc_domain(TeleLowAverageMin, TeleLowAverageMax)).range(ColorRange);
        let TeleLowMaxColor = scaleLinear().domain(calc_domain(TeleLowMaxMin, TeleLowMaxMax)).range(ColorRange);
        let TeleTotalCubeAverageColor = scaleLinear().domain(calc_domain(TeleTotalCubeAverageMin, TeleTotalCubeAverageMax)).range(ColorRange);
        let TeleTotalCubeMaxColor = scaleLinear().domain(calc_domain(TeleTotalCubeMaxMin, TeleTotalCubeMaxMax)).range(ColorRange);
        let TeleCubeHighAverageColor = scaleLinear().domain(calc_domain(TeleCubeHighAverageMin, TeleCubeHighAverageMax)).range(ColorRange);
        let TeleCubeHighMaxColor = scaleLinear().domain(calc_domain(TeleCubeHighMaxMin, TeleCubeHighMaxMax)).range(ColorRange);
        let TeleCubeMidAverageColor = scaleLinear().domain(calc_domain(TeleCubeMidAverageMin, TeleCubeMidAverageMax)).range(ColorRange);
        let TeleCubeMidMaxColor = scaleLinear().domain(calc_domain(TeleCubeMidMaxMin, TeleCubeMidMaxMax)).range(ColorRange);
        let TeleCubeLowAverageColor = scaleLinear().domain(calc_domain(TeleCubeLowAverageMin, TeleCubeLowAverageMax)).range(ColorRange);
        let TeleCubeLowMaxColor = scaleLinear().domain(calc_domain(TeleCubeLowMaxMin, TeleCubeLowMaxMax)).range(ColorRange);
        let TeleTotalConeAverageColor = scaleLinear().domain(calc_domain(TeleTotalConeAverageMin, TeleTotalConeAverageMax)).range(ColorRange);
        let TeleTotalConeMaxColor = scaleLinear().domain(calc_domain(TeleTotalConeMaxMin, TeleTotalConeMaxMax)).range(ColorRange);
        let TeleConeHighAverageColor = scaleLinear().domain(calc_domain(TeleConeHighAverageMin, TeleConeHighAverageMax)).range(ColorRange);
        let TeleConeHighMaxColor = scaleLinear().domain(calc_domain(TeleConeHighMaxMin, TeleConeHighMaxMax)).range(ColorRange);
        let TeleConeMidAverageColor = scaleLinear().domain(calc_domain(TeleConeMidAverageMin, TeleConeMidAverageMax)).range(ColorRange);
        let TeleConeMidMaxColor = scaleLinear().domain(calc_domain(TeleConeMidMaxMin, TeleConeMidMaxMax)).range(ColorRange);
        let TeleConeLowAverageColor = scaleLinear().domain(calc_domain(TeleConeLowAverageMin, TeleConeLowAverageMax)).range(ColorRange);
        let TeleConeLowMaxColor = scaleLinear().domain(calc_domain(TeleConeLowMaxMin, TeleConeLowMaxMax)).range(ColorRange);
        let DockedPercentColor = scaleLinear().domain(calc_domain(DockedPercentMin, DockedPercentMax)).range(ColorRange);
        let BalancedPercentColor = scaleLinear().domain(calc_domain(BalancePercentMin, BalancePercentMax)).range(ColorRange);
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
                            <td colspan="3" className="colorbg1">Defense Rating</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <td key={i} colspan="2" className="colorbg2">{Math.round(this.state[`data${i}`]?.Average_Defense * 100) / 100}</td>
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
                            <td rowspan="6" className="colorbg1">Auto</td>
                            <td colspan="2" className="colorbg">Total Game Pieces</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <React.Fragment key={i}>
                                    <td className="nobgcolor" style={{ backgroundColor: AutoTotalPieceAverageColor(Math.round(this.state[`data${i}`]?.Auto_Total_Average * 100) / 100), }}>{Math.round(this.state[`data${i}`]?.Auto_Total_Average * 100) / 100}</td>
                                    <td className="test" style={{ backgroundColor: AutoTotalPieceMaxColor(Math.round(this.state[`data${i}`]?.Auto_Total_Max * 100) / 100) }}>{Math.round(this.state[`data${i}`]?.Auto_Total_Max * 100) / 100}</td>
                                </React.Fragment>
                            ))}
                        </tr>
                        <tr>
                            <td className="colorbg"></td>
                            <td className="colorbg">Game Pieces High</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <React.Fragment key={i}>
                                    <td className="nobgcolor" style={{ backgroundColor: AutoHighAverageColor(Math.round(this.state[`data${i}`]?.Auto_High_Average * 100) / 100) }}>{Math.round(this.state[`data${i}`]?.Auto_High_Average * 100) / 100}</td>
                                    <td className="test" style={{ backgroundColor: AutoHighMaxColor(Math.round(this.state[`data${i}`]?.Auto_High_Max * 100) / 100) }}>{Math.round(this.state[`data${i}`]?.Auto_High_Max * 100) / 100}</td>
                                </React.Fragment>
                            ))}
                        </tr>
                        <tr>
                            <td className="colorbg"></td>
                            <td className="colorbg">Game Pieces Mid</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <>
                                    <td className="nobgcolor" style={{ backgroundColor: AutoMidAverageColor(Math.round(this.state[`data${i}`]?.Auto_Mid_Average * 100) / 100) }}>{Math.round(this.state[`data${i}`]?.Auto_Mid_Average * 100) / 100}</td>
                                    <td className="test" style={{ backgroundColor: AutoMidMaxColor(Math.round(this.state[`data${i}`]?.Auto_Mid_Max * 100) / 100) }}>{Math.round(this.state[`data${i}`]?.Auto_Mid_Max * 100) / 100}</td>
                                </>
                            ))}
                        </tr>
                        <tr>
                            <td className="colorbg"></td>
                            <td className="colorbg">Game Pieces Low</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <>
                                    <td className="nobgcolor" style={{ backgroundColor: AutoLowAverageColor(Math.round(this.state[`data${i}`]?.Auto_Low_Average * 100) / 100) }}>{Math.round(this.state[`data${i}`]?.Auto_Low_Average * 100) / 100}</td>
                                    <td className="test" style={{ backgroundColor: AutoLowMaxColor(Math.round(this.state[`data${i}`]?.Auto_Low_Max * 100) / 100) }}>{Math.round(this.state[`data${i}`]?.Auto_Low_Max * 100) / 100}</td>
                                </>
                            ))}
                        </tr>
                        <tr>  {/* different */}
                            <td colspan="2" className="colorbg">% Docked</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <td className="test" colspan="2" key={i} style={{ backgroundColor: AutoDockFrequencyColor(Math.round(this.state[`data${i}`]?.Auto_Dock_Frequency * 10000) / 100) }}>{Math.round(this.state[`data${i}`]?.Auto_Dock_Frequency * 10000) / 100}%</td>
                            ))}
                        </tr>
                        <tr> {/* different */}
                            <td colspan="2" className="colorbg">% Balanced</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <td className="test" colspan="2" key={i} style={{ backgroundColor: AutoBalanceFrequencyColor(Math.round(this.state[`data${i}`]?.Auto_Balance_Frequency * 10000) / 100) }}>{Math.round(this.state[`data${i}`]?.Auto_Balance_Frequency * 10000) / 100}%</td>
                            ))}
                        </tr>
                        <tr>
                            <td rowspan="12" className="colorbg1">Tele-Op</td>
                            <td colspan="2" className="colorbg">Total Game Pieces</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <React.Fragment key={i}>
                                    <td className="nobgcolor" style={{ backgroundColor: TeleTotalAverageColor(Math.round(this.state[`data${i}`]?.Tele_Pieces_Total_Average * 100) / 100) }}>{Math.round(this.state[`data${i}`]?.Tele_Pieces_Total_Average * 100) / 100}</td>
                                    <td className="test" style={{ backgroundColor: TeleTotalMaxColor(Math.round(this.state[`data${i}`]?.Tele_Pieces_Total_Max * 100) / 100) }}>{Math.round(this.state[`data${i}`]?.Tele_Pieces_Total_Max * 100) / 100}</td>
                                </React.Fragment>
                            ))}
                        </tr>
                        <tr>
                            <td className="colorbg"></td>
                            <td className="colorbg">Game Pieces High</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <React.Fragment key={i}>
                                    <td className="nobgcolor" style={{ backgroundColor: TeleHighAverageColor(Math.round(this.state[`data${i}`]?.Tele_Pieces_High_Average * 100) / 100) }}>{Math.round(this.state[`data${i}`]?.Tele_Pieces_High_Average * 100) / 100}</td>
                                    <td className="test" style={{ backgroundColor: TeleHighMaxColor(Math.round(this.state[`data${i}`]?.Tele_Pieces_High_Max * 100) / 100) }}>{Math.round(this.state[`data${i}`]?.Tele_Pieces_High_Max * 100) / 100}</td>
                                </React.Fragment>
                            ))}
                        </tr>
                        <tr>
                            <td className="colorbg"></td>
                            <td className="colorbg">Game Pieces Mid</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <React.Fragment key={i}>
                                    <td className="nobgcolor" style={{ backgroundColor: TeleMidAverageColor(Math.round(this.state[`data${i}`]?.Tele_Pieces_Mid_Average * 100) / 100) }}>{Math.round(this.state[`data${i}`]?.Tele_Pieces_Mid_Average * 100) / 100}</td>
                                    <td className="test" style={{ backgroundColor: TeleMidMaxColor(Math.round(this.state[`data${i}`]?.Tele_Pieces_Mid_Max * 100) / 100) }}>{Math.round(this.state[`data${i}`]?.Tele_Pieces_Mid_Max * 100) / 100}</td>
                                </React.Fragment>
                            ))}
                        </tr>
                        <tr>
                            <td className="colorbg"></td>
                            <td className="colorbg">Game Pieces Low</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <React.Fragment key={i}>
                                    <td className="nobgcolor" style={{ backgroundColor: TeleLowAverageColor(Math.round(this.state[`data${i}`]?.Tele_Pieces_Low_Average * 100) / 100) }}>{Math.round(this.state[`data${i}`]?.Tele_Pieces_Low_Average * 100) / 100}</td>
                                    <td className="test" style={{ backgroundColor: TeleLowMaxColor(Math.round(this.state[`data${i}`]?.Tele_Pieces_Low_Max * 100) / 100) }}>{Math.round(this.state[`data${i}`]?.Tele_Pieces_Low_Max * 100) / 100}</td>
                                </React.Fragment>
                            ))}
                        </tr>
                        <tr>
                            <td colspan="2" className="colorbg">Total Cubes Scored</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <React.Fragment key={i}>
                                    <td className="nobgcolor" style={{ backgroundColor: TeleTotalCubeAverageColor(Math.round(this.state[`data${i}`]?.Tele_Cube_Total_Average * 100) / 100) }}>{Math.round(this.state[`data${i}`]?.Tele_Cube_Total_Average * 100) / 100}</td>
                                    <td className="test" style={{ backgroundColor: TeleTotalCubeMaxColor(Math.round(this.state[`data${i}`]?.Tele_Cube_Total_Max * 100) / 100) }}>{Math.round(this.state[`data${i}`]?.Tele_Cube_Total_Max * 100) / 100}</td>
                                </React.Fragment>
                            ))}
                        </tr>
                        <tr>
                            <td className="colorbg"></td>
                            <td className="colorbg">Cube High</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <React.Fragment key={i}>
                                    <td className="nobgcolor" style={{ backgroundColor: TeleCubeHighAverageColor(Math.round(this.state[`data${i}`]?.Tele_Cube_High_Average * 100) / 100) }}>{Math.round(this.state[`data${i}`]?.Tele_Cube_High_Average * 100) / 100}</td>
                                    <td className="test" style={{ backgroundColor: TeleCubeHighMaxColor(Math.round(this.state[`data${i}`]?.Tele_Cube_High_Max * 100) / 100) }}>{Math.round(this.state[`data${i}`]?.Tele_Cube_High_Max * 100) / 100}</td>
                                </React.Fragment>
                            ))}
                        </tr>
                        <tr>
                            <td className="colorbg"></td>
                            <td className="colorbg">Cube Mid</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <React.Fragment key={i}>
                                    <td className="nobgcolor" style={{ backgroundColor: TeleCubeMidAverageColor(Math.round(this.state[`data${i}`]?.Tele_Cube_Mid_Average * 100) / 100) }}>{Math.round(this.state[`data${i}`]?.Tele_Cube_Mid_Average * 100) / 100}</td>
                                    <td className="test" style={{ backgroundColor: TeleCubeMidMaxColor(Math.round(this.state[`data${i}`]?.Tele_Cube_Mid_Max * 100) / 100) }}>{Math.round(this.state[`data${i}`]?.Tele_Cube_Mid_Max * 100) / 100}</td>
                                </React.Fragment>
                            ))}
                        </tr>
                        <tr>
                            <td className="colorbg"></td>
                            <td className="colorbg">Cube Low</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <React.Fragment key={i}>
                                    <td className="nobgcolor" style={{ backgroundColor: TeleCubeLowAverageColor(Math.round(this.state[`data${i}`]?.Tele_Cube_Low_Average * 100) / 100) }}>{Math.round(this.state[`data${i}`]?.Tele_Cube_Low_Average * 100) / 100}</td>
                                    <td className="test" style={{ backgroundColor: TeleCubeLowMaxColor(Math.round(this.state[`data${i}`]?.Tele_Cube_Low_Max * 100) / 100) }}>{Math.round(this.state[`data${i}`]?.Tele_Cube_Low_Max * 100) / 100}</td>
                                </React.Fragment>
                            ))}
                        </tr>
                        <tr>
                            <td colspan="2" className="colorbg">Total Cones Scored</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <React.Fragment key={i}>
                                    <td className="nobgcolor" style={{ backgroundColor: TeleTotalConeAverageColor(Math.round(this.state[`data${i}`]?.Tele_Cone_Total_Average * 100) / 100) }}>{Math.round(this.state[`data${i}`]?.Tele_Cone_Total_Average * 100) / 100}</td>
                                    <td className="test" style={{ backgroundColor: TeleTotalConeMaxColor(Math.round(this.state[`data${i}`]?.Tele_Cone_Total_Max * 100) / 100) }}>{Math.round(this.state[`data${i}`]?.Tele_Cone_Total_Max * 100) / 100}</td>
                                </React.Fragment>
                            ))}
                        </tr>
                        <tr>
                            <td className="colorbg"></td>
                            <td className="colorbg">Cone High</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <React.Fragment key={i}>
                                    <td className="nobgcolor" style={{ backgroundColor: TeleConeHighAverageColor(Math.round(this.state[`data${i}`]?.Tele_Cone_High_Average * 100) / 100) }}>{Math.round(this.state[`data${i}`]?.Tele_Cone_High_Average * 100) / 100}</td>
                                    <td className="test" style={{ backgroundColor: TeleConeHighMaxColor(Math.round(this.state[`data${i}`]?.Tele_Cone_High_Max * 100) / 100) }}>{Math.round(this.state[`data${i}`]?.Tele_Cone_High_Max * 100) / 100}</td>
                                </React.Fragment>
                            ))}
                        </tr>
                        <tr>
                            <td className="colorbg"></td>
                            <td className="colorbg">Cone Mid</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <React.Fragment key={i}>
                                    <td className="nobgcolor" style={{ backgroundColor: TeleConeMidAverageColor(Math.round(this.state[`data${i}`]?.Tele_Cone_Mid_Average * 100) / 100) }}>{Math.round(this.state[`data${i}`]?.Tele_Cone_Mid_Average * 100) / 100}</td>
                                    <td className="test" style={{ backgroundColor: TeleConeMidMaxColor(Math.round(this.state[`data${i}`]?.Tele_Cone_Mid_Max * 100) / 100) }}>{Math.round(this.state[`data${i}`]?.Tele_Cone_Mid_Max * 100) / 100}</td>
                                </React.Fragment>
                            ))}
                        </tr>
                        <tr>
                            <td className="colorbg"></td>
                            <td className="colorbg">Cone Low</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <React.Fragment key={i}>
                                    <td className="conelow" style={{ backgroundColor: TeleConeLowAverageColor(Math.round(this.state[`data${i}`]?.Tele_Cone_Low_Average * 100) / 100) }}>{Math.round(this.state[`data${i}`]?.Tele_Cone_Low_Average * 100) / 100}</td>
                                    <td className="colorbg2" style={{ backgroundColor: TeleConeLowMaxColor(Math.round(this.state[`data${i}`]?.Tele_Cone_Low_Max * 100) / 100) }}>{Math.round(this.state[`data${i}`]?.Tele_Cone_Low_Max * 100) / 100}</td>
                                </React.Fragment>
                            ))}
                        </tr>
                        <tr>
                            <td rowspan="2" className="colorbg1">Endgame</td>
                            <td colspan="2" className="colorbg">% Docked</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <td className="test" colspan="2" key={i} style={{ backgroundColor: DockedPercentColor(Math.round(this.state[`data${i}`]?.End_Dock_Frequency * 10000) / 100), }}>{Math.round(this.state[`data${i}`]?.End_Dock_Frequency * 10000) / 100}%</td>
                            ))}
                        </tr>
                        <tr>
                            <td colspan="2" className="colorbg">% Balanced</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <td className="test" colspan="2" key={i} style={{ backgroundColor: BalancedPercentColor(Math.round(this.state[`data${i}`]?.End_Balance_Frequency * 10000) / 100), }}>{Math.round(this.state[`data${i}`]?.End_Balance_Frequency * 10000) / 100}%</td>
                            ))}
                        </tr>
                        <tr>
                            <td colspan="3" className="colorbg1">Grid Filled Frequency</td>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <td key={i} colspan="2" className="colorbg2">{Math.round(this.state[`data${i}`]?.Grid_Filled_Frequency * 10000) / 100}%</td>
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
