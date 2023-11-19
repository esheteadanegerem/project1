import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Nabar = () => {
  return (
    <Navbar bg="light" expand="lg" className="bg-primary">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto justify-content-end">
          <Nav.Link className="mr-2" href="">
            Home
          </Nav.Link>
          <Nav.Link className="mr-2" href="/about">
            About
          </Nav.Link>
          <Nav.Link className="mr-2" href="/services">
            Services
          </Nav.Link>
          
          <Nav.Link className="mr-2 btn" href="/register">
            Register
          </Nav.Link>
          <Nav.Link className="nav-link btn" href="/login"
           >
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nabar;
