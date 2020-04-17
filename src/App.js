import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Case from "./components/Case";
import "./App.sass";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/case/:id" component={Case} />
        <Route exact path='*' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
