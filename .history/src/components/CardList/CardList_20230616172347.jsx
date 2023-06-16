import React, { useState, useEffect } from 'react';
import CardUser from '../CardUser/CardUser';
import './CardList.css'
import info from './info.json';
//import axios from 'axios';


const CardList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() =>{
    fetch('../info.json')
      .then(info => info.json())
      .then(data => setUsers(data))
  },[])
  
  
  return(
    <div className="Cards-List">
      {users.map((user) =>{
        return(
          <div key={user.id}>
            <CardUser data={user}/>
          </div>
        )
      })}

    </div>
  )
  
}

export default CardList;