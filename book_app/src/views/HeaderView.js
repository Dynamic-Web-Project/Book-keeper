import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import logo from "../logo.png";

export default function HeaderView(props) {
    return (
        <div>
            <Navbar className="navbar">
                <Container>
                    <a class="logo" href="/"><Image src={logo} height="100" /></a>
                    <style>@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,900');</style>
                    <span className="title">BOOK🪙KEEPER </span>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            {props.user ? (
                                <NavDropdown title={props.user.email} id="basic-nav-dropdown">
                                    <NavDropdown.Item >
                                        <Nav.Link as={Link} to="/settings" >Settings</Nav.Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item >
                                        <Nav.Link as={Link} to="/login" onClick={props.logout}>Logout</Nav.Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <>
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                    <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
