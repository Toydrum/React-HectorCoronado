import React from "react";
import "./Navbar.css";
import ItemListContainer from "../Contenedor/ItemListContainer";
import CartWidget from "../CartWidged/CartWidget";
import logo from "./cat-logo.jpg";
const styles = {
  NavBar: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    listStyleType: "none",
    fontFamily: "sans-serif",
    backgroundColor: "blue",
    margin: 0,
    padding: 0,
    height: 60,
  },
};

const NavBar = () => {
  return (
    <>
      <nav>
        <ul style={styles.NavBar}>
          <img src={logo} className="catLogo" />
          <CartWidget />
          <ItemListContainer contador="8" />
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
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
