import React, { useState } from "react";
import "./App.css";
import Landing from "./components/Landing";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";
import Toolbar from "./components/Toolbar";

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  let sideDrawer;
  let backdrop;
  if (sideDrawerOpen) {
    sideDrawer = <SideDrawer />;
    backdrop = <Backdrop />;
  }

  return (
    <div style={{ height: "100%" }}>
      <Toolbar drawerClickHandler={drawerToggleClickHandler}></Toolbar>
      <Landing></Landing>
      {sideDrawer}
      {backdrop}
     
    </div>
  );
}

export default App;
