import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const [gato, setGato] = useState([]);

  let { id } = useParams();

  console.log(gato);

  useEffect(() => {
    axios(`${process.env.REACT_APP_BASE_URL}`).then((json) =>
      setGato(json.data)
    );
  });

  return <div>DetailPage</div>;
};

export default DetailPage;
