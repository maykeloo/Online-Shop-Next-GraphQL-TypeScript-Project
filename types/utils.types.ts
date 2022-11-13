import { Rating } from "./products.types"

export interface Data {
	id: string
	slug: string
	thumbnailUrl: string
	thumbnailAlt: string
	title: string
	category: string
	longDescription: string
	price: number
	isFavorite: boolean
	rating: Rating
	isInCart: boolean
}
