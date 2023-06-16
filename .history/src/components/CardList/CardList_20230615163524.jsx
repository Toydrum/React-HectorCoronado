import React, { useState, useEffect } from 'react';
import CardUser from '../CardUser/CardUser';
import './CardList.css'


const CardList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => setUsers(data))
  },[])
  
  
  return(
    <div className="Cards-List">
      {users.map((user) =>{
        return(
          <div key={user}>
            <CardUser/>
          </div>
        )
      })}

    </div>
  )
  
}

export default CardList;