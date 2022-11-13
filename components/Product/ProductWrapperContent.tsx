import Image from "next/image"
import { Data } from "../../types/utils.types"
import { BreadCrumbs } from "../BreadCrumbs"
import { ProductContent } from "./ProductContent"

export const ProductContentWrapper = (data: Data) => {
	const { thumbnailAlt, thumbnailUrl } = data

	return (
		<>
			<div className='flex flex-col w-full'>
				<BreadCrumbs data={data} />
				<div className='my-20 w-full mx-auto gap-16 flex justify-start'>
					<div className='p-4 w-2/5 bg-white h-fit flex justify-center'>
						<Image
							objectFit='cover'
							width={500}
							height={500}
							src={thumbnailUrl}
							alt={thumbnailAlt}
							className='border-1 border-gray-200 mx-auto transition-all'
						/>
					</div>
					<ProductContent {...data} />
				</div>
			</div>
		</>
	)
}
