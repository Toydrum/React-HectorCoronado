import React, { useState, useEffect } from "react";
import CardUser from "../CardUser/CardUser";
import "./CardList.css";

console.log(process.env);
const CardList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_URL)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

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
