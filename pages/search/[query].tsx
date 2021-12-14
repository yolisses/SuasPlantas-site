// pages/qs-test/[...paths].tsx
import { GetStaticPaths, GetStaticProps } from "next";
import { api } from "../../api/api";
import { SearchResultsScreen } from "../../search/SearchResultsScreen";

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await api.get("plants", {
    params: { name: params!.query },
  });

  return {
    props: {
      data: res.data,
    },
    revalidate: 10,
  };
};

export default SearchResultsScreen;
