import React from 'react'
import "./Navbar.css"
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
        <img 
        src={"/src/pet.png"}
        alt={`kitty`}
        />
        <li className="li">Inicio</li>
        <li className="li">About</li>
        <li className="li">Contacto</li>
      </ul>
    </nav>
  )
}

export default NavBar

