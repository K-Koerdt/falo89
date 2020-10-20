import React from "react";
import "./References.scss";
import Slider from "./Slider";

export default function References() {
  const referencesList = [
    { person: "Frank", text: "Amazing Show of Fabian" },
    { person: "Melanie", text: "Wahnsinn" },
    { person: "Strasser", text: "Aufregend und Spannend" },
    { person: "Peter", text: "Kaum zu glauben" },
  ];

  return (
    <div className="ref__container">
  {/*     <div className="ref__container__title">
        <h2>Referenzen</h2>
      </div> */}
      <div className="ref__container__reftext">
        <Slider
          options={{
            /* autoPlay: 4000, */
            pauseAutoPlayOnHover: true,
            wrapAround: true,
            fullscreen: true,
            adaptiveHeight: true,
          }}
        >
          {referencesList.map((reference, index) => (
            <div
              key={index}
              class="ref__container__reftext__content"
            >
              <img src="./images/quotation-mark.svg" alt="quotation_mark"/>

              <div>
              <h2>{reference.text}</h2>  
              <p>{reference.person}</p>
              </div>

              <img src="./images/quotation-right-mark.svg" alt="quotation_mark_right"/>
            </div>
          ))}
        </Slider>
      </div>
  
    </div>
  );
}
