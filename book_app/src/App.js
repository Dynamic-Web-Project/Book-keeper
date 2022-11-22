import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomeScreen from "./pages/HomeScreen";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomeScreen} exact/>
      </Switch>
    </Router>
  );
}

export default App;
