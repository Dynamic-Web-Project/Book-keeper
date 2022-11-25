import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Component } from 'react';
import { Container } from "react-bootstrap";
import HeaderPresenter from "../src/presenters/HeaderPresenter.js";
import HomeScreen from "../src/views/HomeView.js";
import LoginPresenter from "../src/presenters/LoginPresenter.js";
import SignupScreenPresenter from "../src/presenters/SignupPresenter.js";

class App extends Component {
  render() {
    return (
      <Router>
        <HeaderPresenter/>
        <Container className="mt-3">
          <Routes>
            <Route exact path='/' element={<HomeScreen />} />
            <Route exact path='/login' element={<LoginPresenter />} />
            <Route exact path='/signup' element={<SignupScreenPresenter />} />
          </Routes>
        </Container>
        </Router> 
      ); 
  }
} 

export default App;