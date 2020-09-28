import React from "react";
import "./Toolbar.scss";
import "./DrawerToggleButton";
import DrawerToggleButton from "./DrawerToggleButton";
import { Link } from "react-scroll";

const Toolbar = (props) => {
  return (
    <header className="toolbar">
      <nav id="nav" className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__navigation__logo">
          <Link
            activeClass="false"
            to="landing"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Logo
          </Link>
        </div>
        <div className="toolbar__navigation__items">
          <Link
            activeClass="active"
            to="offer"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Angebot
          </Link>{" "}
          <Link
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Referenzen
          </Link>{" "}
          <Link
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Entdecken
          </Link>
          <Link
            activeClass="active"
            to="footer"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Kontakt
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
