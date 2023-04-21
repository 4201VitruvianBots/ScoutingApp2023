import { useState } from 'react';
import { BlankTableData, SimpleTableData, WeightedTableData } from "./Data";

function SaveButton({ robotData, statisticOptions, tables, DNPList, finalPicklist, comments }) {
    const [fileContent, setFileContent] = useState();

    const handleClick = () => {
        setFileContent(encodeURIComponent(JSON.stringify({
            robotData: robotData,
            statisticOptions: statisticOptions,
            tables: tables,
            DNPList: DNPList,
            finalPicklist: finalPicklist,
            comments: comments
        })));
    }

    return (<a
        href={'data:text/plain;charset=utf-8,' + fileContent}
        onClick={handleClick}
        download={'Picklist.json'}
    >Save to File</a>);
}

function OpenButton({ setRobotData, setStatisticOptions, setTables, setDNPList, setFinalPicklist, setComments }) {
    const handleInput = (event) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            const loaded = JSON.parse(event.target.result);
            setRobotData(loaded.robotData);
            setStatisticOptions(loaded.statisticOptions);
            setTables(loaded.tables.map(e => {
                switch (e.type) {
                    case 'blank':
                        return new BlankTableData(e.name, e.entries);
                    case 'simple':
                        return new SimpleTableData(e.name, e.entries, e.statistic, e.descending);
                    case 'weighted':
                        return new WeightedTableData(e.robotData, e.mins, e.maxes);
                    default:
                        return null;
                }
            }));
            setDNPList(loaded.DNPList);
            setFinalPicklist(loaded.finalPicklist);
            setComments(loaded.comments);
        };
        reader.readAsText(event.target.files[0])
    }

    return (
        <label>
            Open from file
            <input type="file" onInput={handleInput} style={{ display: 'none' }} />
        </label>
    )
}

export { SaveButton, OpenButton };
