import React, { Component } from "react";

import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

class App extends Component {
  state = { SideDrawerOpens: false };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { SideDrawerOpen: !prevState.SideDrawerOpen };
    });
  };

  render() {
    let sideDrawer;
    let backdrop;

    return (
      <div style={{ height: "100%" }}>
        <Toolbar />
        <SideDrawer />
        <Backdrop />

        <main style={{ marginTop: "64px" }}>
          <p>This is the page content</p>
        </main>
      </div>
    );
  }
}

export default App;
