import { ArrowRightOnRectangleIcon, CheckIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline"
import { useToggleCart } from "../../../utils/useToggleCart"
import Link from "next/link"

interface InCartButtonsProps {
	isInCart: boolean
	id: string
}

export const InCartButtons = ({ isInCart, id }: InCartButtonsProps) => {
	const { toggleCart } = useToggleCart()

	return (
		<>
			<div className='grow border-2 border-black flex gap-3 items-center justify-center p-4 cursor-no-drop'>
				<CheckIcon width={30} height={30} />
				<span>Added to cart</span>
			</div>
			<Link href='/cart'>
				<div
					onClick={() => toggleCart(id, isInCart)}
					className='grow border-2 border-black flex gap-3 items-center justify-center p-4 hover:bg-gray-200 cursor-pointer'>
					<ArrowRightOnRectangleIcon width={30} />
					<span>Go to cart</span>
				</div>
			</Link>
		</>
	)
}
