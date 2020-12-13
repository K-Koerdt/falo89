import React from "react";
import "./Offer.scss";

export const Offer = () => {
  return (
    <div className="offer__container" id="offer">
      <div className="offer__basic-view">
        <input type="checkbox" id="zauberkurs-checkbox" />
        <input type="checkbox" id="zaubershow-checkbox" />

        <label for="zauberkurs-checkbox" className="zauberkurs-checkbox">
          <div className="zauberkurs-backdrop"></div>
        </label>

        <label for="zaubershow-checkbox" className="zaubershow-checkbox">
          <div className="zaubershow-backdrop"></div>
        </label>

        <div className="offer__container__h2__div">
          <h2>Angebote</h2>
          <p className="offer__text">
            Mit Hingabe teile ich Zauberkunststücke, die zum Lachen, Wohlfühlen
            und Bewundern einladen. Vieles wird verständlich, obwohl "die Magie"
            dahinter unverständlich bleibt. Die Gäste werden lebhaft mit
            einbezogen. Das Publikum staunt, während es einzigartig unterhalten
            wird. Das Event wird unvergesslich, es bleibt eine gemeinsame,
            schöne Erinnerung.
          </p>
        </div>
        <div className="grid-container">
          <label for="zauberkurs-checkbox" className="zauberkurs-checkbox">
            <div className="image-wrapper img1">
              <div className="image">
                <img className="image__img" src="./images/fabi2.jpg" alt="" />
                <div className="image__overlay image__overlay--blur">
                  <div className="image__title"> Zauberkurse </div>
                  <p className="image__description">Welt der Täuschungen</p>
                </div>
              </div>
              <div className="mobile-text">
                <h3>Close Up Zauberei</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
              </div>
            </div>
          </label>

          <label for="zaubershow-checkbox" className="zaubershow-checkbox">
            <div className="image-wrapper img2">
              <div className="image">
                <img className="image__img" src="./images/fabi1.jpg" alt="" />
                <div className="image__overlay image__overlay--blur">
                  <div className="image__title"> Show </div>
                  <p className="image__description">
                    Lassen Sie sich verzaubern
                  </p>
                </div>
              </div>
              <div className="mobile-text">
                <h3>Shows</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
              </div>
            </div>
          </label>
        </div>

        <div className="offer-flyout-zauberkurs">
          <div className="offer-flyout-zauberkurs--content">
            <h2 className="offer-flyout__headline">Zauberkurse</h2>
          </div>
        </div>
        <div className="offer-flyout-zaubershow">
          <div className="offer-flyout-zaubershow--content">
            <h2 className="offer-flyout__headline">Zaubershow</h2>
            <div className="offer-flyout__inner-content">
              <h3 className="subheadline">Buchen Sie eine Zaubershow</h3>
              <textarea
                className="input"
                name=""
                id=""
                rows="10"
                placeholder="Ihre Nachricht"
              ></textarea>
              <p className="text">Schicken Sie mir Ihre Buchungsanfrage.</p>
              <p className="text">Anschließend lasse ich Ihnen ein Angebot zukommen.</p>
              <button className="zaubershow-button">Absenden</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
