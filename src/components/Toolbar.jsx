import React from "react";
import './Toolbar.scss'
import './DrawerToggleButton'
import DrawerToggleButton from "./DrawerToggleButton";


const Toolbar = (props) => {
  
  return (
    <header className="toolbar">
    <nav id="nav" className="toolbar__navigation">

    <div className="toolbar__toggle-button">
     <DrawerToggleButton click={props.drawerClickHandler} />
     </div>
      <div className="toolbar__navigation__logo">Logo</div>
      <div className="toolbar__navigation__items">
        <a >Angebot</a>
        <a href="">Referenzen</a>
        <a href="">Entdecken</a>
        <a href="">Kontakt</a>
      </div>
    </nav>
  </header>
  )
}


export default Toolbar;