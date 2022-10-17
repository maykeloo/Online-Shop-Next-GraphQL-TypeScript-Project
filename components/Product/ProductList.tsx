import { StoreApiResponse } from "../../types/products";
import { ProductListItem } from "./ProductListItem";

interface ProductsListProps {
  data: StoreApiResponse[];
}

export const ProductsList = ({ data }: ProductsListProps) => {
  return (
    <>
      <ul className=" mx-auto mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map((product) => (
          <li key={product.id}>
            <ProductListItem
              data={{
                price: product.price,
                rating: product.rating,
                id: product.id,
                title: product.title,
                thumbnailAlt: product.title,
                thumbnailUrl: product.image
              }}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
