export function GoogleAnalyticsTags() {
  const config = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-215426535-1');`;

  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-215426535-1" />
      <script async defer>
        {config}
      </script>
    </>
  );
}
