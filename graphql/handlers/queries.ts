import { gql } from "@apollo/client"

export const PAGE_PRODUCTS_QUERY = gql`
	query ($limit: Int, $offset: Int) {
		productsList(limit: $limit, offset: $offset) {
			id
			title
			slug
			imageId
			image {
				alt
				height
				url
			}
			price
			rating {
				rate
				count
			}
			category
			isFavorite
		}
	}
`

export const GET_PRODUCT = gql`
	query ($productId: ID!) {
		product(productId: $productId) {
			product {
				id
				title
				slug
				imageId
				longDescription
				image {
					alt
					height
					url
				}
				price
				rating {
					rate
					count
				}
				category
				isFavorite
				isInCart
			}
		}
	}
`

export const ALL_PRODUCTS_COUNT = gql`
	query {
		productsCount
	}
`

export const CART_PRODUCTS = gql`
	query {
		getCart {
			id
			category
			title
			amount
			image {
				alt
				height
			}
			price
		}
	}
`
