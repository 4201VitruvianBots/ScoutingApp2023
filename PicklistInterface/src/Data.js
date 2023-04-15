
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
 * @typedef {{
 *     columns: {name: string, id: string}[],
 *     data: {number: any[]}
 * }} RobotData
 */

/**
 * 
 * @param {{setRobotData: (data: RobotData) => void)}} param0 
 */
function UploadButton({ setStatisticOptions, setRobotData }) {
    /**
     * 
     * @param {React.ChangeEvent<HTMLInputElement>} event 
     */
    const handleChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            const inputData = JSON.parse(event.target.result);
            const columns = inputData.columns;
            const rawData = inputData.data;
            const outputData = Object.fromEntries(
                Object.entries(rawData).map(([team_number, values]) => [
                    team_number,
                    Object.fromEntries(values.map((stat, index) => [columns[index].value, stat]))
                ])
            );
            setRobotData(outputData);
            setStatisticOptions(columns);
        }
        reader.readAsText(file);
    };

    return (
        <label className="file-upload-button">
            <input type="file" onChange={handleChange} style={{ display: 'none' }} />
            Upload Data
        </label>
    );
}

export { SimpleTableData, WeightedTableData, BlankTableData, UploadButton };
