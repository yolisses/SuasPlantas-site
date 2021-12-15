import "reflect-metadata";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { DataContextProvider } from "../mobx/DataContext";
import { observer } from "mobx-react-lite";
import { FaviconTags } from "../common/FaviconTags";

function MyApp({ Component, pageProps }: AppProps) {
  const googleAnalyticsScript = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-BCW0VD90L1');`;

  return (
    <DataContextProvider>
      <>
        <Head>
          {/* google login */}
          <meta
            name="google-site-verification"
            content="XipRkG04zmk3gcBYI2q_HzJSU2F6BaT6jbz5N57ilZ8"
          />
          {/* Global site tag (gtag.js) - Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-BCW0VD90L1"
          />
          <script>{googleAnalyticsScript}</script>
          <title>SuasPlantas - Trocar mudas de plantas</title>
          <FaviconTags />
        </Head>
        <Component {...pageProps} />
      </>
    </DataContextProvider>
  );
}

export default observer(MyApp);
