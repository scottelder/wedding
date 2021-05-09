import React from "react";
import { Switch, Route } from "react-router-dom";

import Rsvp from "./Rsvp";
import About from "./About";
import Home from "./Home";
import Attractions from "./Attractions";
import Details from "./Details";

export default function Switcheroo() {
  return (
    <Switch>
      <Route path="/rsvp">
        <Rsvp />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/attractions">
        <Attractions />
      </Route>
      <Route path="/details">
        <Details />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
