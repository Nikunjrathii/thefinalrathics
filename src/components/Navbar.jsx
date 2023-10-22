import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

import logo from "../assest/rathilogoo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar mx-background-top-linear">
      <a className="navbar-brand" href="/">
        <img className="logo" src={logo} alt="logo" />
      </a>
      <button
        className={`navbar-toggle ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="toggle-icon"></span>
        <span className="toggle-icon"></span>
        <span className="toggle-icon"></span>
      </button>
      <ul className={`nav ${menuOpen ? "active" : ""}`}>
        <Link className="nav-item nav-link" to="/">
          Home
        </Link>
        <Link className="nav-item nav-link" to="/about">
          About Us
        </Link>
        <Link className="nav-item nav-link" to="/services">
          Services
        </Link>
        <Link className="nav-item nav-link" to="/portfolio">
          Portfolio
        </Link>
        <Link className="nav-item nav-link" to="/careers">
          Career
        </Link>
        <Link className="nav-item nav-link" to="/contactus">
          Contact Us
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
