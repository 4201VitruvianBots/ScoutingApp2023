import './App.css';
import Popup from 'reactjs-popup';
import { SimplePopup, PopupButton } from './Popup.js';
import { BlankTableData, SimpleTableData, WeightedTableData, SimpleTable } from './Table.js';
import { useState } from 'react';
import { mutableObject } from './Util';

function App() {
  /** @type {(BlankTableData | SimpleTableData | WeightedTableData )[]} */
  const tables = mutableObject(useState([]));
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

  function SimplePopup({ data, close, tables, setTables }) {

    const [descending, setDescending] = useState(false);


    function listing() {
      setDescending(true)
    }

    return (
      <div className="popup">
        <p className="popupHeader">Simple Statistic</p>

        <div className="popupContent">
          <label className="popupLabel" htmlFor="title">Title: </label>
          <input type="text" id="title" className="popupInput"></input>
        </div>


        <div className="popupContent">
          <label htmlFor="sortBy" className="popupLabel">Statistic: </label>
          <select name="Competition" id="sortBy" defaultValue="Choose" className="popupInput">
            <option value="average_auto_grid_score">Avg Auto Grid Score</option>
            <option value="average_auto_balance">Avg Auto Balance</option>
            <option value="average_teleop_grid_score">Avg Teleop Grid Score</option>
            <option value="average_teleop_cycle_time">Avg Teleop Cycle Time</option>
            <option value="average_total_teleop_points">Avg Total Teleop Points</option>
          </select>

        </div>

        <div className="popupContent">
          <label className="popupLabelLast" htmlFor="checkbox">Descending?</label>
          <input type="checkbox" id="checkbox" className="popupInputLast" onClick={listing}></input>
        </div>



        <button className="popupClose" onClick={() => {

          let name = document.getElementById("title").value;
          let option = document.getElementById("sortBy");
          let sort = option.options[option.selectedIndex].text;

          setTables([name, sort, descending]);
          console.log([tables]);

          close();



        }}>
          Create Table
        </button>

      </div>
    )
  }

  return (
    <div className="App">
      {/* File upload to import CSV */}


      <p className="pagetitle">Vitruvian Statistical Analysis</p>
      <PopupButton className="popupButton" />


      <SimpleTable></SimpleTable>


    </div>
  );
}


export default App;



/*
 - Combine CSV files from Match, Pit, and Super scouting into one Mega-CSV file
 - Import the Mega-CSV file into PicklistInterface
 - (Python script to turn it into a json file?)
 - Use the data from the CSV file 

*/
