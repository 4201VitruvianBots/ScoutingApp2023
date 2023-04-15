import './App.css';
import Popup from 'reactjs-popup';
import { SimplePopup, PopupButton } from './Popup.js';
import { BlankTableData, SimpleTableData, WeightedTableData, BlankTable, SimpleTable, WeightedTable, DNPTable, FinalTable } from './Table.js';
import { useState } from 'react';
import { mutableObject } from './Util';
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
  const [robotData, setRobotData] = useState();

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
        <PopupButton className="popupButton" />
        <div className="searchSection">
            <p>Team Search</p>
            <SearchBar></SearchBar>
        </div>
        
      </header>
      <section className="allTables">
        <SimpleTable data={{ name: 'Auto Average Max', entries: [{ team: 4201, value: 5 }, { team: 4201, value: 5 }, { team: 4201, value: 5 }] }} />
        <WeightedTable data={{ name: 'Weighted 1', entries: [{ team: 4201, value: 5 }, { team: 4201, value: 5 }, { team: 4201, value: 5 }] }} />
        <BlankTable data={{ name: 'Blank 1', entries: [4201, 4201, 4201] }} />
      </section>
      <section className="sidebar">
        <DNPTable entries={[4201, 4201, 4201]} />
        <FinalTable entries={[4201, 4201, 4201]} />
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
