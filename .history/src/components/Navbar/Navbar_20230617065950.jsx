import React from "react";
import "./Navbar.css";
import "./cat-logo.svg";

import { Link } from "react-router-dom";

const NavBar = () => {
  const logo = "./cat-logo.svg";
  return (
    <nav className="nav-container">
      <ul className="nav-ul">
        <img src={logo} alt="gatito" />
        <Link className="li" to="/">
          Home
        </Link>
        <Link className="li" to="/about">
          About
        </Link>
        <Link className="li" to="/contact">
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
