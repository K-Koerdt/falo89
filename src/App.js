import React, { useState } from "react";
import "./App.css";
import Landing from "./components/Landing";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";
import Toolbar from "./components/Toolbar";

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  let backdrop;

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;

  }

  return (
    <div style={{ height: "100%" }}>
      <Toolbar drawerClickHandler={drawerToggleClickHandler}></Toolbar>
      <Landing></Landing>
      <SideDrawer show={sideDrawerOpen}></SideDrawer>
      {backdrop}
    </div>
  );
}

export default App;
