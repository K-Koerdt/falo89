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
        <div className="whitespace"></div>
        <div className="image">
          <img className="image__img" src="./images/lab.jpg" alt="" />
          <div className="image__overlay">
            <div className="image__title"> Close Up </div>
            <p className="image__description">Zaubertricks aus der Nähe</p>
          </div>
        </div>
        <div className="whitespace"></div>
        <div className="image">
          <img className="image__img" src="./images/card.jpg" alt="" />
          <div className="image__overlay">
            <div className="image__title"> Show </div>
            <p className="image__description">Lassen Sie sich verzaubern</p>
          </div>
        </div>
        <div className="whitespace"></div>
        <div className="image">
          <img className="image__img" src="./images/lab.jpg" alt="" />
          <div className="image__overlay">
            <div className="image__title"> Zauberei </div>
            <p className="image__description">
              Welt der Täuschungen
            </p>
          </div>
        </div>
        <div className="whitespace"></div>
      </div>
    </div>
  );
};
