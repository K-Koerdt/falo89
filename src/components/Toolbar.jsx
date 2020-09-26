import React from "react";
import './Toolbar.scss'
const Toolbar = (props) => (
  <header className="toolbar">
    <nav id="nav" className="toolbar__navigation">
      <div className="toolbar__navigation__logo">Logo</div>
      <div className="toolbar__navigation__items">
        <a href="">Angebot</a>
        <a href="">Referenzen</a>
        <a href="">Entdecken</a>
        <a href="">Kontakt</a>
      </div>
    </nav>
  </header>
);

export default Toolbar;