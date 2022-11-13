import { useCartContext } from "./CartContext"
import { CartListItem } from "./CartListItem"

export const CartContent = () => {
	const { data } = useCartContext()

	if (!data) {
		return <h1>Something went wrong...</h1>
	}

	return (
		<div className='col-span-2'>
			<ul className='divide-y divide-gray-200'>
				{data.getCart.map(item => (
					<CartListItem {...item} key={item.id} />
				))}
			</ul>
		</div>
	)
}
