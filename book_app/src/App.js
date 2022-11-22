import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React, { Component } from 'react';
import Header from "./components/Header";
import HomeScreen from "./pages/HomeScreen";
import {Container} from "react-bootstrap";

class App extends Component {
  render() {
    return (
    <Router>
        <Header/>
          <Container>
          <Routes>
              <Route exact path='/' element={<HomeScreen/>} />
          </Routes>
          </Container>
      </Router>
    );
  }
}

export default App;
