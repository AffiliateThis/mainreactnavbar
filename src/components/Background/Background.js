import React from "react";
import background from "../Background/backgroundt.png";

function Backgroundimage() {
  return (
    <div styles={{ backgroundImage: `url(${background})` }}>
      <h2>
        Please complete the form, and I will reach out as soon as possible
      </h2>
    </div>
  );
}

export default Backgroundimage;
