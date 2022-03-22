/* eslint-disable react/no-danger */
export function GoogleAnalyticsScript() {
  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-SV4DSGVC8F" />
      <script dangerouslySetInnerHTML={{
        __html:
`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-SV4DSGVC8F');`,
      }}
      />
    </>
  );
}
