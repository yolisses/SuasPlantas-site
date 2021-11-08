import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { IconTags } from "./IconTags";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col w-screen h-screen flex-wrap overflow-hidden">
      <Head>
        <title>Plantes</title>
        <IconTags />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
