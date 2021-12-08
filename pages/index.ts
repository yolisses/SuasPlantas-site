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
            price
            swap
            donate
          }
        }
      }
    }
  `;
  const res = await client.query({ query, fetchPolicy: "no-cache" });
  return {
    props: { data: res.data.plants.edges.map((e: any) => e.node) },
    revalidate: 1,
  };
};
