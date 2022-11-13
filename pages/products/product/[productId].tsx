import { ProductContentWrapper } from "../../../components/Product/ProductWrapperContent"
import { useEffect, useState } from "react"
import { GET_PRODUCT } from "../../../graphql/handlers/queries"
import { useRouter } from "next/router"
import { ProductStateContextProvider, useProductContext } from "../../../components/Product/ProductContext"


const ProductDetailsPage= () => {
	const router = useRouter()
	const { data, getProduct, refetch } = useProductContext()

	useEffect(() => {
    if (router.query.productId && !data.loading) {
      getProduct(router.query.productId as string)
		}
	}, [router.query.productId])

	let element
	if (data.error) {
		element = <h1>Something went wrong...</h1>
	}

	if (!data.error && data.loading) {
		element = <h1>Loading...</h1>
	}

	if (data.data) {
		const productData = data.data
		const props = {
			id: productData.id,
			slug: productData.slug,
			title: productData.title,
			thumbnailAlt: productData.title,
			thumbnailUrl: productData.image.url,
			longDescription: productData.longDescription,
			rating: productData.rating,
			price: productData.price,
			category: productData.category,
			isFavorite: productData.isFavorite,
			isInCart: productData.isInCart,
		}

		element = <ProductContentWrapper {...props} />

		return <>{element}</>
	}

  return null
}

export default ProductDetailsPage
