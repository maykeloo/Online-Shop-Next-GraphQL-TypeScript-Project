import { ApolloError, ApolloQueryResult, OperationVariables } from "@apollo/client"

export interface GetProductsCount {
	productsCount: number
}

export interface GetAllProductsResponse {
	products: Product[]
}

export interface Product {
	id: string
	title: string
	slug: string
	imageId: string
	image: Image
	rating: Rating
	price: number
	category: string
	description: string
  longDescription: string
	isFavorite: boolean
	isInCart: boolean
}

export interface CartProduct {
	id: number
	title: string
	price: number
	slug: string
	description: string
	category: string
	ratingId: number
	imageId: number
	longDescription: string
	amount: number
}

export interface Products {
	productsList: Product[]
}

export interface AllProducts {
	products: Product[]
}

export interface Image {
	url: string
	alt: string
	width: number
	height: number
}

export interface Rating {
	rate: number
	count: number
}

export interface ProductItemProps {
	id: string
	thumbnailUrl: string
	thumbnailAlt: string
	title: string
	price: number
	isFavorite: boolean
	rating: Rating
}

export interface ContextPayload {
	data: {
		data: Product
		loading: boolean
		error: ApolloError | undefined
	}
	refetch: (id: string) => void
	getProduct: (id: string) => void
}
