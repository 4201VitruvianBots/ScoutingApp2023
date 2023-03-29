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

  return (
    <div className="App">
      <h3 className="pagetitle">Vitruvian Statistical Analysis</h3>
      {/* <div>
       <SimplePopup></SimplePopup> 
      </div> */}
      <SimpleTable></SimpleTable>

      <PopupButton />

      <Popup trigger=
        {<input type="button" className="popupButton" value="Add foul"></input>}
        modal nested >
        {close => (<SimplePopup close={close} />)}
      </Popup>
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
