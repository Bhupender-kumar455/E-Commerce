import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Appbar from "./Appbar";
import Main from "./Main";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = axios
          .get("https://fakestoreapi.com/products")
          .then((data) => {
            let realData = data.data;
            setData(realData);
          });
      } catch (error) {
        console.log("Error in fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Appbar />
      <Main />
      <Card data={data} />
    </div>
  );
};

export default Home;
