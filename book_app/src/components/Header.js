import React, { useState } from "react";
import { Container, Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import logo from "../logo.png";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"
//test
function Header() {
  const { logout, currentUser } = useAuth();

  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
      <a class="logo" href="[absolute url]"> 
                <Image src={logo} height="100"/>
                <div>Book-keeper</div>
        </a>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>          
          <Nav>
            {currentUser?(
              <NavDropdown title={currentUser.email} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logout}>
               Logout
              </NavDropdown.Item>
            </NavDropdown>
            ):(
              <>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>                
            </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;