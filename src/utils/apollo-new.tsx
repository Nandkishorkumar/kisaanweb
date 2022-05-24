import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { ApolloLink } from "apollo-link";
import { Auth } from 'aws-amplify';
import { AUTH_TYPE, createAuthLink } from "aws-appsync-auth-link";
import appSyncConfig from '../aws-exports';

const url = "https://23owltc4wvejzk4ob2kvjawtpe.appsync-api.ap-southeast-2.amazonaws.com/graphql";
const region = "ap-southeast-2";
let LOGGED_IN: string | null = null
if (typeof window !== "undefined") {
  LOGGED_IN = localStorage.getItem("loggedIn")
}
const auth = {
  type: LOGGED_IN ? AUTH_TYPE.AMAZON_COGNITO_USER_POOLS as 'AMAZON_COGNITO_USER_POOLS' : AUTH_TYPE.API_KEY as 'API_KEY',
  apiKey: "da2-a6e4ublnpvb47brun2n67fkqfy",
  jwtToken: async () => (await Auth.currentSession()).getAccessToken().getJwtToken(), // Required when you use Cognito UserPools OR OpenID Connect. token object is obtained previously
  // credentials: async () => credentials, // Required when you use IAM-based auth.
};

const httpLink = createHttpLink({ uri: url });
const link = ApolloLink.from([
  createAuthLink({ url, region, auth }),
  httpLink
  // createSubscriptionHandshakeLink({ url, region, auth }, httpLink),
]);


export const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

