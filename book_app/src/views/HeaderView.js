import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import logo from "../logo.gif";

export default function HeaderView(props) {
    return (
         <div className="header-wrapper">
            <Navbar className="navbar" bg="black" variant="dark">
                <Container>
                   <a className="logo" href="/"><Image src={logo} height="100" /></a>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            {props.user ? (
                                <NavDropdown title={ <span style={{color:'white'}} >{props.user.email}</span>} id="basic-nav-dropdown">
                                    <NavDropdown.Item >
                                        <Nav.Link as={Link} to="/settings"> <span style={{color:'black'}}> Settings</span> </Nav.Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item >
                                        <Nav.Link as={Link} to="/aboutus" >About us</Nav.Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item >
                                        <Nav.Link as={Link} to="/login" onClick={props.logout}><span style={{color:'black'}}> Logout</span></Nav.Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <>
                                    <Nav.Link  as={Link} to="/login"> Login</Nav.Link>
                                    <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>);
}