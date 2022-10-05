import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1 class="title">Scouting App - by FRC Team 4201</h1>
      <h2 class="subtitle">the Vituvian Bots</h2>
      <h4 class="subtitle">Created for the 2023 Season: Charged Up</h4>
      <h6 class="bottom-text">Established on October 5, 2022</h6>

    </div>
  );
}

export default App;
