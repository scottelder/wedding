import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Switcheroo from "./Switch";

export default function App(props) {
  return (
    <Router>
      <Switcheroo />
    </Router>
  );
}
