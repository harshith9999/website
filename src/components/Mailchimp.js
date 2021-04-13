import React, { Component } from "react";
import Mailchimp from "react-mailchimp-form";

class App extends Component {
  render() {
    return (
      <Mailchimp
        action="https://gmail.us1.list-manage.com/subscribe/post?u=cae7d11d3ef65e030c69f3064&amp;id=e994f51be0"
        fields={[
          {
            name: "EMAIL",
            placeholder: "Email",
            type: "email",
            required: true,
          },
          {
            name: "FNAME",
            placeholder: "First Name",
            type: "text",
            required: true,
          },
          {
            name: "LNAME",
            placeholder: "Last Name",
            type: "text",
            required: true,
          },
        ]}
        messages={{
          sending: "Sending...",
          success: "Thank you for Registering!",
          error: "An unexpected internal error has occurred.",
          empty: "You must write an e-mail.",
          duplicate: "Too many subscribe attempts for this email address",
          button: "Register",
        }}
        className="d-flex flex-column w-25"
      />
    );
  }
}

export default App;
