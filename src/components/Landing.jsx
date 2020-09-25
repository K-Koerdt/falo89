import React from "react";
import "./Landing.scss";

export default function Landing() {
  return (
    <div className="container">
      <nav id="nav" className="container__nav">
        <div className="container__nav__div1">Falo89</div>
        <div className="container__nav__div2"><span>Angebot</span><span>Referenzen</span><span>Entdecken</span><span>Kontakt</span></div>
      </nav>
      <div className="container__video">
        <div className="container__video__div">
          <iframe
            src="https://www.youtube.com/embed/5qap5aO4i9A"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="container__welcome"><h1>Willkommen</h1></div>
      <div className="container__offer">Angebote</div>
      <div className="container__references">Referenzen</div>
      <div className="container__newsletter">Newsletter</div>
      <div className="container__explore">Entdecken</div>
      <footer>Footer</footer>
    </div>
  );
}
