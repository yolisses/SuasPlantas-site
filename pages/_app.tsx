import "reflect-metadata";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { DataContextProvider } from "../mobx/DataContext";
import { observer } from "mobx-react-lite";
import { FaviconTags } from "../common/FaviconTags";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DataContextProvider>
      <div className="flex flex-col flex-1 flex-wrap overflow-x-hidden">
        <Head>
          <meta
            name="google-site-verification"
            content="XipRkG04zmk3gcBYI2q_HzJSU2F6BaT6jbz5N57ilZ8"
          />
          <title>SuasPlantas - Trocar mudas de plantas</title>
          <FaviconTags />
        </Head>
        <Component {...pageProps} />
      </div>
    </DataContextProvider>
  );
}

export default observer(MyApp);
