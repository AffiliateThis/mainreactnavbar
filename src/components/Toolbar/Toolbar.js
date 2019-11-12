import React from "react";

import "./Toolbar.css";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div></div>
      <div className="toolbar_logo">
        <a href="/"> THE LOGO</a>
      </div>
      <div className="navigation_items">
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
