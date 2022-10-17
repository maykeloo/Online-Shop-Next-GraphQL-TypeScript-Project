import { useQuery } from "@tanstack/react-query";

import { Pagination } from "../components/Pagination";
import { getProducts } from "../utils/api/useProducts";
import { useState } from "react";
import { ProductListItem } from "../components/Product/ProductListItem";

const ProductsCRSPage = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(25);
  const { data, error, isLoading } = useQuery(["products", { page, perPage }], async () => {
    const data = await getProducts({ page, perPage });
    return data;
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || error) {
    return <div>Coś poszło nie tak.</div>;
  }

  return (
    <>
      <ul className="max-w-[90vw] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((product) => (
          <li key={product.id}>
            <ProductListItem
              data={{
                id: product.id,
                rating: product.rating,
                thumbnailAlt: product.title,
                thumbnailUrl: product.image,
                title: product.title,
                price: product.price
              }}
            />
          </li>
        ))}
      </ul>
      <Pagination refetch={setPage} setPerPage={setPerPage} perPage={perPage} page={page} productsLength={4000}/>
    </>
  );
};

export default ProductsCRSPage;
