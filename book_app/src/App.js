import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Component } from 'react';
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import HomeScreen from "./pages/HomeScreen";
import SignupScreen from "./pages/SignupScreen";
import LoginScreen from "./pages/LoginScreen";
import { AuthProvider } from "./contexts/AuthContext";

class App extends Component {
  render() {
    return (
    <Router>
      
        <Header/>
          <Container className="mt-3">
            <Routes>
              <Route exact path='/signup' element={<SignupScreen/>} />
              <Route exact path='/login' element={<LoginScreen/>} />
              <Route exact path='/' element={<HomeScreen/>} />
            </Routes>
          </Container>
      </Router>
    );
  }
}

export default App;
