import gql from "graphql-tag";
import { GetStaticPaths, GetStaticProps } from "next";
import client from "../../api/apollo-client";
import { ShowScreen } from "../../show/ShowScreen";

export default ShowScreen;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = gql`
    query ($id: Int) {
      plant(id: $id) {
        name
        description
        swap
        donate
        price
        updatedAt
        owner {
          id
          name
          picture
        }
      }
    }
  `;
  const res = await client.query({
    query,
    variables: { id: params!.id },
  });

  return {
    props: { data: res.data.plant },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
