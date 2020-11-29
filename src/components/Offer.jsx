import React from "react";
import "./Offer.scss";

export const Offer = () => {
  return (
    <div className="offer__container" id="offer">
      <div className="offer__container__h2__div">
        <h2>
          Angebote 
        </h2>
      </div>
      <div className="grid-container">
        <div className="image-wrapper img1">
          <div className="image">
            <img className="image__img" src="./images/cube.jpg" alt="" />
            <div className="image__overlay image__overlay--blur">
              <div className="image__title"> Zauberkurse </div>
              <p className="image__description">Welt der Täuschungen</p>
            </div>
          </div>
          <div className="mobile-text">
          <h3 >Close Up Zauberei</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </p>
          </div>
          <a href="">Mehr Infos</a>
        </div>

        <div className="image-wrapper img2">
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
          <a href="">Mehr Infos</a>
        </div>

    {/*     <div className="image-wrapper img3">
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
        </div> */}
    
      </div>
    </div>
  );
};
