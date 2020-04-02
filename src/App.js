import React from "react";
import "./App.css";
//Fazendo o roteamento da aplicação
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Routes/Home";
import About from "./Routes/About";
import NoMatch from "./Routes/NoMatch";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
