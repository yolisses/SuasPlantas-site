// pages/qs-test/[...paths].tsx
import { GetStaticPaths, GetStaticProps } from "next";
import { api } from "../../api/api";
import { SearchResultsScreen } from "../../search/SearchResultsScreen";
import { getQuery } from "../../search/getQuery";

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = getQuery(params);

  const res = await api.get("plants", {
    params: { name: query!.q },
  });

  return {
    props: {
      data: res.data,
    },
    revalidate: 10,
  };
};

export default SearchResultsScreen;
