import React, { useState } from "react";
import {
  Button,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Navbar,
} from "react-bootstrap";
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
            <NavDropdown.Item href="/courses/c">
              Civil Engineering
            </NavDropdown.Item>
            <NavDropdown.Item href="/courses/mech">
              Mechanical Engineering
            </NavDropdown.Item>
            <NavDropdown.Item href="/courses/co">
              Computers Science & Engineering
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Environmental Engineering
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
