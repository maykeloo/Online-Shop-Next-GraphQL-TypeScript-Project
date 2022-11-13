import { CurrencyDollarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid"
import { useToggleCart } from "../../../utils/useToggleCart"
import { useCartContext } from "../../Cart/CartContext"

interface NoInCartButtonsProps {
	isInCart: boolean
	id: string
}

export const NoInCartButtons = ({ isInCart, id }: NoInCartButtonsProps) => {
	const { toggleCart } = useToggleCart()

	const buyAlert = () => {
		alert("You've just bought an item!")
	}
	return (
		<>
			<div
				onClick={buyAlert}
				className='bg-black grow border-2 border-black flex gap-3 items-center justify-center cursor-pointer p-4 hover:bg-white group'>
				<CurrencyDollarIcon fill='white' className='group-hover:fill-black' width={30} height={30} />
				<span className='text-white group-hover:text-black'>Buy it now</span>
			</div>
			<div
				onClick={() => toggleCart(id, isInCart)}
				className='grow border-2 border-black flex gap-3 items-center justify-center p-4 hover:bg-gray-200 cursor-pointer'>
				<ShoppingBagIcon width={30} />
				<span>Add to cart</span>
			</div>
		</>
	)
}
