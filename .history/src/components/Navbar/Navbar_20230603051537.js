import React from 'react'
import "./NavBar.css"

const styles = {
  NavBar: {
    display: "flex",
    listStyleType: "none"
  }
}

const NavBar =() => {
  return (
    <nav>
      <ul className="NavBar">
        <li>Inicio</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default NavBar

