import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import "./style.css";

function Jumb() {
  return (
    <Jumbotron fluid>
      <div className="overlay"></div>
      <Container className="d-flex align-content-end">
        <div className="mt-5">
          <h1 className="mt-5">Bem Vindo!</h1>
          <p>
            Confira aqui qualquer menção em tempo real sobre interferências nas
            atividades da UEFS.
          </p>
        </div>
      </Container>
    </Jumbotron>
  );
}

export default Jumb;
