import React from "react";
import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="container__footer" id="footer">
      <div className="container__footer__links">
        <h3> Fabian Lorenz</h3>
        <p> Kontakt </p>
        <p> Angebote </p>
        <p>AGB</p>
        <p>Disclaimer</p>
        <p>Datenschutz</p>
        <p>Impressum</p>
      </div>
      <div className="container__footer__contact">
        <h3>Ich bin für Sie da.</h3>
        <p className="container__footer__contact__phone"> 015353857568</p>
        <p className="container__footer__contact__time">
          Montags bis Freitags von 8 bis 18 Uhr
        </p>
      </div>
      <div className="container__footer__newsletter">
        <div>
          <h3>Newsletter</h3>
          <input type="text" />
          <button>Abonnieren</button>
        </div>
        <div className="container__footer__newsletter__social">
            <img src="./images/facebook.svg" alt="facebook"/>
            <img src="./images/instagram.svg" alt="facebook"/>
            <img src="./images/email.svg" alt="facebook"/>
        </div>
      </div>
    </div>
  );
};
