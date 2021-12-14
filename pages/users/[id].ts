import { GetStaticPaths, GetStaticProps } from "next";
import { UserScreen } from "../../user/UserScreen";

export default UserScreen;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: { user: {} },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
