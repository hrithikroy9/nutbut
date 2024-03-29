import logo from './logo.svg';
import './App.css';
import Body from './body';
import nut from './assets/nut.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={nut} className="App-logo" alt="logo" />
        <p>
          Swipe Up
        </p>
        <Body/>
      </header>
    </div>
  );
}

export default App;
