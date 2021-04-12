import React from "react";
import { Switch, Route } from "react-router-dom";

import Rsvp from "./Rsvp";
import About from "./About";
import Home from "./Home";

export default function Switcheroo() {
  return (
    <Switch>
      <Route path="/rsvp">
        <Rsvp />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
