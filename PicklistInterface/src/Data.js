
class BlankTableData {
    /** @type {string} */
    name;
    /** @type {number[]} */
    entries;

    type = 'blank'

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

    type = 'simple';

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

    sort(robotData) {
        const newEntries = Object.entries(robotData)
            .map(([team_number, stats]) => ({ team: team_number, value: stats[this.statistic.value] }))
            .sort(this.descending
                ? (a, b) => b.value - a.value
                : (a, b) => a.value - b.value
            );
        // TODO this is temporary testing data
        return new SimpleTableData(this.name, newEntries, this.statistic, this.descending);
    }


}

class WeightedTableData extends BlankTableData {
    /** @type {{statistic: string, weight: number}[]} */
    factors;

    type = 'weighted';

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

    sort(robotData, mins, maxes) {
        const newEntries = Object.entries(robotData)
            .map(([team_number, stats]) => ({
                team: team_number,
                value: this.factors
                    .map(({ statistic: { value }, weight }) => weight *
                        (stats[value] - mins[value]) /
                        (maxes[value] - mins[value]))
                    .map(number => Math.round(number * 100) / 100)
                    .reduce((sum, current) => sum + current, 0)
            }))
            .sort((a, b) => b.value - a.value);
        return new WeightedTableData(this.name, newEntries, this.factors);
    }

    mins(robotData) {
        return Object.fromEntries(
            this.factors.map(({ statistic: { value } }) => [
                value,
                Object.values(robotData).reduce(
                    (min, current) => Math.min(min, current[value]),
                    Number.MAX_VALUE)
            ])
        );
    }

    maxes(robotData) {
        return Object.fromEntries(
            this.factors.map(({ statistic: { value } }) => [
                value,
                Object.values(robotData).reduce(
                    (min, current) => Math.max(min, current[value]),
                    0)
            ])
        );
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
function UploadButton({ setInputData }) {
    /**
     * 
     * @param {React.ChangeEvent<HTMLInputElement>} event 
     */
    const handleChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            const inputData = JSON.parse(event.target.result);
            setInputData(inputData);
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
