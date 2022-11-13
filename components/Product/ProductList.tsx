import { Products } from "../../types/products.types";
import { MemoizedProductListItem } from "./ProductListItem";

interface ProductsListProps {
  data: Products;
}

export const ProductsList = ({ data }: ProductsListProps) => {
  return (
    <>
      <ul className=" mx-auto mb-10 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.productsList?.map((product) => (
          <li key={product.id}>
            <MemoizedProductListItem
              thumbnailUrl={product.image.url}
              isFavorite={product.isFavorite}
              thumbnailAlt={product.image.alt}
              rating={product.rating}
              title={product.title}
              price={product.price}
              id={product.id}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
