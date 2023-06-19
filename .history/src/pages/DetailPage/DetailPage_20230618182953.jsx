import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardUser from "../../components/CardUser/CardUser";

const DetailPage = () => {
  const [prod, setProd] = useState({});

  let { id } = useParams();

  console.log(prod);

  useEffect(() => {
    axios(`'https://fakestoreapi.com/products'${id}`).then((json) =>
      setProd(json.data)
    );
  }, [id]);

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>DetailPage</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {prod.id ? <CardUser data={prod} /> : null}
      </div>
    </div>
  );
};

export default DetailPage;