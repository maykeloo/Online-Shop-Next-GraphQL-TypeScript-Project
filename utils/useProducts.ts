import { useQuery } from "@apollo/client";
import { ALL_PRODUCTS_COUNT, PAGE_PRODUCTS_QUERY } from "../graphql/handlers/queries";
import { Products } from "../types/products.types";

export const useProducts = (limit: number, offset: number) => {
  const { data: products, loading: productsLoading, error: productsError } = useQuery<Products>(PAGE_PRODUCTS_QUERY, {
    variables: {
      limit,
      offset
    },
    skip: !offset
  });
  const { data: productsCount } = useQuery(ALL_PRODUCTS_COUNT);
  const MAX_ON_PAGE = 50;
  const pagesCount = Math.ceil(productsCount?.productsCount / MAX_ON_PAGE);
  return {
    products,
    productsCount,
    pagesCount,
    productsLoading,
    productsError
  }
};
