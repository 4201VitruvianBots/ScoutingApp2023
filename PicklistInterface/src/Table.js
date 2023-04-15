import { useEffect, useMemo } from "react";
import { SimpleTableData, WeightedTableData, BlankTableData } from './Data.js';

/**
 * 
 * @param {{entries: {team: number, value: number | string}[]}} param0
 * @returns 
 */
function DoubleTeamTable({ entries }) {
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
function SingleTeamTable({ entries }) {
    return (<tbody>
        {entries && entries.map((e, i) => (
            <tr key={i}>
                <td>{e}</td>
            </tr>
        ))}
    </tbody>);
}

/**
 * 
 * @param {{data: SimpleTableData, setData: (data: SimpleTableData) => void}} param0 
 * @returns 
 */
function SimpleTable({ data: { name, entries, statistic, descending }, setData, robotData }) {
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

    useEffect(() => {
        if (entries === undefined) sort();
    }, [entries]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <table>
            <thead>
                <tr>
                    <th className="tableTitle" colSpan={2}>{name}</th>
                </tr>
                <tr>
                    <td><button>Reset</button></td>
                    <td><button>Apply</button></td>
                </tr>
            </thead>
            <DoubleTeamTable entries={entries} />
        </table>
    );
}

/**
 * 
 * @param {{data: WeightedTableData, setData: (data: WeightedTableData) => void}} param0 
 * @returns 
 */
function WeightedTable({ data: { name, entries, factors }, setData, robotData }) {
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

    useEffect(() => {
        if (entries === undefined) sort();
    }, [entries]); // eslint-disable-line react-hooks/exhaustive-deps

    return (<table>
        <thead>
            <tr>
                <th className="tableTitle" colSpan={2}>{name}</th>
            </tr>
            <tr>
                <td><button>Reset</button></td>
                <td><button>Apply</button></td>
            </tr>
        </thead>
        <DoubleTeamTable entries={entries} />
    </table>);
}

/**
 * 
 * @param {{data: BlankTableData, setData: (data: BlankTableData) => void}} param0 
 * @returns 
 */
function BlankTable({ data: { name, entries }, setData, robotData }) {
    const reset = () => {
        // TODO this is temporary testing data
        setData(new BlankTableData(name, [4201, 4481, 983]))
    }

    useEffect(() => {
        if (entries === undefined) reset();
    }, [entries]); // eslint-disable-line react-hooks/exhaustive-deps

    return (<table>
        <thead>
            <tr>
                <th className="tableTitle" >{name}</th>
            </tr>
            <tr>
                <td><button>Apply</button></td>
            </tr>
        </thead>
        <SingleTeamTable entries={entries} />
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
        <SingleTeamTable entries={entries} />
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
        <SingleTeamTable entries={entries} />
    </table>);
}

export { SimpleTable, WeightedTable, BlankTable, FinalTable, DNPTable };
