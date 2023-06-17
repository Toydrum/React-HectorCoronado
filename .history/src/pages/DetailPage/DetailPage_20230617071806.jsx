import { useState, useEffect } from "react";
import axios from "axios";

const DetailPage = () => {
  const [gato, setGato] = useState([]);

  console.log(gato);

  useEffect(() => {
    axios(`${process.env.REACT_APP_BASE_URL}`).then((json) =>
      setGato(json.data)
    );
  });

  return <div>DetailPage</div>;
};

export default DetailPage;
