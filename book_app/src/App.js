import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../src/presenters/HeaderPresenter";
import Login from "../src/presenters/LoginPresenter";
import Signup from "../src/presenters/SignupPresenter";
import Home from "../src/presenters/HomePresenter";
import Search from "../src/presenters/SearchPresenter";
import Wishlist from "../src/presenters/WishlistPresenter";
import About from './views/AboutUs';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Header />
                <Container className="mt-3">
                    <Routes>
                        <Route path="/" element={<Navigate replace to="/home" />} />
                        <Route exact path='/login' element={<Login />} />
                        <Route exact path='/signup' element={<Signup />} />
                        <Route exact path='/aboutus' element={<About />} />
                        <Route exact path='/home' element={<Home />} />
                        <Route exact path='/search' element={<Search />} />
                        <Route exact path='/wishlist' element={<Wishlist />} />
                    </Routes>
                </Container>
            </Router>
        )
    }
}
