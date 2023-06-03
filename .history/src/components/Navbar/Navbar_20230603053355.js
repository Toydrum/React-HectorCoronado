import React from 'react'
import "./NavBar.css"

const styles = {
  NavBar: {
    display: "flex",
    listStyleType: "none",
    fontFamily: "sans-serif",
    backgroundColor: "blue",
    margin:0,
    padding:0,
    height:60
  }
}
const styles2 = {
  elem: {
    display: "flex",
    justifyContent: "space-around"
  }
}

const NavBar =() => {
  return (
    <nav>
      <ul style={styles.NavBar}>
        <li style={styles2.elem}>Inicio</li>
        <li style={styles2.elem}>About</li>
        <li style={styles2.elem}>Contact</li>
      </ul>
    </nav>
  )
}

export default NavBar

