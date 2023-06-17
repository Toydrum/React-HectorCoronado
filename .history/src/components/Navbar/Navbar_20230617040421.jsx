import React from "react";
import "./Navbar.css";
import ItemListContainer from "../Contenedor/ItemListContainer";
import CartWidget from "../CartWidged/CartWidget";
import logo from "./cat-logo.svg";
const styles = {
  NavBar: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    listStyleType: "none",
    fontFamily: "sans-serif",
    backgroundColor: "#FFAF33",
    margin: 0,
    padding: 0,
    height: 80,
  },
};

const NavBar = () => {
  return (
    <>
      <nav>
        <ItemListContainer contador="8" />
        <ul style={styles.NavBar}>
          <img src={logo} className="catLogo" alt="gatito" />
          <li>
            <a className="link" href="https://www.google.com.mx/?hl=es">
              Inicio
            </a>
          </li>
          <li>
            <a className="link" href="https://www.google.com.mx/?hl=es">
              About
            </a>
          </li>
          <li>
            <a className="link" href="https://www.google.com.mx/?hl=es">
              Contacto
            </a>
          </li>
          <CartWidget />
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
