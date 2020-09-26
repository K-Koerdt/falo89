import "./Landing.scss";
import React from 'react';
import Toolbar from "./Toolbar"

export default function Landing() {

  

  return (
    <div className="container">
      <Toolbar></Toolbar>
     
      <section className="showcase"> 
        <div className="video-container">
          <video src="./video/Underwater.mp4" autoPlay muted loop></video>
        </div>
        <div className="content">
           <h1>Fabian Lorenz</h1>
        
        </div>
      </section>
      <div className="container__welcome">Willkommen</div>
      <div className="container__offer"> Angebote</div>
      <div className="container__references">Referenzen</div>
      <div className="container__newsletter">Newsletter</div>   
      <div className="container__newsletter">Entdecken</div>
      <footer>Footer</footer>
    </div>
  );
}
