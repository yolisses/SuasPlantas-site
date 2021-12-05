import gql from "graphql-tag";
import { GetStaticPaths, GetStaticProps } from "next";
import client from "../../api/apollo-client";
import { someUser } from "../../mock/someUser";
import { UserScreen } from "../../user/UserScreen";

export default UserScreen;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = gql`
    query ($id: Int) {
      user(id: $id) {
        id
        name
        picture
        plantSet {
          id
          name
          price
          swap
          donate
        }
      }
    }
  `;
  const res = await client.query({
    query,
    variables: { id: params!.id },
  });

  return {
    props: { user: res.data.user },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
