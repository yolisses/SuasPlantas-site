import { gql } from "@apollo/client";
import { api } from "../api/api";
export async function signIn(
  provider: "google" | "facebook",
  accessToken: string
) {
  const mutation = `
    mutation {
      signIn(provider: "${provider}", accessToken: "${accessToken}") {
        id
        name
      }
    }
  `;

  console.error(mutation);
  try {
    api.post("/", { query: mutation });
  } catch (err) {
    console.error(err);
  }
}
