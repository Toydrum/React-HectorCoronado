import { useState, useEffect } from "react";
import axios from "axios";

const DetailPage = () => {
  const [gato, setGato] = useState([]);

  useEffect(() => {
    axios(`${process.env.REACT_APP_BASE_URL}`).then((json) =>
      setGato(json.data.results)
    );
  });

  return <div>DetailPage</div>;
};

export default DetailPage;
