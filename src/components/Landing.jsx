import "./Landing.scss";
import React from "react";
import { Welcome } from "./Welcome";
import { Offer } from "./Offer.jsx";
import { Footer } from "./Footer.jsx";
import References from "./References";

export default function Landing() {

  return (
    <div className="container" id="landing">
      <section className="showcase">
        <div className="video-container">
          <video src="./video/Bokeh.mp4" autoPlay muted loop></video>
        </div>
        <div className="content">
          <h1>Fabian Lorenz</h1>
        </div>
      </section>
      <Welcome />
      <Offer />
      <References/>
      <div id="news" className="container__newsletter">Newsletter</div>
      <div id="explore" className="container__newsletter">Entdecken</div>
      <Footer />
    </div>
  );
}
