import { ArrowRightOnRectangleIcon, CheckIcon, HeartIcon, ShoppingBagIcon, StarIcon } from "@heroicons/react/24/outline"
import { Data } from "../../types/utils.types"
import { useToggleFavorite } from "../../utils/useToggleFavorite"
import { InCartButtons } from "./ProductButtons/InCartButtons"
import { NoInCartButtons } from "./ProductButtons/NoInCartButtons"

export const ProductContent = (data: Data) => {
	const { id, isFavorite, price, title, rating, isInCart, longDescription } = data
	const { toggleFavorite } = useToggleFavorite(isFavorite)

	return (
		<>
			<div className='grow w-3/5 flex flex-col gap-8'>
				<div className='flex justify-between gap-4'>
					<h1 className='text-7xl font-bold'>{title}</h1>
					<span className='flex gap-3 items-center'>
						<HeartIcon
							onClick={() => toggleFavorite(id, true)}
							fill={isFavorite ? "red" : "transparent"}
							className='cursor-pointer'
							width={30}
							height={30}
						/>
					</span>
				</div>
				<div>
					<p className='text-5xl'>${price}</p>
				</div>
				<div>
					<p>{longDescription}</p>
				</div>
				<div className='flex gap-2'>
					<StarIcon width={24} />
					<span className='text-2xl'>
						{rating.rate} ({rating.count})
					</span>
				</div>
				<div className='flex gap-4'>
					{isInCart ? (
						<InCartButtons isInCart={isInCart} id={id} />
					) : (
						<NoInCartButtons isInCart={isInCart} id={id} />
					)}
				</div>
			</div>
		</>
	)
}
