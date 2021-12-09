import "reflect-metadata";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { IconTags } from "../common/IconTags";
import { DataContextProvider } from "../mobx/DataContext";
import { observer } from "mobx-react-lite";
import { ApolloProvider } from "@apollo/client";
import client from "../api/apollo-client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <DataContextProvider>
        <div className="flex flex-col flex-1 flex-wrap overflow-x-hidden">
          <Head>
            <meta
              name="google-site-verification"
              content="XipRkG04zmk3gcBYI2q_HzJSU2F6BaT6jbz5N57ilZ8"
            />
            <title>Plantes - Trocar mudas de plantas</title>
            <IconTags />
          </Head>
          <Component {...pageProps} />
        </div>
      </DataContextProvider>
    </ApolloProvider>
  );
}

export default observer(MyApp);
