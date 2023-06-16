import React from 'react'
import './App.css';

//Components
import NavBar from "./components/Navbar/Navbar"
import CardUser from "./components/CardUser/CardUser"
import CardList from "./components/CardList/CardList"

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='Cards-Container'>
        <CardList/>
      </div>
    </div>
  );
}

export default App;
