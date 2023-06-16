import React, { useState, useEffect } from 'react';

const CardList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => console.log(data))
  },[])
  
  
  return <div>CardList</div>;
  
}

export default CardList;