import React from "react";

import "./SideDrawer.css";
import "../Main"

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';

  }

  return (
    <nav className={drawerClasses}>
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
    </nav>
  );
};

export default sideDrawer;
