import Head from 'next/head';
import { useEffect, useState } from 'react';
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

export function GooglePrompt({ callback }:loginButtonProps) {
  const { signIn } = useUser();
  const [show, setShow] = useState(false);

  async function handleGoogleResponse(e: GoogleResponse) {
    const accessToken = e.credential;
    await signIn({ provider: 'google', accessToken });
    if (callback) callback();
  }

  useEffect(() => {
    const loggedOnce = localStorage.getItem('loggedOnce');
    if (loggedOnce) {
      window.handleGoogleResponse = handleGoogleResponse;
      setShow(true);
    }
  }, []);

  if (show) {
    return (
      <>
        <Head>
          <script src="https://accounts.google.com/gsi/client" async />
        </Head>
        <div
          id="g_id_onload"
          data-auto_prompt="true"
          data-cancel_on_tap_outside="false"
          data-callback="handleGoogleResponse"
          data-client_id={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
        />
      </>
    );
  }

  return null;
}
