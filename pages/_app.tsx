import "../styles/globals.css"
import client from "../apollo-client"
import { AppProps } from "next/app"
import { Layout } from "../components/Layout"
import { ApolloProvider } from "@apollo/client"
import { CartStateContextProvider } from "../components/Cart/CartContext"
import { LoadingStateContextProvider } from "../components/LoadingContext"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<LoadingStateContextProvider>
				<ApolloProvider client={client}>
					<CartStateContextProvider>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</CartStateContextProvider>
				</ApolloProvider>
			</LoadingStateContextProvider>
		</>
	)
}

export default MyApp
