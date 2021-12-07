import { Component } from "react";
import Head from "next/head";

export class GoogleButton extends Component {
  constructor(props) {
    super(props);
  }

  handleGoogleResponse(e) {
    console.log("ONE TAP version 2 ", e);
  }

  componentDidMount() {
    window.handleGoogleResponse = this.handleGoogleResponse;
  }

  render() {
    return (
      <div>
        <Head>
          <script src="https://accounts.google.com/gsi/client" async defer />
        </Head>
        <div
          id="g_id_onload"
          // data-auto_prompt="false"
          data-client_id={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
          data-callback="handleGoogleResponse"
        />

        <div
          data-width="300"
          data-shape="pill"
          data-size="large"
          data-text="signin"
          data-type="standard"
          data-callback="mozao"
          className="g_id_signin"
          // data-theme="filled_blue"
          data-logo_alignment="left"
        />
      </div>
    );
  }
}
