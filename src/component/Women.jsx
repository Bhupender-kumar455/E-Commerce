import React from "react";
import Card from "./Card";
import axios from "axios";
import { useState, useEffect } from "react";
import Appbar from "./Appbar";

const Women = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get("https://fakestoreapi.com/products").then((data) => {
          let real = data.data;
          const men = real.filter(
            (sortt) =>
              sortt.category === "women's clothing" ||
              sortt.category === "jewelery"
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
      <Card data={data} />
    </div>
  );
};

export default Women;
