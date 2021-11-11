import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { IconTags } from "./IconTags";
import { AuthContextProvider } from "../auth/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <div className="flex flex-col flex-1 flex-wrap overflow-x-hidden">
        <Head>
          <title>Plantes</title>
          <IconTags />
        </Head>
        <Component {...pageProps} />
      </div>
    </AuthContextProvider>
  );
}

export default MyApp;
