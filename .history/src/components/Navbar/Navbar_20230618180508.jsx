import React from "react";
import "./Navbar.css";
import logo from "./cat-logo.svg";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidged/CartWidget";

const NavBar = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-ul">
        <img src={logo} alt="gatito" style={{ height: 50, width: 50 }} />
        <li className="li">
          <Link to="/" className="li">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="li">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="li">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/cart" className="li">
            Cart
          </Link>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
