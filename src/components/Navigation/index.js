import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { ReactComponent as SitiBotLogo } from "../../assets/sitiwhite.svg";
import "./style.css";

function Navigation() {
  return (
    <Navbar fixed="top" expand="lg" className="navi" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <SitiBotLogo width={100} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link disabled href="/about">
                About
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
