import { gql } from "@apollo/client";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import React from "react";
import { ProductContent } from "../../../components/Product/ProductContent";
import { client } from "../../../graphql/apollo-client";
import { InferGetStaticPathsType } from "../../../types/products";
import {
  GetAllProductsResponse,
} from "../../../types/products/getProducts";

const ProductDetailsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      {data && (
        <ProductContent
          data={{
            title: data.title,
            thumbnailAlt: data.title,
            thumbnailUrl: data.image.url,
            description: data.description,
            rating: data.rating,
            price: data.price,
          }}
        />
      )}
    </>
  );
};

//STATIC PATHS
export const getStaticPaths = async () => {
  const {
    data: products,
    loading: productsLoading,
    error: productsError,
  } = await client.query<GetAllProductsResponse>({
    query: gql`
      query {
        products {
          slug
        }
      }
    `,
  });
  return {
    paths: products.products.map((product) => {
      return {
        params: {
          productId: product.slug,
        },
      };
    }),
    fallback: "blocking",
  };
};

//STATIC PROPS
export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<InferGetStaticPathsType<typeof getStaticPaths>>) => {
  const {
    data: product,
    loading: productsLoading,
    error: productsError,
  } = await client.query({
    variables: {
      slug: 'piłka-adidas',
    },
    query: gql`
     query($slug: String!) {
      product(slug: $slug) {
        product {
          title
          price
          description
          image {
            url
          }
          rating {
            rate
            count
          }
        }
      }
    }
    `,
  });

  if (!params?.productId) {
    return {
      props: {},
      notFound: true,
    };
  }
  return {
    props: {
      data: product.product.product,
    },
    notFound: false,
  };
};

export default ProductDetailsPage;
