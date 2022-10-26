import './App.css';
import { SignIn, PreGame, Auto, TeleOp, Endgame, SavePage } from "./Pages";
function App() {
  return (
    <main>
      <SignIn  />
      <PreGame />
      <Auto />
      <TeleOp />
      <Endgame />
      <SavePage />
    </main>
  );
}

export default App;
