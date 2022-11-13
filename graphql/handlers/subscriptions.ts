import { gql } from "@apollo/client"

const PRODUCT_SUBSCRIPTION = gql`
	subscription OnProductAddedToCart($productId: ID!) {
		productAddedToCart(productId: $productId) {
			id
			title
		}
	}
`
