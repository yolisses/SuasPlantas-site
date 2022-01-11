import Head from 'next/head';

export function GoogleAnalyticsTags() {
  return (
    <Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-3LMJZFRM76" />
      <script>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-3LMJZFRM76');`}
      </script>
    </Head>
  );
}
