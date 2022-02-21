import Head from 'next/head';
import { useEffect } from 'react';
import { useUser } from './userContext';
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
  const { signIn } = useUser();

  async function handleFacebookResponse(e: FacebookResponse) {
    const { accessToken } = e.authResponse;
    await signIn({ provider: 'facebook', accessToken });
    if (callback) callback();
  }

  useEffect(() => {
    window.handleFacebookResponse = handleFacebookResponse;
  }, []);

  return (
    <>
      <Head>
        <script
          async
          src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v12.0&appId=256482496640231&autoLogAppEvents=1"
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
