import { useLazyQuery } from "@apollo/client"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { GET_PRODUCT } from "../../graphql/handlers/queries"
import { ContextPayload } from "../../types/products.types"

const ProductContext = createContext<ContextPayload | null>(null)

export const ProductStateContextProvider = ({ children }: { children: ReactNode }) => {
	const [getProduct, { data, loading, error, refetch }] = useLazyQuery(GET_PRODUCT)

	const getProductHandler = (id: string) => {
		getProduct({
			variables: {
				productId: id,
			},
			fetchPolicy: "no-cache",
		})
	}

	const refetchProductHandler = (id: string) => {
		refetch({
			variables: {
				productId: id,
			},
		})
	}

	return (
		<ProductContext.Provider
			value={{
				data: {
					data: data?.product.product,
					loading,
					error,
				},
				getProduct: getProductHandler,
				refetch: refetchProductHandler,
			}}>
			{children}
		</ProductContext.Provider>
	)
}

export const useProductContext = () => {
	const context = useContext(ProductContext)

	if (!context) {
		throw new Error("There is no ProductContextProvider")
	}

	return context
}
