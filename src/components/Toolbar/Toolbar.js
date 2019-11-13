import React from "react";

import "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar_toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="toolbar_logo">
        <a href="/"> THE LOGO</a>
      </div>
      <div className="spacer"></div>

      <div className="toolbar_navigation_items">
        <ul>
          <li>
            <a href="/about"> ABOUT</a>
          </li>
          <li>
            <a href="/services">SERVICES</a>
          </li>
          <li>
            <a href="/contact">CONTACT US</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
