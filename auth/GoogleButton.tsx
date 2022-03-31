import Head from 'next/head';
import { useEffect } from 'react';
import { useUser } from './UserContext';
import { loginButtonProps } from './loginButtonProps';

interface GoogleResponse {
  credential: string;
}

declare global {
  interface Window {
    handleGoogleResponse: (e: GoogleResponse) => void;
  }
}

export function GoogleButton({ callback }:loginButtonProps) {
  const { signIn } = useUser();

  async function handleGoogleResponse(e: GoogleResponse) {
    const accessToken = e.credential;
    await signIn({ provider: 'google', accessToken });
    if (callback) callback();
  }

  useEffect(() => {
    window.handleGoogleResponse = handleGoogleResponse;
  }, []);

  return (
    <div
      style={{ width: '300px' }}
      className="flex rounded-full h-10 bg-gray-100"
    >
      <Head>
        <script src="https://accounts.google.com/gsi/client" async />
      </Head>
      <div
        id="g_id_onload"
        data-auto_prompt="false"
        data-client_id={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
        data-callback="handleGoogleResponse"
      />
      <div
        data-width="300"
        data-shape="pill"
        data-size="large"
        data-text="signin"
        data-type="standard"
        className="g_id_signin"
        // data-theme="filled_blue"
        data-logo_alignment="left"
      />
    </div>
  );
}
