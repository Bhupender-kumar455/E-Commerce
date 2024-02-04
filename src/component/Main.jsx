import React from "react";
import main from "../assets/frontPage.jpg";
import "./Main.css";
const Main = () => {
  return (
    <div className="mainParent">
      <img src={main} alt="wall-logo" />
      <div className="textPart">
        <p>Men & Women & ElectroNic collection</p>
        <h1>
          A simple <br /> guide to
          <br /> minimilist style.
        </h1>
        <button className="shopNowButton">Shop now</button>
      </div>
    </div>
  );
};

export default Main;
