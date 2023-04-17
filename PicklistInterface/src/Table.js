import { useEffect, useMemo, useContext } from "react";
import Select from 'react-select';
import { SimpleTableData, WeightedTableData, BlankTableData } from './Data.js';
import { SimplePopup, WeightedPopup, BlankPopup } from "./Popup.js";
import Popup from "reactjs-popup";
import { ListContext, OptionsContext } from "./App.js";
import Sortable from "./Sortable.js";

/**
 * 
 * @param {{entries: {team: number, value: number | string}[]}} param0
 * @returns 
 */
function GeneratedTeamTable({ entries }) {
    const { DNP: DNPList } = useContext(ListContext);

    return (<tbody>
        {entries && entries.map((e, i) => (
            <tr key={i}>
                <td className={DNPList.includes(e.team) ? 'dnp' : ''}>{e.team}</td>
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
    const { teams: teamOptions } = useContext(OptionsContext);
    const { DNP: DNPList } = useContext(ListContext);

    const handleEntryChange = (index) => (
        (option) => {
            if (!entries.includes(option.value))
                setEntries(entries.map((e, i) => i === index ? option.value : e))
        }
    );

    const handleAddEntry = (option) => {
        if (!entries.includes(option.value))
            setEntries(entries.concat([option.value]));
    }

    const deleteEntry = (index) => (
        () => setEntries(entries.filter((_, i) => i !== index))
    );

    return (<tbody className="sort-table-body">
        <Sortable list={entries} setList={setEntries}>
            {(entry, index, handle) => <>
                {handle}
                <Select
                    options={teamOptions}
                    value={teamOptions.find(option => entry === option.value)}
                    onChange={handleEntryChange(index)}
                    classNamePrefix='sort-table-select'
                    className={'sort-table-select' + (DNPList.includes(entry) ? ' dnp' : '')}
                />
                <button onClick={deleteEntry(index)}><span className="material-icons-outlined">close</span></button>
            </>}
        </Sortable>
        <tr>
            <td>
                <Select
                    options={teamOptions}
                    value={null}
                    onChange={handleAddEntry}
                    classNamePrefix='sort-table-select' className='sort-table-select'
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
function SimpleTable({ data, setData, onDelete, robotData, onApply }) {
    const { name, entries, statistic, descending } = data;

    useEffect(() => setData(data.sort(robotData)),
        [name, statistic, descending, robotData]) // eslint-disable-line react-hooks/exhaustive-deps

    const handleApply = () => {
        onApply(entries.map(e => e.team));
    }

    return (
        <table>
            <thead>
                <tr>
                    <th className="tableTitle" colSpan={2}>
                        {name}
                        <Popup trigger={<button><span className="material-icons-outlined">edit</span></button>} modal nested>
                            {close => (<SimplePopup currentData={data} onSubmit={setData} onDelete={onDelete} close={close} isEditing={true} />)}
                        </Popup>
                    </th>
                </tr>
                <tr>
                    <td colSpan={2}><button onClick={handleApply}>Apply</button></td>
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
function WeightedTable({ data, setData, onDelete, robotData, onApply }) {
    const { name, entries, factors } = data;

    const mins = useMemo(() => data.mins(robotData),
        [factors, robotData] // eslint-disable-line react-hooks/exhaustive-deps
    );

    const maxes = useMemo(() => data.maxes(robotData),
        [factors, robotData] // eslint-disable-line react-hooks/exhaustive-deps
    );

    useEffect(() => setData(data.sort(robotData, mins, maxes)),
        [name, factors, robotData]); // eslint-disable-line react-hooks/exhaustive-deps

    const handleApply = () => {
        onApply(entries.map(e => e.team));
    }

    return (<table>
        <thead>
            <tr>
                <th className="tableTitle" colSpan={2}>
                    {name}
                    <Popup trigger={<button><span className="material-icons-outlined">edit</span></button>} modal nested>
                        {close => (<WeightedPopup currentData={data} onSubmit={setData} onDelete={onDelete} close={close} isEditing={true} />)}
                    </Popup>
                </th>
            </tr>
            <tr>
                <td colSpan={2}><button onClick={handleApply}>Apply</button></td>
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
function BlankTable({ data, setData, onDelete, onApply }) {
    const { name, entries } = data;

    const setEntries = (newEntries) => {
        setData(new BlankTableData(name, newEntries))
    };

    const handleApply = () => {
        onApply(entries);
    }

    return (<table>
        <thead>
            <tr>
                <th className="tableTitle" >
                    {name}
                    <Popup trigger={<button><span className="material-icons-outlined">edit</span></button>} modal nested>
                        {close => (<BlankPopup currentData={data} onSubmit={setData} onDelete={onDelete} close={close} isEditing={true} />)}
                    </Popup>
                </th>
            </tr>
            <tr>
                <td><button onClick={handleApply}>Apply</button></td>
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
