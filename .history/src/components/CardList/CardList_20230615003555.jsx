import React, { useState, useEffect } from 'react';

const CardList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  },[])
  
  
  return <div>CardList</div>;
  
}

export default CardList;