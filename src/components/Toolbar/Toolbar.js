import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import Landingpage from "../Landingpage/Landingpage";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import Meettheteam from "../Meettheteam/Meettheteam";

const toolbar = props => (
  <header className="toolbar">
    <Router>
      <nav className="toolbar_navigation">
        <div className="toolbar_toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar_logo">
          <Link to="/">HOME</Link>
        </div>
        <div className="spacer"></div>

        <div className="toolbar_navigation_items">
          <ul>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/services">SERVICES</Link>
            </li>
            <li>
              <Link to="/meettheteam">MEET THE TEAM</Link>
            </li>

            <li>
              <Link to="/contact">CONTACT US</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Switch>
        <Route exact path="/">
          <Landingpage />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/services">
          <Services />
        </Route>

        <Route path="/meettheteam">
          <Meettheteam />
        </Route>
      </Switch>
    </Router>
  </header>
);

export default toolbar;
