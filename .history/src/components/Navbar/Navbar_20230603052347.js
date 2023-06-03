import React from 'react'
import "./NavBar.css"

const styles = {
  NavBar: {
    display: "flex",
    listStyleType: "none",
    fontFamily: "sans-serif",
    backgroundColor: "blue",
    margin:0
  }
}

const NavBar =() => {
  return (
    <nav>
      <ul style={styles.NavBar}>
        <li>Inicio</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default NavBar
