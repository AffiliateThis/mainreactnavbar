import React from "react";

import "./SideDrawer.css";

const sideDrawer = props => (
  <nav className="side-drawer">
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

export default sideDrawer;
