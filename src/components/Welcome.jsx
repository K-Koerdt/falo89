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
          Mit Hingabe teile ich Zauberkunststücke, die zum Lachen, Wohlfühlen und Bewundern einladen. 
          Vieles wird verständlich, obwohl "die Magie" dahinter unverständlich bleibt. Die Gäste werden lebhaft mit einbezogen.
          Das Publikum staunt, während es einzigartig unterhalten wird. Das Event wird unvergesslich, es bleibt eine gemeinsame, schöne Erinnerung.
        </p>
      </div>
    </>
  );
};
