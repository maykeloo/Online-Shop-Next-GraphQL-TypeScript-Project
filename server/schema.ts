import { gql } from "apollo-server"

export const typeDefs = gql`
	type Query {
		productsCount: Int
		product(productId: ID!): ProductPayload
		productsList(limit: Int, offset: Int): [Product]
		getCart: [Product]
	}

	type Mutation {
		addProduct(product: InputAddProduct!): ProductPayload!
		addToFavorite(productId: ID!): FavoritePayload!
		deleteFromFavorite(productId: ID!): FavoritePayload!
		addToCart(productId: ID!): CartPayload!
		deleteFromCart(productId: ID!, toDelete: Boolean): CartPayload!
		signUp(user: SignUpInput!): UserPayload!
		signIn(user: SignInInput!): UserPayload!
	}

	type Subscription {
		productAddedToCart(productId: ID!): Product
	}

	type Cart {
		userId: Int
		productId: Int
	}

	type Product {
		id: ID!
		title: String!
		price: Int!
		slug: String!
		description: String!
		category: String!
		image: Image!
		imageId: ID!
		longDescription: String!
		rating: Rating!
		isFavorite: Boolean!
		isInCart: Boolean!
	}

	type UserPayload {
		errors: [Errors]!
		token: String
	}

	extend type Product {
		amount: Int
	}

	type CartPayload {
		userId: Int
		productId: Int
	}

	type FavoritePayload {
		userId: Int
		productId: Int
	}

	type Rating {
		rate: Float
		count: Int
		product: Product
		productId: ID
	}

	type Image {
		url: String
		alt: String
		width: Int
		height: Int
		product: Product
		productId: ID
	}

	input ImageInput {
		url: String
		alt: String
		width: Int
		height: Int
	}

	type Errors {
		message: String
	}

	type ProductPayload {
		product: Product
		errors: [Errors]!
	}

	input InputAddProduct {
		title: String!
		price: Int!
		description: String!
		category: String!
		longDescription: String!
		image: ImageInput!
	}

	input SignUpInput {
		name: String!
		email: String!
		password: String!
	}

	input SignInInput {
		email: String!
		password: String!
	}
`
