import { useState } from 'react';
import Head from 'next/head';
import { signIn } from './signIn';
import { isDev } from '../utils/isDev';
import { loginButtonProps } from './loginButtonProps';

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

export function FacebookButton({ callback } : loginButtonProps) {
  async function handleFacebookResponse(e: FacebookResponse) {
    if (isDev) console.log(e.authResponse.accessToken);
    await signIn('facebook', e.authResponse.accessToken);
    if (callback) callback();
  }

  useState(() => {
    window.handleFacebookResponse = handleFacebookResponse;
  });

  return (
    <>
      <Head>
        <script
          async
          src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v12.0&appId=608961783650539&autoLogAppEvents=1"
        />
        <script>if(typeof FB !== 'undefined') FB.XFBML.parse();</script>
      </Head>
      <div
        data-width="300"
        data-size="large"
        data-layout="rounded"
        style={{ width: '300px' }}
        data-use-continue-as="true"
        data-auto-logout-link="false"
        data-button-type="continue_with"
        data-onlogin="handleFacebookResponse"
        className="fb-login-button h-10 bg-blue-500 rounded-full"
      />
    </>
  );
}
