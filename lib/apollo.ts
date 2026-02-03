import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          getMyLibrary: {
            merge(existing, incoming) {
              return incoming;
            },
          },
          getUserBundles: {
            merge(existing, incoming) {
              return incoming;
            },
          },
          getSharedGames: {
            merge(existing, incoming) {
              return incoming;
            },
          },
        },
      },
      SteamGame: {
        keyFields: ['id'],
      },
      SteamBundle: {
        keyFields: ['id'],
      },
      SteamFriend: {
        keyFields: ['id'],
      },
    },
  }),
});

export default apolloClient;
