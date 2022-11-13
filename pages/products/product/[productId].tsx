import { ProductContentWrapper } from "../../../components/Product/ProductWrapperContent";
import { useEffect, useState } from "react";
import { GET_PRODUCT } from "../../../graphql/handlers/queries";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

const ProductDetailsPage = () => {
  const router = useRouter();
  const [productId, setProductId] = useState<string>("");

  useEffect(() => {
    if (router.query.productId) {
      setProductId(router.query.productId as string);
      refetch()
    }
  }, [router.query.productId]);

  const { data, loading, error, refetch } = useQuery(GET_PRODUCT, {
    variables: {
      productId: productId,
    },
    skip: !productId.length,
  });

  if (error) {
    return <h1>Something went wrong...</h1>;
  }

  if (!error && loading) {
    return <h1>Loading...</h1>;
  }

  if (data) {
    const productData = data.product.product;
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
      isInCart: productData.isInCart
    };
    return (
      <>
        <ProductContentWrapper {...props} />
      </>
    );
  }

  return null;
};

export default ProductDetailsPage;
