import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Case from "./components/Case";
import Hamburger from "./components/Hamburger";
import OverlayMenu from "./components/OverlayMenu";
import "./App.sass";

function App() {

  return (
    <Router basename="/florida-man-files">
      <OverlayMenu />
      <Hamburger />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/case/:id" component={Case} />
        <Route exact path='*' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
