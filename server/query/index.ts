import { Context } from "../../pages/api/graphql"
import { CartProduct } from "../../types/products.types";

export const Query = {
	// PRODUCTS LIST
	productsList: async (
		_: any,
		{ limit, offset }: { limit: number; offset: number },
		{ prisma, userInfo }: Context
	) => {
		const productsList = await prisma.product.findMany({
			skip: (offset - 1) * limit,
			take: limit,
		})

		const favorites = await prisma.favoritesOnUser.findMany({
			where: {
				userId: userInfo?.userId,
			},
		})

		const productsExpand = productsList.map((product) => {
			return {
				...product,
				isFavorite: Boolean(favorites.find((fav) => fav.productId === product.id)),
			}
		})

		return productsExpand
	},

	// SINGLE PRODUCT
	product: async (_: any, { productId }: { productId: string }, { prisma, userInfo }: Context) => {
		const product = await prisma.product.findUnique({
			where: {
				id: +productId,
			},
		})

		const favorites = await prisma.favoritesOnUser.findMany({
			where: {
				userId: userInfo?.userId,
			},
		})

		const cart = await prisma.cartOnUser.findMany({
			where: {
				userId: userInfo?.userId,
			},
		})

		if (!product) {
			return {
				product: null,
				errors: [
					{
						message: "Product not found.",
					},
				],
			}
		}
		return {
			product: {
				...product,
				isInCart: Boolean(cart.find((crt) => crt.productId === product.id)),
				isFavorite: Boolean(favorites.find((fav) => fav.productId === product.id)),
			},
			errors: [],
		}
	},

	// PRODUCTS LENGTS
	productsCount: async (_: any, __: any, { prisma }: Context) => {
		const productsCount = await prisma.product.count()
		return productsCount
	},
	//CART ITEMS
	getCart: async (_: any, __: any, { prisma, userInfo }: Context) => {
		const cartItems = await prisma.product.findMany({
			where: {
				cartOwners: {
					some: {
						userId: userInfo?.userId
					}
				}
			},
		})

		const cartAmount = await prisma.cartOnUser.findMany({
			where: {
				userId: userInfo?.userId
			}
		})
		let joinedValues: CartProduct[] = [] 
		cartItems.map((item) => {
			cartAmount.map(amountItem => {
				if(item.id === amountItem.productId) {
					joinedValues.push({
						...item,
						amount: amountItem.amount
					})
				}
			})
		})

		return  [...joinedValues]
	},
}
