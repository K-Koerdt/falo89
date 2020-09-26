import "./Landing.scss";
import React from 'react';

export default function Landing() {

  

  return (
    <div className="container">
   <nav id="nav" className="container__nav">
        <div className="container__nav__div1">Logo</div>
        <div className="container__nav__div2">
          <span>Angebot</span>
          <span>Referenzen</span>
          <span>Entdecken</span>
          <span>Kontakt</span>
        </div>
      </nav> 
      <section className="showcase">
        <div className="video-container">
          <video src="./video/Underwater.mp4" autoPlay muted loop></video>
        </div>
        <div className="content">
           <h1>Fabian Lorenz</h1>
        
        </div>
      </section>
      <div className="container__welcome">
        <h2>Willkommen</h2>
      </div>
      <div className="container__offer">Angebote</div>
      <div className="container__references">Referenzen</div>
      <div className="container__newsletter">Newsletter</div>   
      <div className="container__newsletter">Entdecken</div>
      <footer>Footer</footer>
    </div>
  );
}
