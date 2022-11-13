import { ADD_CART, DELETE_CART } from "../graphql/handlers/mutations"
import { useMutation } from "@apollo/client"
import { useCartContext } from "../components/Cart/CartContext"
import { useProductContext } from "../components/Product/ProductContext";

export const useToggleCart = () => {
	const { refetchCartItems } = useCartContext();
	const { refetch: refetchProductItem } = useProductContext();

	const [mutateAddFunction, { error: addError, loading: addLoading }] = useMutation(ADD_CART, {
		onCompleted: (data) => {
			refetchCartItems()
			if(data.addToCart) {
				refetchProductItem(data.addToCart.productId)
			}
		}
	})
	const [mutateDeleteFunction, { error: deleteError, loading: deleteLoading }] = useMutation(DELETE_CART, {
		onCompleted: (data) => {
			refetchCartItems()
			if(data.addToCart) {
				refetchProductItem(data.addToCart.productId)
			}
		}
	})
	
	const toggleCart = (productId: string, isInCart: boolean, toDelete?: boolean) => {
		const mutateData = {
			variables: {
				productId,
				toDelete
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
