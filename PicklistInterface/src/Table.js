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
function TeamTable({ entries }) {
    return (<tbody>
        {entries.map(e => (
            <tr>
                <td>{e.team}</td>
                <td>{e.value}</td>
            </tr>
        ))}
    </tbody>)
}

/**
 * 
 * @param {{data: SimpleTableData, setData: (data: SimpleTableData) => void}} param0 
 * @returns 
 */
function SimpleTable({ data, setData }) {

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan={2}>Average Auto Grid</th>
                </tr>
                <tr>
                    <td><button>Reset</button></td>
                    <td><button>Apply</button></td>
                </tr>
            </thead>
            <TeamTable entries={[
                { team: 4201, value: 5 },
                { team: 4201, value: 5 },
                { team: 4201, value: 5 }
            ]} />
        </table>

    )

}

/**
 * 
 * @param {{data: WeightedTableData, setData: (data: WeightedTableData) => void}} param0 
 * @returns 
 */
function WeightedTable({ data, setData }) {
    return (<table>
        <thead>
            <tr>
                <th colSpan={2}>Weighted 1</th>
            </tr>
            <tr>
                <td><button>Reset</button></td>
                <td><button>Apply</button></td>
            </tr>
        </thead>
        <TeamTable entries={[
            { team: 4201, value: 5 },
            { team: 4201, value: 5 },
            { team: 4201, value: 5 }
        ]} />
    </table>);
}

/**
 * 
 * @param {{data: BlankTableData, setData: (data: BlankTableData) => void}} param0 
 * @returns 
 */
function BlankTable({ data, setData }) {
    return (<table>
        <thead>
            <tr>
                <th>Blank 1</th>
            </tr>
            <tr>
                <td><button>Apply</button></td>
            </tr>
        </thead>
        <tbody>
            {[4201, 3307, 8868].map(e => (
                <tr>
                    <td>{e}</td>
                </tr>
            ))}
        </tbody>
    </table>);
}

function DNPList({ entries, setEntries }) {

}

function FinalTable({ entries, setEntries }) {

}

export { SimpleTableData, WeightedTableData, BlankTableData, SimpleTable, WeightedTable, BlankTable, FinalTable, DNPList };
