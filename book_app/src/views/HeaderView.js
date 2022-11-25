import React from 'react';
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import logo from "../logo.png";

export default function HeaderView(props) {
    return (
        <div>
            <Navbar className='navbar'>
                <Container>
                    <a class="logo" href="[absolute url]"><Image src={logo} height="100" /></a>
                    <div className='title'>BOOK-KEEPER</div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            {props.user ? (
                                <NavDropdown title={props.user.email} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={props.logout}>
                                        <Nav.Link as={Link} to="/login">Logout</Nav.Link>
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