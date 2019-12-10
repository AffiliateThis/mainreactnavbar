import React from "react";
import Background from "../Background/Background";

import "./Backdrop.css";
import Backgroundimage from "../Background/Background";
//  this executes whats in the click handler of the method in the function
const backDrop = props => <div onClick={props.click} />;

export default backDrop;
