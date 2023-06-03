import React from 'react'
import "./Navbar.css"
import "/public/assets/icons8-pet-commands-train-100.png"
const styles = {
  NavBar: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    listStyleType: "none",
    fontFamily: "sans-serif",
    backgroundColor: "blue",
    margin:0,
    padding:0,
    height:60
  }
}


const NavBar =() => {
  return (
    <nav>
      <ul style={styles.NavBar}>
      <img src="/public/assets/icons8-pet-commands-train-100.png" alt="Kitty"/>
        <li>Inicio</li>
        <li>About</li>
        <li>Contacto</li>
      </ul>
    </nav>
  )
}

export default NavBar

