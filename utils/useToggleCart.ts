import { GET_PRODUCT } from "../graphql/handlers/queries"
import { ADD_CART, DELETE_CART } from "../graphql/handlers/mutations"
import { useMutation } from "@apollo/client"
import { useCartContext } from "../components/Cart/CartContext"

export const useToggleCart = () => {
	const { refetchCartItems } = useCartContext();

	const [mutateAddFunction, { error: addError, loading: addLoading }] = useMutation(ADD_CART, {
		onCompleted: () => {
			refetchCartItems()
		}
	})
	const [mutateDeleteFunction, { error: deleteError, loading: deleteLoading }] = useMutation(DELETE_CART, {
		onCompleted: () => {
			refetchCartItems()
		}
	})
	
	const toggleCart = (productId: string, isInCart: boolean, toDelete?: boolean) => {
		const mutateData = {
			variables: {
				productId,
			},
		}

		if (!addLoading && !deleteLoading) {
			if (isInCart) {
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
		toggleCart,
	}
}
