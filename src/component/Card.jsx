import React from "react";
import "./Card.css";
const Card = ({ data }) => {
  return (
    <div className="second">
      <h1 className="featureLine">
        Featur<span className="middle">ed pr</span>oducts
      </h1>
      <div className="cardParent">
        {data &&
          data.map((item) => (
            <div key={item.id}>
              <div className="card">
                <img
                  className="cardImage"
                  src={item.image}
                  alt="product-logo"
                />
                <div>
                  <h5 className="cardTitle">{item.title}</h5>
                  <div
                    className="textthings"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p className="cardCategory">{item.category}</p>
                    <p className="cardPrice">₹{Math.round(item.price * 83)}</p>
                  </div>
                </div>
                <button className="add-button">Add cart</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Card;
