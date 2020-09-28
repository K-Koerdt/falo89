import React from "react";
import "./Offer.scss";

export const Offer = () => {
  return (
    <div className="container" id="offer">
      <div className="container__h2__div">
        <h2>
          Angebote <span style={{ color: "orange" }}>&</span> Vorführungen
        </h2>
      </div>
      <div className="grid-container">
          <div id="whitespace"></div>
          <div id="offer-content"><img src="./images/stab.jpg" alt=""/></div>
          <div id="whitespace"></div>
          <div id="offer-content"><img src="./images/card.jpg" alt=""/></div>
          <div id="whitespace"></div>          
          <div id="offer-content"><img src="./images/ball2.jpg" alt=""/></div>
          <div id="whitespace"></div>
      </div>
    </div>
  );
};
