import React from "react";
import "./Welcome.scss";

export const Welcome = () => {
  return (
    <>
      <div className="container__welcome">
        <div className="container__welcome__h1">
          <h1
            className="container__welcome__h1__1"
            style={{ paddingTop: "0.8em" }}
          >
            Herzlich
          </h1>
          <div className="container__welcome__h1__2__div">
            <h1
              className="container__welcome__h1__2"
              style={{ paddingBottom: "0.5em", color: "orange" }}
            >
              Willkommen
            </h1>
          </div>
        </div>
       
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </p>
      </div>
    </>
  );
};
