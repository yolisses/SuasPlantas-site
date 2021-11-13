import { useRouter } from "next/router";
import { Header } from "../common/Header";
import Head from "next/head";

export function SearchResultsScreen() {
  const { query } = useRouter();
  return (
    <div>
      <Head>
        <title>Plantes: {query.q}</title>
      </Head>
      <Header searchQuery={query.q as string} />
    </div>
  );
}
