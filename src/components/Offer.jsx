import React from "react";
import "./Offer.scss";

export const Offer = () => {
  return (
    <div className="container" id="offer">
      <div className="container__h2__div">
        <h2>
          Angebote 
        </h2>
      </div>
      <div className="grid-container">
        <div className="whitespace"></div>
        <div className="image-wrapper">
          <div className="image">
            <img className="image__img" src="./images/cube.jpg" alt="" />
            <div className="image__overlay image__overlay--blur">
              <div className="image__title"> Close Up </div>
              <p className="image__description">Zaubertricks aus der Nähe</p>
            </div>
          </div>
          <div className="mobile-text">
          <h3 >Close Up Zauberei</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </p>
          </div>
        </div>
        <div className="whitespace"></div>
        <div className="image-wrapper">
          <div className="image">
            <img className="image__img" src="./images/card.jpg" alt="" />
            <div className="image__overlay image__overlay--blur">
              <div className="image__title"> Show </div>
              <p className="image__description">Lassen Sie sich verzaubern</p>
            </div>
          </div>
          <div className="mobile-text">
          <h3 >Shows</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </p>
          </div>
        </div>
        <div className="whitespace"></div>
        <div className="image-wrapper">
          <div className="image">
            <img className="image__img" src="./images/lab.jpg" alt="" />
            <div className="image__overlay image__overlay--blur">
              <div className="image__title"> Zauberkurse </div>
              <p className="image__description">Welt der Täuschungen</p>
            </div>
          </div>
          <div className="mobile-text">
          <h3 >Zauberkurse</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </p>
          </div>
        </div>
        <div className="whitespace"></div>
      </div>
    </div>
  );
};
