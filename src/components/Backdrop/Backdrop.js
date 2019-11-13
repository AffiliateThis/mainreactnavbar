import React from "react";

import "./Backdrop.css";
//  this executes whats in the click handler of the method in the function
const backDrop = props => (<div className="backdrop" onClick={props.click} />
);

export default backDrop;
