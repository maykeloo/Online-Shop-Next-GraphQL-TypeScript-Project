import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://online-shop-esvg1zfpu-maykeloo.vercel.app//api/graphql",
});
//https://online-shop-at6xfo50e-maykeloo.vercel.app/api/graphql

const authLink = setContext((_, { headers }) => {
  let token;
  if (typeof window !== 'undefined') {
    token = localStorage.getItem("token");
  }

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
