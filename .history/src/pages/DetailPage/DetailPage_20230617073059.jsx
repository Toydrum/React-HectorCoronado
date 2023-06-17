import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const [gato, setGato] = useState({});

  let { id } = useParams();

  console.log(gato);

  useEffect(() => {
    axios(`https://648d19168620b8bae7ed8d6a.mockapi.io/api/bugs/${id}`).then(
      (json) => setGato(json.data)
    );
  }, [id]);

  return <div>DetailPage</div>;
};

export default DetailPage;