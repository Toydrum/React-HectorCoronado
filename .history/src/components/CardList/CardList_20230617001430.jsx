import React, { useState, useEffect } from "react";
import CardUser from "../CardUser/CardUser";
import "./CardList.css";
//import axios from 'axios';

const CardList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://648d19168620b8bae7ed8d6a.mockapi.io/api/")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  //console.log(users);
  return (
    <div className="Cards-List">
      {users.map((user) => {
        return (
          <div key={user.id}>
            <CardUser data={user} />
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
