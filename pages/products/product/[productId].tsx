import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ProductContent } from "../../../components/Product/ProductContent";
import { GET_PRODUCT } from "../../../graphql/handlers/queries";

const ProductDetailsPage = () => {
  const router = useRouter();
  const [productId, setProductId] = useState<string>("");

  useEffect(() => {
    if(router.query.productId) {
      setProductId(router.query.productId as string);
    }
  }, [router.query.productId]);

  const { data, loading, error } = useQuery(GET_PRODUCT, {
    variables: {
      productId: productId
    },
    skip: !productId.length,
  })

  if(error) {
    return <h1>Something went wrong...</h1>
  }

  if(!error && loading) {
    return <h1>Loading...</h1>
  }

  if(data) {
    return (
      <>
          <ProductContent
            data={{
              title: data.product.product.title,
              thumbnailAlt: data.product.product.title,
              thumbnailUrl: data.product.product.image.url,
              description: data.product.product.description,
              rating: data.product.product.rating,
              price: data.product.product.price,
            }}
            />
      </>
    );
  }

  return null
};

export default ProductDetailsPage