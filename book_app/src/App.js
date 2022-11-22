import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React, { Component } from 'react';
import Home from "./pages/HomeScreen";
import Header from "./components/Header";


class App extends Component {
  render() {
    return (
    <Router>
        <Header />
          <Switch>
              <Route exact path='/' component={Home} />
          </Switch>
      </Router>
    );
  }
}

export default App;
