import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
import { useToggleFavorite } from "../../utils/useToggleFavorite";

export interface ProductProps {
  data: {
    id: string;
    slug: string;
    thumbnailUrl: string;
    thumbnailAlt: string;
    title: string;
    price: number;
    isFavorite: boolean;
    rating: {
      rate: number;
      count: number;
    };
  };
}

export const ProductListItem = ({ data }: ProductProps) => {
  const { toggleFavorite } = useToggleFavorite(data);

  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <div className=" border-gray-200 flex flex-col justify-start group">
        <Link href={`/products/product/${data.id}`}>
          <div className="p-4 bg-white cursor-pointer ">
            <Image
              objectFit="contain"
              blurDataURL={data.thumbnailUrl}
              src={data.thumbnailUrl}
              alt={data.thumbnailAlt}
              className=" w-full h-96 border-1 border-gray-200 mx-auto transition-all"
              width={3}
              height={4}
              layout="responsive"
            />
          </div>
        </Link>
        <div className="flex flex-col justify-between">
          <div className="flex justify-between">
            <h1 className="font-light my-2 text-lg">{data.title}</h1>
            <HeartIcon
              fill={data.isFavorite ? "red" : "transparent"}
              className="w-6 cursor-pointer"
              onClick={() => toggleFavorite(data.id)}
            />
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
