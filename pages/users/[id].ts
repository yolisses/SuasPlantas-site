import { GetStaticPaths, GetStaticProps } from "next";
import { someImageU } from "../../mock/someImage";
import { someUser } from "../../mock/someUser";
import { UserScreen } from "../../user/UserScreen";

export default UserScreen;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      user: someUser,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      {
        params: { id: "1" },
      },
    ],
    fallback: "blocking",
  };
};
