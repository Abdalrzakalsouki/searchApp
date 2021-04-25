import React from "react";
import { Link } from "react-router-dom";
import Darkmode from "./Darkmode";
import "../App.css";

export default function Nav() {
  return (
    <nav className="nav-items">
      <Link className="underline" to="/">
        <h2 className="title">Building Search Engine</h2>
      </Link>
      <Darkmode />
      <Link className="underline" to="/">
        <p className="link">
          {" "}
          <b>Home</b>
        </p>
      </Link>
      <Link className="underline" to="/about">
        <p className="link">
          <b>About</b>
        </p>
      </Link>
    </nav>
  );
}
