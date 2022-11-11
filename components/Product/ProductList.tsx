import { Products } from "../../types/products/products";
import { ProductListItem } from "./ProductListItem";

interface ProductsListProps {
  data: Products;
}

export const ProductsList = ({ data }: ProductsListProps) => {
  return (
    <>
      <ul className=" mx-auto mb-10 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.productsList?.map((product) => (
          <li key={product.id}>
            <ProductListItem
              data={{
                id: product.id,
                slug: product.slug,
                rating: product.rating,
                thumbnailAlt: product.image.alt,
                thumbnailUrl: product.image.url,
                title: product.title,
                price: product.price,
                isFavorite: product.isFavorite
              }}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
