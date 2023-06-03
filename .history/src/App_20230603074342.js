import React from 'react'
import './App.css';

//Components
import NavBar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/Contenedor/ItemListContainer"


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer/>
    </div>
  );
}

export default App;
