import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React, { Component } from 'react';
import Header from "./components/Header";
import HomeScreen from "./pages/HomeScreen";

class App extends Component {
  render() {
    return (
    <Router>
        <Header/>
          <Routes>
              <Route exact path='/' element={<HomeScreen/>} />
          </Routes>
      </Router>
    );
  }
}

export default App;
