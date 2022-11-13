import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/solid"
import { GetCartPayload } from "../../types/cart.types"
import { useToggleCart } from "../../utils/useToggleCart"
import { TrashIcon } from "@heroicons/react/24/outline"
import { memo } from "react"

const CartListItemNoMemo = ({ amount, id, price, title }: GetCartPayload) => {
	const { toggleCart } = useToggleCart()

	const toggleProductCount = (mark: number, id: string, toDelete?: boolean) => {
		if (mark === 1) toggleCart(id, false)
		else toggleCart(id, true, toDelete)
	}

	return (
		<>
			<li className='py-4 flex justify-between' key={`${price}_${id}`}>
				<div className='mr-4 flex gap-2'>
					<MinusCircleIcon width={24} className='cursor-pointer' onClick={() => toggleProductCount(-1, id)} />
					<input type='number' className='border border-black w-16 h-8 text-center' value={amount} />
					<PlusCircleIcon width={24} className='cursor-pointer' onClick={() => toggleProductCount(1, id)} />
				</div>
				<div>{title}</div>
				<div className='ml-auto mr-4'>{price}$ </div>
				<TrashIcon
					className='cursor-pointer text-red-500 hover:bg-red-200 w-8 h-8 p-1 rounded-md'
					onClick={() => toggleProductCount(-1, id, true)}
				/>
			</li>
		</>
	)
}

export const CartListItem = memo(CartListItemNoMemo)
