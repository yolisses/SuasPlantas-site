import Head from 'next/head';
import { isDev } from '../utils/isDev';

export function HotjarTags() {
  if (isDev) return null;

  //  Hotjar Tracking Code for https://suasplantas.com
  return (
    <Head>
      <script>
        {`(function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:2837294,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
      </script>
    </Head>
  );
}
