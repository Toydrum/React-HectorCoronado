import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardUser from "../../components/CardUser/CardUser";

const DetailPage = () => {
  const [prod, setProd] = useState({});

  let { id } = useParams();

  console.log(prod);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/ ${id}`)
      .then((response) => response.json())
      .then((data) => setProd(data));
  }, [id]);

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>DetailPage</h1>
      <div
        style={{ display: "flex", justifyContent: "center", maxWidth: 1500 }}
      >
        {prod.id ? <CardUser data={prod} /> : null}
      </div>
    </div>
  );
};

export default DetailPage;
