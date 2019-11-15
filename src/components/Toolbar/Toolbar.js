import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import Landingpage from "../Landingpage/Landingpage";
import About from "../About/About";

const toolbar = props => (
  <header className="toolbar">
    <Router>
      <nav className="toolbar_navigation">
        <div className="toolbar_toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar_logo">
          <Link to="/">Home</Link>
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
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        {/* <Route path="/contact">
            <Users />
          </Route> */}
        <Route path="/">
          <Landingpage />
        </Route>
      </Switch>
    </Router>
  </header>
);

export default toolbar;
