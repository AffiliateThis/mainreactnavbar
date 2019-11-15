import React from "react";
import { Switch, Route } from "react-router-dom";

import About from "./About/About";
import Landingpage from "./Landingpage/Landingpage";
// import Location from "./Pages/Location";
// import Meettheteam from "./Pages/Meettheteam";
// import Services from "./Pages/Services";
// import Contact from "./Pages/Contact";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Landingpage} />
    <Route path="/about" component={About} />
    {/* <Route path="/contact" component={Contact} />
      <Route path="/location" component={Location} />
      <Route path="/meettheteam" component={Meettheteam} />
      <Route path="/services" component={Services} /> */}
  </Switch>
);

export default Main;
