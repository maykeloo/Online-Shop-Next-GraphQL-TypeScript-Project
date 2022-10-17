import Link from "next/link";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { StoreApiResponse } from "../../types/products";
import Head from "next/head";

export interface ProductProps {
  data: {
      id: number,
      thumbnailUrl: string,
      thumbnailAlt: string,
      title: string,
      price: number,
      rating: {
            rate: number,
            count: number
      }
  };
}
export interface ProductsListItem extends StoreApiResponse {
  thumbnailUrl: string;
  thumbnailAlt: string;
}


export const ProductListItem = ({ data }: ProductProps) => {
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <Link href={`/products/product/${data.id}`}> 
        <div className=" border-gray-200 h-full flex flex-col justify-start cursor-pointer group">
          <div className="p-4 bg-white">
            <Image objectFit="contain" src={data.thumbnailUrl} alt={data.thumbnailAlt} className=" w-full h-96 border-1 border-gray-200 mx-auto transition-all" width={3} height={4} layout="responsive"/>
          </div>
          <div className="flex-grow flex flex-col justify-between">
            <h1 className="font-light my-2 text-lg">{data.title}</h1>
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg">${data.price}</span>
              <span className="flex gap-2"><StarIcon className="w-4"/>{data.rating.rate} ({data.rating.count})</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
