import { useState } from 'react';
import { BlankTableData, SimpleTableData, WeightedTableData } from "./Data";

function SaveButton({ inputData, tables, DNPList, finalPicklist, comments }) {
    const [fileContent, setFileContent] = useState();

    const handleClick = () => {
        setFileContent(encodeURIComponent(JSON.stringify({
            inputData: inputData,
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

function OpenButton({ setInputData, setTables, setDNPList, setFinalPicklist, setComments }) {
    const handleInput = (event) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            const {inputData, tables, DNPList, finalPicklist, comments} = JSON.parse(event.target.result);
            setInputData(inputData);
            setTables(tables.map(e => {
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
            setDNPList(DNPList);
            setFinalPicklist(finalPicklist);
            setComments(comments);
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
