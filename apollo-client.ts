import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "/api/graphql",
});
//https://online-shop-at6xfo50e-maykeloo.vercel.app/api/graphql

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      ...headers,
      authorization: token,
    },
  };
});

const client = new ApolloClient({
  ssrMode: false,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
