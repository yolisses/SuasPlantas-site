import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  credentials: "include",
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (networkError) {
        console.error(`[Network error]: ${networkError}`);
      }
      if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.error(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      }
    }),
    new HttpLink({
      uri: process.env.NEXT_PUBLIC_API_URL,
      credentials: "include",
    }),
  ]),
});

export default client;
