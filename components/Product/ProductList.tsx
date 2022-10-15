import { StoreApiResponse } from "../../types/products";
import { ProductDetails } from "./Product";

interface ProductsListProps {
  data: StoreApiResponse[];
}

export const ProductsList = ({ data }: ProductsListProps) => {
  return (
    <>
      <ul className="max-w-7xl mx-auto mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.map((product) => (
          <li key={product.id}>
            <ProductDetails
              data={{
                id: product.id,
                description: product.description,
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
    </>
  );
};