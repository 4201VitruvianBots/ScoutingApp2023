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
    /** @type {{id: string, weight: number}[]} */
    statistics;

    /**
     * 
     * @param {string} name 
     * @param {string[]} entries 
     * @param {{id: string, weight: number}[]} statistics 
     */
    constructor(name, entries, statistics) {
        super(name, entries);
        this.statistics = statistics;
    }
}

export { BlankTableData, SimpleTableData, WeightedTableData };
