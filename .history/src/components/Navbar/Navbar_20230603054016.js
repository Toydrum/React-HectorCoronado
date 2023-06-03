import React from 'react'
import "./NavBar.css"

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
    <nav style={styles.NavBar}>
      <ul>
        <li>Inicio</li>
        <li>About</li>
        <li>Contacto</li>
      </ul>
    </nav>
  )
}

export default NavBar

