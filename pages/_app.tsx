import "reflect-metadata";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { DataContextProvider } from "../mobx/DataContext";
import { observer } from "mobx-react-lite";
import { FaviconTags } from "../common/FaviconTags";
import { ModalContextProvider } from "../modal/ModalContext";

function MyApp({ Component, pageProps }: AppProps) {
  const googleAnalyticsScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-215426535-1');`;

  return (
    <DataContextProvider>
      <ModalContextProvider>
        <Head>
          {/* google login */}
          <meta
            name="google-site-verification"
            content="XipRkG04zmk3gcBYI2q_HzJSU2F6BaT6jbz5N57ilZ8"
          />
          {/* Global site tag (gtag.js) - Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-215426535-1"
          />
          <script>{googleAnalyticsScript}</script>
          <title>
            {process.env.NODE_ENV !== "production" ? "DEV " : ""}SuasPlantas -
            Trocar mudas de plantas
          </title>
          <FaviconTags />
        </Head>
        <Component {...pageProps} />
      </ModalContextProvider>
    </DataContextProvider>
  );
}

export default observer(MyApp);
