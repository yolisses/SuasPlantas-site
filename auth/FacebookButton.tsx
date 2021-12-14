import { Component } from "react";
import Head from "next/head";
import { signIn } from "./signIn";

interface FacebookResponse {
  authResponse: {
    accessToken: string;
  };
}

declare global {
  interface Window {
    handleFacebookResponse: (e: FacebookResponse) => void;
  }
}

export class FacebookButton extends Component {
  async handleFacebookResponse(e: FacebookResponse) {
    signIn("facebook", e.authResponse.accessToken);
  }

  constructor(props) {
    super(props);
    this.state = { loader: "start", script: "" };
  }

  componentDidMount() {
    window.handleFacebookResponse = this.handleFacebookResponse;
    this.setState({ loader: "did mount" });
  }

  componentDidUpdate() {
    if (this.state.loader === "did mount")
      this.setState({
        loader: "done",
        script: (
          <>
            <script
              async
              src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v12.0&appId=608961783650539&autoLogAppEvents=1"
            ></script>
            <script>if(typeof FB !== 'undefined') FB.XFBML.parse();</script>
          </>
        ),
      });
  }

  render() {
    return (
      <div>
        <Head>{this.state.script}</Head>
        <div
          className="fb-login-button"
          data-width="240"
          data-size="large"
          data-button-type="continue_with"
          data-layout="rounded"
          data-auto-logout-link="false"
          data-use-continue-as="true"
          data-onlogin="handleFacebookResponse"
        />
      </div>
    );
  }
}
