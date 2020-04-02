import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./style.css";

function Footer() {
  return (
    <footer className="footer d-flex align-items-center">
      <Container>
        <Button
          href="https://github.com/Juliapp"
          target="_blank"
          variant="outline-secondary"
        >
          Git
        </Button>
      </Container>
    </footer>
  );
}

export default Footer;
