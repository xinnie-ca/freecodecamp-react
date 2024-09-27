import React from "react";
import logo from "../images/logo192.png";

export default function NavBar() {
  return (
    <nav className="nav">
      <img className="nav--icon" src={logo} alt="No!! sth wrong"></img>
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React course - Project 1</h4>
    </nav>
  );
}
