import './App.css';
import { PopupButton } from './Popup.js';
import { BlankTableData, SimpleTableData, WeightedTableData, BlankTable, SimpleTable, WeightedTable, DNPTable, FinalTable } from './Table.js';
import { useEffect, useState } from 'react';

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
        <PopupButton className="popupButton" addTable={addTable} />
      </header>
      <section>
        {tables.map((table, index) => {
          if (table instanceof SimpleTableData)
            return <SimpleTable key={index} data={table} setData={updateTable(index)} />;;

          if (table instanceof WeightedTableData)
            return <WeightedTable key={index} data={table} setData={updateTable(index)} />;

          if (table instanceof BlankTableData)
            return <BlankTable key={index} data={table} setData={updateTable(index)} />;

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
