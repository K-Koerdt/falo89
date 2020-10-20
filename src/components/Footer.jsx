import React from "react";
import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="container__footer" id="footer">
      <div className="container__footer__links">
        <h3 style={{padding: "20px 0"}}> Quick Links</h3>
        <p> Kontakt </p>
        <p> Angebote </p>
        <p>AGB</p>
        <p>Disclaimer</p>
        <p>Datenschutz</p>
        <p>Impressum</p>
      </div>
    </div>
  );
};
