import React from 'react'
import "./Navbar.css"
import ItemListContainer from '../Contenedor/ItemListContainer';
import CartWidget from '../CartWidged/CartWidget'
import logo from 'https://images.app.goo.gl/aw1au5LxFTWUFGe97'
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
    
    <>
    <nav>
      <img src:{logo} />
      <ul style={styles.NavBar}>
        <CartWidget />
        <ItemListContainer 
          contador= "8"  
        />
        <li><a className="link" href="https://www.google.com.mx/?hl=es">Inicio</a></li>
        <li><a className="link" href="https://www.google.com.mx/?hl=es">About</a></li>
        <li><a className="link" href="https://www.google.com.mx/?hl=es">Contacto</a></li>
      </ul>
    </nav>
    
    </>
  )
}

export default NavBar

