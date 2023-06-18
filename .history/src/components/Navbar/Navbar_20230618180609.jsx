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
          <Link to="/">Home</Link>
        </li>
        <li className="li">
          <Link to="/about">About</Link>
        </li>
        <li className="li">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="li">
          <Link to="/cart" className="li"></Link>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
