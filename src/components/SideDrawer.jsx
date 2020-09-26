import React from "react";
import "./SideDrawer.scss";

const SideDrawer = props => {
    
  let drawerClasses = 'side-drawer';

      

    
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="">Angebot</a>
        </li>
        <li>
          <a href="">Referenzen</a>
        </li>
        <li>
          <a href="">Entdecken</a>
        </li>
        <li>
          <a href="">Kontakt</a>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
