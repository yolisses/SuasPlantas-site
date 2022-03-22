/* eslint-disable react/no-danger */
export function SmartlookScript() {
  return (
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html:
`window.smartlook||(function(d) {
var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
})(document);
smartlook('init', '0e89319c9d56bcbc503606261b351196e0ab31db', { region: 'eu' });`,
      }}
    />
  );
}
