import "../styles/globals.css";
import client from "../apollo-client";
import { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { ApolloProvider } from "@apollo/client";
import { CartStateContextProvider } from "../components/Cart/CartContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CartStateContextProvider>
        <Layout>
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </Layout>
      </CartStateContextProvider>
    </>
  );
}

export default MyApp;
