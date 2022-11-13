import { gql } from "@apollo/client"

//FAVORITE
export const ADD_FAVORITE = gql`
	mutation ($productId: ID!) {
		addToFavorite(productId: $productId) {
			userId
			productId
		}
	}
`

export const DELETE_FAVORITE = gql`
	mutation ($productId: ID!) {
		deleteFromFavorite(productId: $productId) {
			productId
			userId
		}
	}
`

//CART
export const ADD_CART = gql`
	mutation ($productId: ID!) {
		addToCart(productId: $productId) {
			userId
			productId
		}
	}
`

export const DELETE_CART = gql`
	mutation ($productId: ID!, $toDelete: Boolean) {
		deleteFromCart(productId: $productId, toDelete: $toDelete) {
			productId
			userId
		}
	}
`
