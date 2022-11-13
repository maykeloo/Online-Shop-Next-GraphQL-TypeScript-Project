import { GET_PRODUCT, PAGE_PRODUCTS_QUERY } from "../graphql/handlers/queries"
import { ADD_FAVORITE, DELETE_FAVORITE } from "../graphql/handlers/mutations"
import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"

export const useToggleFavorite = (isFavorite: boolean) => {
	const router = useRouter()
	const [mutateAddFunction, { error: addError, loading: addLoading }] = useMutation(ADD_FAVORITE)
	const [mutateDeleteFunction, { error: deleteError, loading: deleteLoading }] = useMutation(DELETE_FAVORITE)

	const toggleFavorite = (productId: string, singleProduct: boolean) => {
		const getProducts = {
			variables: {
				limit: 10,
				offset: Number(router.query.page),
			},
			query: PAGE_PRODUCTS_QUERY,
		}

		const getProduct = {
			variables: {
				productId,
			},
			query: GET_PRODUCT,
		}

		const mutateData = {
			variables: {
				productId,
			},
			refetchQueries: [
				{
					query:     !singleProduct ? getProducts.query     : getProduct.query,
					variables: !singleProduct ? getProducts.variables : getProduct.variables,
				},
			],
		}

		if (!addLoading && !deleteLoading) {
			if (isFavorite) {
				try {
					mutateDeleteFunction(mutateData)
				} catch {
					console.log(deleteError)
				}
			} else {
				try {
					mutateAddFunction(mutateData)
				} catch {
					console.log(addError)
				}
			}
		}
	}

	return {
		toggleFavorite,
	}
}
