import Head from 'next/head';
import { isDev } from '../utils/isDev';

export function SmartlookTag() {
  if (isDev) return null;

  return (
    <Head>
      <script type="text/javascript">
        {`window.smartlook||(function(d) {
    var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
    var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
    c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
    })(document);
    smartlook('init', '0e89319c9d56bcbc503606261b351196e0ab31db', { region: 'eu' });`}
      </script>
    </Head>
  );
}
