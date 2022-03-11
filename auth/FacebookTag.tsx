import Head from 'next/head';

export function FacebookButtonTag() {
  return (
    <Head>
      <script
        async
        src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v12.0&appId=256482496640231&autoLogAppEvents=1"
      />
    </Head>
  );
}
