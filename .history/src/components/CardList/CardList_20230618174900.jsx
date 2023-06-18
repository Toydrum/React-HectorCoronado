import React, { useState, useEffect } from "react";
import CardUser from "../CardUser/CardUser";
import "./CardList.css";
import { Link } from "react-router-dom";

const CardList = () => {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProd(data));
  }, []);

  return (
    <div className="Cards-List">
      {prod.map((prod) => {
        return (
          <Link to={`detail/${prod.id}`}>
            <div key={prod.id}>
              <CardUser data={prod} />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CardList;
