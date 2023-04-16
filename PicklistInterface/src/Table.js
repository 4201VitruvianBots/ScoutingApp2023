import { useEffect, useMemo, useContext } from "react";
import Select from 'react-select';
import { SimpleTableData, WeightedTableData, BlankTableData } from './Data.js';
import { SimplePopup, WeightedPopup, BlankPopup } from "./Popup.js";
import Popup from "reactjs-popup";
import { TeamOptionsContext } from "./App.js";

/**
 * 
 * @param {{entries: {team: number, value: number | string}[]}} param0
 * @returns 
 */
function GeneratedTeamTable({ entries }) {
    return (<tbody>
        {entries && entries.map((e, i) => (
            <tr key={i}>
                <td>{e.team}</td>
                <td>{e.value}</td>
            </tr>
        ))}
    </tbody>);
}

/**
 * 
 * @param {{entries: number[]}} param0 
 * @returns 
 */
function ManualTeamTable({ entries, setEntries }) {
    const teamOptions = useContext(TeamOptionsContext);

    const handleEntryChange = (index) => (
        (option) => setEntries(entries.map((e, i) => i === index ? option.value : e))
    );

    const handleAddEntry = (option) => {
        setEntries(entries.concat([option.value]));
    }

    const deleteEntry = (index) => (
        () => setEntries(entries.filter((_, i) => i !== index))
    );

    return (<tbody>
        {entries && entries.map((e, i) => (
            <tr key={i}>
                <td>
                    <Select
                        options={teamOptions}
                        value={teamOptions.find(option => e === option.value)}
                        onChange={handleEntryChange(i)}
                    />
                    <button onClick={deleteEntry(i)}>X</button>
                </td>
            </tr>
        ))}
        <tr>
            <td>
                <Select
                    options={teamOptions}
                    value={null}
                    onChange={handleAddEntry}
                />
            </td>
        </tr>
    </tbody>);
}

/**
 * 
 * @param {{data: SimpleTableData, setData: (data: SimpleTableData) => void}} param0 
 * @returns 
 */
function SimpleTable({ data, setData, deleteTable, robotData }) {
    const { name, entries, statistic, descending } = data;

    const sort = () => {
        const newEntries = Object.entries(robotData)
            .map(([team_number, stats]) => ({ team: team_number, value: stats[statistic] }))
            .sort(descending
                ? (a, b) => b.value - a.value
                : (a, b) => a.value - b.value
            );
        // TODO this is temporary testing data
        setData(new SimpleTableData(name, newEntries, statistic, descending))
    }

    useEffect(sort,
        [name, statistic, descending, robotData]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <table>
            <thead>
                <tr>
                    <th className="tableTitle" colSpan={2}>
                        {name}
                        <Popup trigger={<button>Edit</button>} modal nested>
                            {close => (<SimplePopup currentData={data} onSubmit={setData} onDelete={deleteTable} close={close} isEditing={true} />)}
                        </Popup>
                    </th>
                </tr>
                <tr>
                    <td><button>Reset</button></td>
                    <td><button>Apply</button></td>
                </tr>
            </thead>
            <GeneratedTeamTable entries={entries} />
        </table>
    );
}

/**
 * 
 * @param {{data: WeightedTableData, setData: (data: WeightedTableData) => void}} param0 
 * @returns 
 */
function WeightedTable({ data, setData, deleteTable, robotData }) {
    const { name, entries, factors } = data;

    const mins = useMemo(
        () => Object.fromEntries(factors.map(({ statistic }) => [statistic, Object.values(robotData).reduce((min, current) => Math.min(min, current[statistic]), Number.MAX_VALUE)])),
        [factors, robotData]
    );

    const maxes = useMemo(
        () => Object.fromEntries(factors.map(({ statistic }) => [statistic, Object.values(robotData).reduce((max, current) => Math.max(max, current[statistic]), 0)])),
        [factors, robotData]
    );

    const sort = () => {
        const newEntries = Object.entries(robotData)
            .map(([team_number, stats]) => ({
                team: team_number,
                value: factors
                    .map(({ statistic, weight }) => weight *
                        (stats[statistic] - mins[statistic]) /
                        (maxes[statistic] - mins[statistic]))
                    .reduce((sum, current) => sum + current, 0)
            }))
            .sort((a, b) => b.value - a.value);
        setData(new WeightedTableData(name, newEntries, factors))
    }

    useEffect(sort,
        [name, factors, robotData]) // eslint-disable-line react-hooks/exhaustive-deps

    return (<table>
        <thead>
            <tr>
                <th className="tableTitle" colSpan={2}>
                    {name}
                    <Popup trigger={<button>Edit</button>} modal nested>
                        {close => (<WeightedPopup currentData={data} onSubmit={setData} onDelete={deleteTable} close={close} isEditing={true} />)}
                    </Popup>
                </th>
            </tr>
            <tr>
                <td><button>Reset</button></td>
                <td><button>Apply</button></td>
            </tr>
        </thead>
        <GeneratedTeamTable entries={entries} />
    </table>);
}

/**
 * 
 * @param {{data: BlankTableData, setData: (data: BlankTableData) => void}} param0 
 * @returns 
 */
function BlankTable({ data, setData, deleteTable }) {
    const { name, entries } = data;

    const setEntries = (newEntries) => {
        setData(new BlankTableData(name, newEntries))
    };

    return (<table>
        <thead>
            <tr>
                <th className="tableTitle" >
                    {name}
                    <Popup trigger={<button>Edit</button>} modal nested>
                        {close => (<BlankPopup currentData={data} onSubmit={setData} onDelete={deleteTable} close={close} isEditing={true} />)}
                    </Popup>
                </th>
            </tr>
            <tr>
                <td><button>Apply</button></td>
            </tr>
        </thead>
        <ManualTeamTable entries={entries} setEntries={setEntries} />
    </table>);
}

/**
 * 
 * @param {{entries: number[], setEntries: (value: number[]) => void}} param0 
 * @returns 
 */
function DNPTable({ entries, setEntries }) {
    return (<table>
        <thead>
            <tr>
                <th>DNP List</th>
            </tr>
        </thead>
        <ManualTeamTable entries={entries} setEntries={setEntries} />
    </table>);
}

/**
 * 
 * @param {{entries: number[], setEntries: (value: number[]) => void}} param0 
 * @returns 
 */
function FinalTable({ entries, setEntries }) {
    return (<table>
        <thead>
            <tr>
                <th>Final Pick List</th>
            </tr>
        </thead>
        <ManualTeamTable entries={entries} setEntries={setEntries} />
    </table>);
}

export { SimpleTable, WeightedTable, BlankTable, FinalTable, DNPTable };
