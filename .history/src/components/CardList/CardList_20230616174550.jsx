import React, { useState, useEffect } from "react";
import CardUser from "../CardUser/CardUser";
import "./CardList.css";
//import axios from 'axios';

const CardList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/src/info.json")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  console.log(users);
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
