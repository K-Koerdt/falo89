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
          <video
            class="landing__video"
            src="./video/Underwater.mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>

        <div className="content">
          <div className="upper-part">
            <Welcome />
          </div>
          <div className="lower-part">
            <h1 class="name__headline">Fabian Lorenz Zauberei</h1>
          </div>
        </div>
      </section>
      <div className="container__offer">
        <Offer />
      </div>
      <References />

      <div
        style={{ margin: "4em" }}
        id="explore"
        className="container__newsletter"
      >
        Entdecken
      </div>
      <Footer />
    </div>
  );
}
