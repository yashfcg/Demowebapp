import { ApolloClient , InMemoryCache , NormalizedCacheObject} from "@apollo/client";

let client : ApolloClient<NormalizedCacheObject> | undefined ;
export function getApolloClient() {
    if (!client) {
      client = _createApolloClient();
    }
    return client;
}

function _createApolloClient() {
    return new ApolloClient({
        uri: process.env.WORDPRESS_GRAPHQL_ENDPOINT,
        cache: new InMemoryCache({
            typePolicies: {
            RootQuery: {
                queryType: true,
            },
            RootMutation: {
                mutationType: true,
            },
        },
      }),
    });
  }
