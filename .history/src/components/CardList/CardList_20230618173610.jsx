import React, { useState, useEffect } from "react";
import CardUser from "../CardUser/CardUser";
import "./CardList.css";
import { Link } from "react-router-dom";

console.log(process.env);
const CardList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="Cards-List">
      {users.map((user) => {
        return (
          <Link to={`detail/${user.id}`}>
            <div key={user.id}>
              <CardUser data={user} />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CardList;
