import { ApolloProvider } from "@apollo/client";
import "@assets/main.css";
import { UIProvider } from "@contexts/ui.context";
import "@fontsource/open-sans";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import { getCombinedQueriesAndMutations } from "@graphql/exercise";
import { useApollo } from "@utils/apollo";
import { client } from "@utils/apollo-new";
import Amplify, { Auth } from "aws-amplify";
import type { AppProps /*, AppContext */ } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from '../aws-exports'

const Noop: React.FC = ({ children }) => <>{children}</>;

Amplify.configure(config)

function MyApp({ Component, pageProps }: AppProps) {
  // const apolloClient = useApollo(pageProps);
  // console.log({ apolloClient });
  console.log({ pageProps, Component });
  
  const Layout = (Component as any).Layout || Noop;
  // getCombinedQueriesAndMutations()


  return <ApolloProvider client={client}>
    <UIProvider>
      <Layout>
        <Head>
          <title>Kisaan Dashboard</title>
          <meta
            name="description"
            content="Kisaan Description"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1 maximum-scale=1"
          />
        </Head>
        <Component {...pageProps} />
        <ToastContainer autoClose={2000} />
      </Layout>
    </UIProvider>
  </ApolloProvider>
}

export default MyApp
