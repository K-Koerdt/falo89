import React from "react";
import "./SideDrawer.scss";

const SideDrawer = props => {
    
  let drawerClasses = 'side-drawer';
  console.log(props.show)
      
  if(props.show) {
        drawerClasses = 'side-drawer open'
      }

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
