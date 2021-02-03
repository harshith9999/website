import React, { useState } from "react";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import "./Navbar.css";

function NavigationBar() {
  const [clicked, setclicked] = useState(false);

  const handleClick = () => {
    setclicked(!clicked);
  };
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">TechSWAP</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About us</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <NavDropdown title="Courses" id="basic-nav-dropdown">
            <NavDropdown.Item>Civil Engineering</NavDropdown.Item>
            <NavDropdown.Item>Mechanical Engineering</NavDropdown.Item>
            <NavDropdown.Item>Computers Science & Engineering</NavDropdown.Item>
            <NavDropdown.Item>Environmental Engineering</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
