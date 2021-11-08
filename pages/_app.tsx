import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { IconTags } from "./IconTags";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Plantes</title>
        <IconTags />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
