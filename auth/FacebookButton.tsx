import { Component } from 'react';
import Head from 'next/head';
import { signIn } from './signIn';
import { isDev } from '../utils/isDev';

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

export class FacebookButton extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { loader: 'start', script: '' };
  }

  componentDidMount() {
    window.handleFacebookResponse = this.handleFacebookResponse;
    this.setState({ loader: 'did mount' });
  }

  componentDidUpdate() {
    if (this.state.loader === 'did mount') {
      this.setState({
        loader: 'done',
        script: (
          <>
            <script
              async
              src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v12.0&appId=608961783650539&autoLogAppEvents=1"
            />
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <script>if(typeof FB !== 'undefined') FB.XFBML.parse();</script>
          </>
        ),
      });
    }
  }

  async handleFacebookResponse(e: FacebookResponse) {
    if (isDev) console.log(e.authResponse.accessToken);
    await signIn('facebook', e.authResponse.accessToken);
  }

  render() {
    return (
      <>
        <Head>{this.state.script}</Head>
        <div
          style={{ width: '300px' }}
          className="fb-login-button h-10 bg-blue-500 rounded-full"
          data-width="300"
          data-size="large"
          data-button-type="continue_with"
          data-layout="rounded"
          data-auto-logout-link="false"
          data-use-continue-as="true"
          data-onlogin="handleFacebookResponse"
        />
      </>
    );
  }
}
