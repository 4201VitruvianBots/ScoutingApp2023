

class BlankTableData {
    /** @type {string} */
    name;
    /** @type {string[]} */
    entries;

    /**
     * 
     * @param {string} name 
     * @param {string[]} entries 
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
     * @param {string[]} entries 
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
     * @param {string[]} entries 
     * @param {{statistic: string, weight: number}[]} factors
     */
    constructor(name, entries, factors) {
        super(name, entries);
        this.factors = factors;
    }
}

function SimpleTable({ data }) {

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan={2}>Average Auto Grid</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>4201</td>
                    <td>3.8</td>
                </tr>
                <tr>
                    <td>3476</td>
                    <td>6.2</td>
                </tr>
            </tbody>
        </table>

    )

}

function WeightedTable({ data }) {

}

function BlankTable({ data }) {

}

function DNPList({ entries, setEntries }) {

}

function FinalTable({ entries, setEntries }) {

}

export { SimpleTableData, WeightedTableData, BlankTableData, SimpleTable, WeightedTable, BlankTable, FinalTable };
