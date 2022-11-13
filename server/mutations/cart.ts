import { Context } from "../../pages/api/graphql"
export const Cart = {
	addToCart: async (_: any, { productId }: { productId: number }, { prisma, userInfo }: Context) => {
		const isProductExist = await prisma.cartOnUser.findUnique({
			where: {
				userId_productId: {
					userId: userInfo ? userInfo?.userId : 1,
					productId: +productId,
				},
			},
		})

		if (isProductExist) {
			await prisma.cartOnUser.update({
				data: {
					amount: isProductExist.amount + 1,
				},
				where: {
					userId_productId: {
						userId: userInfo ? userInfo?.userId : 1,
						productId: +productId,
					},
				},
			})
			return isProductExist
		}

		const cartProduct = prisma.cartOnUser.create({
			data: {
				user: {
					connect: {
						id: userInfo?.userId,
					},
				},
				product: {
					connect: {
						id: +productId,
					},
				},
				amount: 1,
			},
		})

		return cartProduct
	},
	deleteFromCart: async (_: any, { productId, toDelete }: { productId: number, toDelete: boolean }, { prisma, userInfo }: Context) => {
		const isProductExist = await prisma.cartOnUser.findUnique({
			where: {
				userId_productId: {
					userId: userInfo ? userInfo?.userId : 1,
					productId: +productId,
				},
			},
		})

		//delete instantly
		if(isProductExist && toDelete && userInfo) {
			return prisma.cartOnUser.delete({
				where: {
					userId_productId: {
						productId: +productId,
						userId: userInfo.userId,
					},
				},
			})
		}

		//delete count or product
		if (isProductExist && userInfo) {
			const data = {
				data: {
					amount: isProductExist.amount - 1,
				},
				where: {
					userId_productId: {
						userId: userInfo ? userInfo?.userId : 1,
						productId: +productId,
					},
				},
			}

			if (isProductExist.amount > 1) {
				await prisma.cartOnUser.update({ ...data })
				return isProductExist
			} else if (isProductExist.amount === 1) {
				return prisma.cartOnUser.delete({
					where: {
						userId_productId: {
							productId: +productId,
							userId: userInfo.userId,
						},
					},
				})
			}
			return prisma.cartOnUser.delete({
				where: {
					userId_productId: {
						productId: +productId,
						userId: userInfo.userId,
					},
				},
			})
		}
	},
}
