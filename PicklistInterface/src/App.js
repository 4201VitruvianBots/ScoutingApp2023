import './App.css';
import 'material-icons/iconfont/outlined.css';
import { PopupButton } from './Popup.js';
import { OpenButton, SaveButton } from './Saving.js';
import { BlankTable, SimpleTable, WeightedTable, DNPTable, FinalTable } from './Table.js';
import { BlankTableData, SimpleTableData, WeightedTableData, UploadButton } from './Data';
import { createContext, useMemo, useState } from 'react';
import SearchBar from './Searchbar';

const OptionsContext = createContext([]);
const ListContext = createContext([]);

function App() {
  /** @type {(BlankTableData | SimpleTableData | WeightedTableData )[]} */
  const [tables, setTables] = useState([]);
  /*
    {
      type: 'simple',
      name: 'Simple 1',
      entries: ['4201', '7157', '4414'],
      statistic: 'auto_average_grid',
      descending: true
    }
    {
      type: 'weighted',
      name: 'Weighted 1',
      entries: ['4201', '7157', '4414'],
      statistics: [
        {id: 'auto_average_grid', weight: 1}
      ]
    }
    {
      type: 'blank',
      name: 'Food',
      entries: ['4201','7157','4414']
    }

   */

  const [finalPicklist, setFinalPicklist] = useState([]);
  const [DNPList, setDNPList] = useState([]);

  /*
  {
    columns: [
      { id: 'Average_Defense', name: 'Average Defense Ranking' },
      { id: 'Average_Auto', name: 'Average Auto Score' }
    ],
    data: {
      '4201': [ 4, 7 ],
      '8898': [ 2, 11 ]
    }
  }
  */

  const [inputData, setInputData] = useState();
  const statisticOptions = useMemo(() => inputData?.columns ?? [], [inputData]);

  const robotData = useMemo(() => {
    if (!inputData) return undefined;
    const columns = statisticOptions;
    const rawData = inputData.data;
    const outputData = Object.fromEntries(
        Object.entries(rawData).map(([team_number, values]) => [
            team_number,
            Object.fromEntries(values.map((stat, index) => [columns[index].value, stat]))
        ])
    );
    return outputData
  }, [inputData, statisticOptions]);

  const [comments, setComments] = useState({})

  const teamOptions = useMemo(() => Object.keys(robotData ?? {}).map(e => ({ value: e, label: e })), [robotData]);

  const updateTable = (index) => {
    return (table) => {
      setTables(tables.map((e, i) => i === index ? table : e));
    }
  };

  const addTable = (table) => {
    setTables([...tables, table]);
  };

  const onDelete = (index) => {
    return () => {
      setTables(tables.filter((_, i) => index !== i));
    }
  };

  return (
    <OptionsContext.Provider value={{ teams: teamOptions, statistics: statisticOptions }}>
      <ListContext.Provider value={{ DNP: DNPList, comments: comments, setComments: setComments }}>
        <main>
          <header>
            <h1>Vitruvian Statistical Analysis</h1>
            <PopupButton className="popupButton" addTable={addTable} />
            <UploadButton setInputData={setInputData} />
            <SaveButton inputData={inputData} tables={tables} DNPList={DNPList} finalPicklist={finalPicklist} comments={comments} />
            <OpenButton setInputData={setInputData} setTables={setTables} setDNPList={setDNPList} setFinalPicklist={setFinalPicklist} setComments={setComments} />
            <div className="searchSection">
              <p>Team Search</p>
              <SearchBar ></SearchBar>
            </div>
          </header>

          <section className="allTables">
            {tables.map((table, index) => {
              if (table instanceof SimpleTableData)
                return <SimpleTable key={index} data={table} setData={updateTable(index)} onDelete={onDelete(index)} robotData={robotData} onApply={setFinalPicklist} />;;

              if (table instanceof WeightedTableData)
                return <WeightedTable key={index} data={table} setData={updateTable(index)} onDelete={onDelete(index)} robotData={robotData} onApply={setFinalPicklist} />;

              if (table instanceof BlankTableData)
                return <BlankTable key={index} data={table} setData={updateTable(index)} onDelete={onDelete(index)} onApply={setFinalPicklist} />;

              return null;
            })}
          </section>

          <section className="sidebar">
            <DNPTable entries={DNPList} setEntries={setDNPList} />
            <FinalTable entries={finalPicklist} setEntries={setFinalPicklist} />
          </section>
        </main>
      </ListContext.Provider>
    </OptionsContext.Provider >
  );
}


export default App;
export { OptionsContext, ListContext };



/*
 - Combine CSV files from Match, Pit, and Super scouting into one Mega-CSV file
 - Import the Mega-CSV file into PicklistInterface
 - (Python script to turn it into a json file?)
 - Use the data from the CSV file

*/
