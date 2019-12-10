import React from "react";
import "./Contact.css";

import HubspotForm from "react-hubspot-form";

const Contact = props => (
  <div>
    <h1 className="headerContent">Please submit your information</h1>
    <HubspotForm
      className="form"
      portalId="6316507"
      formId="7785b4d1-85b5-454c-bb4b-921882b569b0"
      onSubmit={() => console.log("Submit!")}
      onReady={form => console.log("Form ready!")}
      loading={<div>Loading...</div>}
    />
  </div>
);

export default Contact;
