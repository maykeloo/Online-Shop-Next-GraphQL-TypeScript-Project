import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import React from "react";
import { ProductContent } from "../../../components/Product/ProductContent";
import { InferGetStaticPathsType, Products, StoreApiResponse } from "../../../types/products";

const ProductDetailsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
          {data && (
            <ProductContent
              data={{
                id: data.id,
                title: data.title,
                thumbnailAlt: data.title,
                thumbnailUrl: data.image,
                description: data.description,
                rating: data.rating,
                price: data.price,
                longDescription: data.longDescription
              }}
            />
          )}
    </>
  );
};

//STATIC PATHS
export const getStaticPaths = async () => {
  const response = await fetch(`https://naszsklep-api.vercel.app/api/products`);
  const data: Products[] = await response.json();
  return {
    paths: data.map(product => {
      return {
        params: {
          productId: product.id.toString(),
        },
      }
    }),
    fallback: 'blocking',
  };
};

//STATIC PROPS
export const getStaticProps = async ({ params }: GetStaticPropsContext<InferGetStaticPathsType<typeof getStaticPaths>>) => {
  const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${params?.productId}`);
  const data: StoreApiResponse | null = await res.json();

  if (!params?.productId) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
    notFound: false,
  };
};

export default ProductDetailsPage;



