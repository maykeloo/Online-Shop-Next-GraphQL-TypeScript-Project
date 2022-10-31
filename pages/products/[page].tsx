import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { FilterList } from "../../components/Filter/FilterList";
import { Pagination } from "../../components/Pagination";
import { ProductsList } from "../../components/Product/ProductList";
import {
  InferGetStaticPathsType,
  StoreApiResponse,
} from "../../types/products";

const ProductsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const [page, setPage] = useState(router ? Number(router.query.page) : 1);
  const [perPage, setPerPage] = useState(25);
  return (
    <>
      {data ? <ProductsList data={data} /> : null}
      <Pagination
        refetch={setPage}
        setPerPage={setPerPage}
        ssg={true}
        perPage={perPage}
        page={page}
        productsLength={4000}
      />
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
  const offset = params?.page ? +params.page * 25 - 25 : 25;

  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=25&offset=${offset}`
  );
  const data: StoreApiResponse[] | null = await res.json();

  if (!params?.page) {
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
    revalidate: 1000 * 60 * 60 * 24,
  };
};
export default ProductsPage;
