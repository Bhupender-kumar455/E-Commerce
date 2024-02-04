import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Appbar from "./Appbar";
import loading from "../assets/Ring race.gif";
const Men = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get("https://fakestoreapi.com/products").then((data) => {
          let real = data.data;
          const men = real.filter(
            (sortt) =>
              sortt.category === "men's clothing" ||
              sortt.category === "electronics"
          );
          setData(men);
        });
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Appbar />
      {loading && <Card data={data} />}
    </div>
  );
};

export default Men;
