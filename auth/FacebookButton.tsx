import { Component } from "react";
import Head from "next/head";
import gql from "graphql-tag";
import client from "../api/apollo-client";

export class FacebookButton extends Component {
  constructor(props) {
    super(props);
  }

  async handleFacebookResponse(e) {
    const mutation = gql`
      mutation ($accessToken: String) {
        signIn(accessToken: $accessToken, provider: "facebook") {
          id
          name
        }
      }
    `;
    await client.mutate({
      mutation,
      variables: {
        accessToken: e.authResponse.accessToken,
      },
    });
  }

  componentDidMount() {
    window.handleFacebookResponse = this.handleFacebookResponse;
  }

  render() {
    return (
      <div>
        <Head>
          <script
            async
            defer
            src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v12.0&appId=608961783650539&autoLogAppEvents=1"
          ></script>
          <script> if(typeof FB !== 'undefined') FB.XFBML.parse();</script>
        </Head>
        <div
          className="fb-login-button"
          data-width="300"
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
