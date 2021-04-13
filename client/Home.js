import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="full-width-container full-width-container--slanted-border">
      <main className="landing">
        <h1 className="announcement">
          Linden & Scott
          <br />
          Are
          <br />
          Getting
          <br />
          Married
        </h1>
      </main>
      <ul className="topics">
        <li className="topic">
          <Link to="/rsvp" className="topic__link">
            RSVP
          </Link>
        </li>
        <li className="topic">
          <Link to="/about" className="topic__link">
            About Us
          </Link>
        </li>
        <li className="topic">
          <Link to="/zola" className="topic__link">
            Registry
          </Link>
        </li>
      </ul>
    </div>
  );
}
