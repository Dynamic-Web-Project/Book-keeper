import React, { useState } from "react";
import { Container, Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import logo from "../logo.png";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { useAuth } from "../contexts/AuthContext"
=======
import {useAuth} from "../contexts/AuthContext"
>>>>>>> 719c66bd6b63792b86803d369d8c4768d194f231

function Header(){
  const {logout} = useAuth();

    return(
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
      <Nav.Link as={Link} to="/">
            <Navbar.Brand>
                <Image src={logo} height="100"/>
            </Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>          
          <Nav>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
<<<<<<< HEAD
              <NavDropdown.Item  onClick={logout}>
=======
              <NavDropdown.Item onClick={logout}>
>>>>>>> 719c66bd6b63792b86803d369d8c4768d194f231
                Logout
              </NavDropdown.Item>
            </NavDropdown>
            <>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>                
            </>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;