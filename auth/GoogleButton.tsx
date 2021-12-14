import { Component } from "react";
import Head from "next/head";
import { signIn } from "./signIn";

interface GoogleResponse {
  credential: string;
}

declare global {
  interface Window {
    handleGoogleResponse: (e: GoogleResponse) => void;
  }
}

export class GoogleButton extends Component {
  async handleGoogleResponse(e: GoogleResponse) {
    console.log(e.credential);
    signIn("google", e.credential);
  }

  componentDidMount() {
    window.handleGoogleResponse = this.handleGoogleResponse;
  }

  render() {
    return (
      <div>
        <Head>
          <script src="https://accounts.google.com/gsi/client" async />
        </Head>
        <div
          id="g_id_onload"
          // data-auto_prompt="false"
          data-client_id={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
          data-callback="handleGoogleResponse"
        />

        <div
          data-width="350"
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
