import gql from "graphql-tag";
import { GetStaticProps } from "next";
import client from "../api/apollo-client";
import { HomeScreen } from "../home/HomeScreen";

export default HomeScreen;

export const getStaticProps: GetStaticProps = async () => {
  const query = gql`
    query {
      plants {
        id
        name
        description
      }
    }
  `;
  const res = await client.query({ query });
  return {
    props: { data: res.data.plants },
    revalidate: 1,
  };
};
