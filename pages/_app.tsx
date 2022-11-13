import "../styles/globals.css"
import client from "../apollo-client"
import { AppProps } from "next/app"
import { Layout } from "../components/Layout"
import { ApolloProvider } from "@apollo/client"
import { CartStateContextProvider } from "../components/Cart/CartContext"
import { LoadingStateContextProvider } from "../components/LoadingContext"
import { ProductStateContextProvider } from "../components/Product/ProductContext"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<LoadingStateContextProvider>
				<ApolloProvider client={client}>
					<ProductStateContextProvider>
						<CartStateContextProvider>
							<Layout>
								<Component {...pageProps} />
							</Layout>
						</CartStateContextProvider>
					</ProductStateContextProvider>
				</ApolloProvider>
			</LoadingStateContextProvider>
		</>
	)
}

export default MyApp
