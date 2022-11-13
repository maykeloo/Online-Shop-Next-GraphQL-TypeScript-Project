import Link from "next/link"
import Head from "next/head"
import Image from "next/image"
import { StarIcon } from "@heroicons/react/24/solid"
import { HeartIcon } from "@heroicons/react/24/outline"
import { useToggleFavorite } from "../../utils/useToggleFavorite"
import { ProductItemProps } from "../../types/products.types"
import { memo } from "react"

const ProductListItem = (data: ProductItemProps) => {
	const { id, isFavorite, price, rating, thumbnailAlt, thumbnailUrl, title } = data
	const { toggleFavorite } = useToggleFavorite(isFavorite)

	return (
		<>
			<Head>
				<title>Products</title>
			</Head>
			<div className=' bg-white p-4 border-gray-200 flex flex-col justify-start group'>
				<Link href={`/products/product/${id}`}>
					<div className='cursor-pointer '>
						<Image
							objectFit='contain'
							blurDataURL={thumbnailUrl}
							src={thumbnailUrl}
							alt={thumbnailAlt}
							className=' w-full h-96 border-1 border-gray-200 mx-auto transition-all'
							width={3}
							height={4}
							layout='responsive'
						/>
					</div>
				</Link>
				<div className='flex flex-col justify-between'>
					<div className='flex justify-between'>
						<h1 className='font-light my-2 text-lg'>{title}</h1>
						<HeartIcon
							fill={isFavorite ? "red" : "transparent"}
							className='w-6 cursor-pointer'
							onClick={() => toggleFavorite(id, false)}
						/>
					</div>
					<div className='flex justify-between items-center'>
						<span className='font-bold text-lg'>${price}</span>
						<span className='flex gap-2 items-center'>
							<div className='w-4 cursor-pointer'>
								<StarIcon />
							</div>
							{rating.rate} ({rating.count})
						</span>
					</div>
				</div>
			</div>
		</>
	)
}

export const MemoizedProductListItem = memo(ProductListItem)
