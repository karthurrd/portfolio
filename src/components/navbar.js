import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from '../logo.jpg';

function Navigation() {
  return (
    <Navbar expand="lg">
      <div className="d-flex align-items-center ml-3 mr-3">
        <img src={logo} alt="logo" style={{ width: 60, height: 'auto', marginRight: '10px' }} />
        <Navbar.Brand href="#">Fernando Puentes Portfolio</Navbar.Brand>
      </div>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Projects</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;