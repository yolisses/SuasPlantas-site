import gql from "graphql-tag";
import { GetStaticProps } from "next";
import client from "../api/apollo-client";
import { HomeScreen } from "../home/HomeScreen";

export default HomeScreen;

export const getStaticProps: GetStaticProps = async () => {
  const query = gql`
    query {
      plants {
        edges {
          node {
            id
            name
            description
          }
        }
      }
    }
  `;
  const res = await client.query({ query });
  return {
    props: { data: res.data.plants.edges.map((e) => e.node) },
    revalidate: 1,
  };
};
