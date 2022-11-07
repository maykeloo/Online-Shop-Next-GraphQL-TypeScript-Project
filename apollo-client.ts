import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
      link: createHttpLink({ uri: '/graphql' }),
      ssrMode: true,
      cache: new InMemoryCache(),
});

export default client