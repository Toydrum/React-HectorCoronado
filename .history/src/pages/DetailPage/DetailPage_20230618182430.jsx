import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardUser from "../../components/CardUser/CardUser";

const DetailPage = () => {
  const [gato, setGato] = useState({});

  let { id } = useParams();

  console.log(gato);

  useEffect(() => {
    axios(`'https://fakestoreapi.com/products'${id}`).then((json) =>
      setGato(json.data)
    );
  }, [id]);

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>DetailPage</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {gato.id ? <CardUser data={gato} /> : null}
      </div>
    </div>
  );
};

export default DetailPage;
