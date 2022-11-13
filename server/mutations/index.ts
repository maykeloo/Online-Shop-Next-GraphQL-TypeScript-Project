import { Auth } from "./auth"
import { Favorite } from "./favorite"
import { Products } from "./products"
import { Cart } from "./cart"

export const Mutation = {
	...Products,
	...Auth,
	...Favorite,
	...Cart,
}
