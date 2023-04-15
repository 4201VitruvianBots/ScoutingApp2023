import './App.css';
import { PopupButton } from './Popup.js';
import { BlankTable, SimpleTable, WeightedTable, DNPTable, FinalTable } from './Table.js';
import { BlankTableData, SimpleTableData, WeightedTableData, UploadButton } from './Data';
import { useEffect, useMemo, useState } from 'react';
import SearchBar from './Searchbar';

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
  const [statisticOptions, setStatisticOptions] = useState();
  const [robotData, setRobotData] = useState();
  const [comments, setComments] = useState({})

  // Temporary testing data
  useEffect(() => {
    setFinalPicklist(['4201', '987', '254']);
    setDNPList(['9999', '9998', '9997'])
  }, [])

  const updateTable = (index) => {
    return (table) => {
      setTables(tables.map((e, i) => i === index ? table : e));
    }
  }

  const addTable = (table) => {
    setTables([...tables, table]);
  }

  return (
    <main>
      {/* File upload to import CSV */}
      <header>
        <h1>Vitruvian Statistical Analysis</h1>
        <PopupButton className="popupButton" addTable={addTable} statisticOptions={statisticOptions} />
        <UploadButton setRobotData={setRobotData} setStatisticOptions={setStatisticOptions} />
        <div className="searchSection">
            <p>Team Search</p>
            <SearchBar></SearchBar>
        </div>
        
      </header>
      <section className="allTables">
        {tables.map((table, index) => {
          if (table instanceof SimpleTableData)
            return <SimpleTable key={index} data={table} setData={updateTable(index)} robotData={robotData} />;;

          if (table instanceof WeightedTableData)
            return <WeightedTable key={index} data={table} setData={updateTable(index)} robotData={robotData} />;

          if (table instanceof BlankTableData)
            return <BlankTable key={index} data={table} setData={updateTable(index)} robotData={robotData} />;

          return null;
        })}
      </section>
      <section className="sidebar">
        <DNPTable entries={DNPList} setEntries={setDNPList} />
        <FinalTable entries={finalPicklist} setEntries={setFinalPicklist} />
      </section>
    </main>
  );
}


export default App;



/*
 - Combine CSV files from Match, Pit, and Super scouting into one Mega-CSV file
 - Import the Mega-CSV file into PicklistInterface
 - (Python script to turn it into a json file?)
 - Use the data from the CSV file 

*/
