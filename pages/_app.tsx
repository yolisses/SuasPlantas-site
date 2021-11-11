import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { IconTags } from "./IconTags";
import { DataContextProvider } from "../mobx/DataContext";
import { observer } from "mobx-react-lite";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DataContextProvider>
      <div className="flex flex-col flex-1 flex-wrap overflow-x-hidden">
        <Head>
          <title>Plantes</title>
          <IconTags />
        </Head>
        <Component {...pageProps} />
      </div>
    </DataContextProvider>
  );
}

export default observer(MyApp);
