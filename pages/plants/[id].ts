import { GetStaticPaths, GetStaticProps } from "next";
import { ShowScreen } from "../../show/ShowScreen";

export default ShowScreen;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: { data: {} },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
