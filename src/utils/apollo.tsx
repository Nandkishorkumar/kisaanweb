import { useMemo } from "react";
import {
  from,
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  createHttpLink,
} from "@apollo/client";
import deepMerge from "deepmerge";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import { createUploadLink } from "apollo-upload-client";
import Cookies from "js-cookie";
import isEqual from "lodash/isEqual";
import { AUTH_TYPE, createAuthLink } from "aws-appsync-auth-link";
import { ApolloLink } from 'apollo-link'
import { Auth } from "aws-amplify";
export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;
const region = "ap-southeast-2";
async function createApolloClient() {


  let LOGGED_IN: string | null = null
  if (typeof window !== "undefined") {
    LOGGED_IN = localStorage.getItem("loggeedIn")
  }
  const auth = {
    type: LOGGED_IN ? AUTH_TYPE.AMAZON_COGNITO_USER_POOLS as 'AMAZON_COGNITO_USER_POOLS' : AUTH_TYPE.API_KEY as 'API_KEY',
    apiKey: process.env.NEXT_PUBLIC_GRAPHQL_API_KEY,
    jwtToken: async () => (await Auth.currentSession()).getAccessToken().getJwtToken(), // Required when you use Cognito UserPools OR OpenID Connect. token object is obtained previously
    // credentials: async () => credentials, // Required when you use IAM-based auth.
  };

  const authLink = setContext((_, { headers }) => {
    const token = Cookies.get("auth_token");
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
        apiKey: "da2-a6e4ublnpvb47brun2n67fkqfy",
      },
      apiKey: "da2-a6e4ublnpvb47brun2n67fkqfy",
    };
  });
  const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
    forward(operation)
  });
  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT, // Server URL (must be absolute)
    // credentials: "same-origin",
  });
  const link = ApolloLink.from([
    createAuthLink({ url: process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT, region, auth }),
    httpLink,
  ])
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    //@ts-ignore
    link,
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState: any = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = deepMerge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    });

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function addApolloState(client: any, pageProps: any) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}

export function useApollo(pageProps: any) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);
  return store;
}
