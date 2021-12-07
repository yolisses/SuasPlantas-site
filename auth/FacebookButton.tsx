import { Component } from "react";

export class FacebookButton extends Component {
  constructor(props) {
    super(props);
  }

  customCallback(e) {
    console.log("ONE TAP version 2 ", e);
  }

  componentDidMount() {
    window.customCallback = this.customCallback;
  }

  render() {
    return (
      <div>
        <div
          className="fb-login-button"
          data-width="300"
          data-size="large"
          data-button-type="continue_with"
          data-layout="rounded"
          data-auto-logout-link="false"
          data-use-continue-as="true"
          data-onlogin="customCallback"
        />
      </div>
    );
  }
}
