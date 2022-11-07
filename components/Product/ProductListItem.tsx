import Link from "next/link";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { StoreApiResponse } from "../../types/products";
import Head from "next/head";
import { HeartIcon } from "@heroicons/react/24/outline";
import { useMutation } from "@apollo/client";
import { ADD_FAVORITE } from "../../graphql/handlers/mutations";
import client from "../../apollo-client";

export interface ProductProps {
  data: {
    id: string;
    thumbnailUrl: string;
    thumbnailAlt: string;
    title: string;
    price: number;
    rating: {
      rate: number;
      count: number;
    };
  };
}
export interface ProductsListItem extends StoreApiResponse {
  thumbnailUrl: string;
  thumbnailAlt: string;
}

export const ProductListItem = ({ data }: ProductProps) => {
  const [mutateFunction, { error }] = useMutation(ADD_FAVORITE, { client: client });

  const addToFavorite = (productId: number) => {
    try {
      mutateFunction({variables: {
        productId,
        userId: 1
      }})
    } catch {
      console.log(error)
    }
  }

  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <div className=" border-gray-200 flex flex-col justify-start group">
        <Link href={`/products/product/${data.id}`}>
          <div className="p-4 bg-white cursor-pointer ">
            <Image objectFit="contain" blurDataURL={data.thumbnailUrl} src={data.thumbnailUrl} alt={data.thumbnailAlt} className=" w-full h-96 border-1 border-gray-200 mx-auto transition-all" width={3} height={4} layout="responsive"/>
          </div>
        </Link>
        <div className="flex flex-col justify-between">
          <div className="flex justify-between">
            <h1 className="font-light my-2 text-lg">{data.title}</h1>
            <HeartIcon className="w-6"  onClick={() => addToFavorite(+data.id) }/>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg">${data.price}</span>
            <span className="flex gap-2 items-center">
              <div className="w-4 cursor-pointer">
                <StarIcon />
              </div>
              {data.rating.rate} ({data.rating.count})
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
