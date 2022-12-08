import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../src/presenters/HeaderPresenter";
import Login from "../src/presenters/LoginPresenter";
import Signup from "../src/presenters/SignupPresenter";
import Home from "../src/presenters/HomePresenter";
import About from './views/AboutUs';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
    render() {
        return (
            <Router>
                <Header />
                <Container className="mt-3">
                    <Routes>
                        <Route exact path='/login' element={<Login />} />
                        <Route exact path='/signup' element={<Signup />} />
                        <Route exact path='/aboutus' element={<About />} />
                        <Route exact path='/' element={<Home />} />
                    </Routes>
                </Container>
            </Router>
        );
    }
}

export default App;
