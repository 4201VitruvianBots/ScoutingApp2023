import { useEffect } from "react";

class BlankTableData {
    /** @type {string} */
    name;
    /** @type {number[]} */
    entries;

    /**
     * 
     * @param {string} name 
     * @param {number[]} entries 
     */
    constructor(name, entries) {
        this.name = name;
        this.entries = entries;
    }
}

class SimpleTableData extends BlankTableData {
    /** @type {string} */
    statistic;
    /** @type {boolean} */
    descending;

    /**
     * 
     * @param {string} name 
     * @param {number[]} entries 
     * @param {string} statistic 
     * @param {boolean} descending 
     */
    constructor(name, entries, statistic, descending = true) {
        super(name, entries);
        this.statistic = statistic;
        this.descending = descending;
    }

}

class WeightedTableData extends BlankTableData {
    /** @type {{statistic: string, weight: number}[]} */
    factors;

    /**
     * 
     * @param {string} name 
     * @param {number[]} entries 
     * @param {{statistic: string, weight: number}[]} factors
     */
    constructor(name, entries, factors) {
        super(name, entries);
        this.factors = factors;
    }
}

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
function SimpleTable({ data: { name, entries, statistic, descending }, setData }) {
    const reset = () => {
        // TODO this is temporary testing data
        setData(new SimpleTableData(name, [
            { team: 4201, value: 1 },
            { team: 4414, value: 2 },
            { team: 9987, value: 3 }
        ], statistic, descending))
    }

    useEffect(() => {
        if (entries === undefined) reset();
    }, [entries]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan={2}>{name}</th>
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
function WeightedTable({ data: { name, entries, factors }, setData }) {
    const reset = () => {
        // TODO this is temporary testing data
        setData(new WeightedTableData(name, [
            { team: 4201, value: 1 },
            { team: 4414, value: 2 },
            { team: 9987, value: 3 }
        ], factors))
    }

    useEffect(() => {
        if (entries === undefined) reset();
    }, [entries]); // eslint-disable-line react-hooks/exhaustive-deps

    return (<table>
        <thead>
            <tr>
                <th colSpan={2}>{name}</th>
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
function BlankTable({ data: { name, entries }, setData }) {
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
                <th>{name}</th>
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

export { SimpleTableData, WeightedTableData, BlankTableData, SimpleTable, WeightedTable, BlankTable, FinalTable, DNPTable };
