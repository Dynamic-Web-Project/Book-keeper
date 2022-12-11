import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import logo from "../imgs/logo.gif";
import '../css/headerView.css';
import "../css/common.css";

export default function HeaderView(props) {
    function renderUserMenu(props) {
        if (props.user) {
            return (
                <NavDropdown title={props.user.email} id="basic-nav-dropdown" align="end">
                    <NavDropdown.Item as={Link} to="/aboutus">About Us</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/login" onClick={props.logout}>Log Out</NavDropdown.Item>
                </NavDropdown>
            )
        } else {
            return (
                <>
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
                </>
            )
        }

    }

    return (
        <div className="header-wrapper">
            <Navbar className="navbar" bg="black" variant="dark">
                <Container>
                    <a className="logo" href="/home"><Image src={logo} height="100" /></a>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>{renderUserMenu(props)}</Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </div >
    )
}
