import { gql } from "@apollo/client";
import client from "../api/apollo-client";

export async function signIn(
  provider: "google" | "facebook",
  accessToken: string
) {
  const mutation = gql`
    mutation ($provider: String, $accessToken: String) {
      signIn(provider: $provider, accessToken: $accessToken) {
        id
        name
      }
    }
  `;
  await client.mutate({
    mutation,
    variables: {
      provider,
      accessToken,
    },
  });
}
