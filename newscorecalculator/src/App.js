import React from "react";
import { ScorePage, BottomRow, ScoringNumbers } from "./Pages";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="ScorePage">

          <div className="container">
            <div>
              <h1 className="conecube"><img src="Cone Icon.svg" height="50" className="Icon" alt="Cone Icon" /></h1>
              <h1 className="conecube"><img src="Cube Icon.svg" height="50" className="Icon" alt="Cube Icon" /></h1>
              <h1 className="conecube"><img src="Cone Icon.svg" height="50" className="Icon" alt="Cone Icon" /></h1>
            </div>
            <div>
              <h1 className="conecube"><img src="Cone Icon.svg" height="50" className="Icon" alt="Cone Icon" /></h1>
              <h1 className="conecube"><img src="Cube Icon.svg" height="50" className="Icon" alt="Cube Icon" /></h1>
              <h1 className="conecube"><img src="Cone Icon.svg" height="50" className="Icon" alt="Cone Icon" /></h1>
            </div>
            <div>
              <h1 className="conecube"><img src="Cone Icon.svg" height="50" className="Icon" alt="Cone Icon" /></h1>
              <h1 className="conecube"><img src="Cube Icon.svg" height="50" className="Icon" alt="Cube Icon" /></h1>
              <h1 className="conecube"><img src="Cone Icon.svg" height="50" className="Icon" alt="Cone Icon" /></h1>
            </div>
          </div>

          <ScorePage />
          <ScorePage />
          <BottomRow />
        </div>
        <ScoringNumbers />
      </div>
    )
  }
}

export default App;
