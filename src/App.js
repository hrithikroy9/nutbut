import logo from './logo.svg';
import './App.css';
import Body from './body';
import nut from './assets/nut.jpg';
import Naam from './assets/Naam';
import Form from './config/form';

function App() {
  return (
    <>
    <Naam/>
    <div className="App">
      <header className="App-header">
        <img src={nut} className="App-logo" alt="logo" />
        <p>
        </p>
        <Body/>
      </header>
    </div>
<Form/>
    </>
  );
}

export default App;
