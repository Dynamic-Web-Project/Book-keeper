import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="primary"> Primary</Button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ruimin <code>jintng</code> Duosi
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Peter
        </a>
      </header>
    </div>
  );
}

export default App;
