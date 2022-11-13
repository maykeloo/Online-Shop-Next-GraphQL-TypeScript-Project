import { Image } from "@prisma/client"

export interface GetCartPayload {
	id: string
	category: string
	title: string
	image: Image
	price: string
	amount: number
}
export interface ContextPayload {
	data: {
		getCart: GetCartPayload[]
	}
	cartItemsCount: number
	refetchCartItems: () => void
}
