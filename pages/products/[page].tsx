import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FilterList } from "../../components/Filter/FilterList";
import { Pagination } from "../../components/Pagination";
import { ProductsList } from "../../components/Product/ProductList";
import { useProducts } from "../../utils/useProducts";

const ProductsPage = () => {
  const router = useRouter();
  const [page, setPage] = useState(0);
  const {
    pagesCount,
    products,
    productsCount,
    productsError,
    productsLoading,
  } = useProducts(10, page);

  useEffect(() => {
    setPage(Number(router.query.page));
  }, [router.query.page]);

  let element;

  if (productsError) {
    element = <h1>Something went wrong.</h1>;
  }

  if(!productsError && productsLoading) {
    element = <h1>Loading...</h1>
  }

  if(products) {
    element = (
        <ProductsList data={products} />
    )
  }
  return (
    <>
      <div className="flex max-w-[90vw] mb-20 mx-auto relative w-full">
        <div className="flex-grow flex">
          <FilterList />
          {element}
        </div>
        <Pagination refetch={setPage} page={page} productsLength={productsCount} pagesCount={pagesCount}/>
      </div>
    </>
  );
};

export default ProductsPage;
