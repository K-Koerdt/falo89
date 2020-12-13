import React, {useState} from "react";
import "./Toolbar.scss";
import "./DrawerToggleButton";
import DrawerToggleButton from "./DrawerToggleButton";
import { Link } from "react-scroll";

const Toolbar = (props) => {

  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
   if(window.scrollY >= 700) {
     setNavbar(true) }
     else {
       setNavbar(false)
     }
   }


  

  window.addEventListener('scroll', changeBackground)

  return (
    <header className={ navbar ? 'toolbar activate' : 'toolbar'}>
      <nav id="nav" className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
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
            Angebote
          </Link>{" "}
          <Link
            activeClass="active"
            to="references"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Referenzen
          </Link>{" "}
          <Link
            activeClass="active"
            to="explore"
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
