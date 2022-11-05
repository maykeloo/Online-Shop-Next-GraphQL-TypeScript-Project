import { gql } from "@apollo/client";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { FilterList } from "../../components/Filter/FilterList";
import { Pagination } from "../../components/Pagination";
import { ProductsList } from "../../components/Product/ProductList";
import { client } from "../../graphql/apollo-client";
import { InferGetStaticPathsType } from "../../types/products";
import { GetAllProductsResponse, GetProductsCount } from "../../types/products/getProducts";

const ProductsPage = ({
  products,
  productsCount, 
  pagesCount
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const [page, setPage] = useState(router ? Number(router.query.page) : 1);
  const [perPage, setPerPage] = useState(25);
  return (
    <>
      <div className="flex max-w-[90vw] mb-20 mx-auto relative">
        <div className="flex-grow">
          {products ? <ProductsList data={products} /> : null}
          <Pagination
            refetch={setPage}
            setPerPage={setPerPage}
            perPage={perPage}
            page={page}
            productsLength={productsCount}
            pagesCount={pagesCount}
          />
        </div>
      </div>
    </>
  );
};
//STATIC PATHS
export const getStaticPaths = async () => {
  return {
    paths: [...Array.from({ length: 10 }, (_, i) => i + 1)].map(
      (pageNumber) => {
        return {
          params: {
            page: pageNumber.toString(),
          },
        };
      }
    ),
    fallback: "blocking",
  };
};

//STATIC PROPS
export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<InferGetStaticPathsType<typeof getStaticPaths>>) => {
  const { data: products, loading: productsLoading, error: productsError } = await client.query<GetAllProductsResponse>({
    query: gql`
      query {
        products {
          id
          title
          slug
          imageId
          image {
            alt
            url
            height
          }
          price
          rating {
            rate
            count
          }
          category
        }
      }
    `,
  });

  const { data: productsCount, loading: productCountLoading, error: productsCountError } = await client.query<GetProductsCount>({
    query: gql`
      query {
        productsCount
      }
    `,
  });
  const MAX_ON_PAGE = 50;
  const pagesCount = Math.ceil(productsCount.productsCount / MAX_ON_PAGE);
  return {
    props: {
      products: products.products,
      productsCount: productsCount.productsCount,
      pagesCount 
    },
    notFound: false,
    revalidate: 1000 * 60 * 60 * 24,
  };
};
export default ProductsPage;
