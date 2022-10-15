import Link from "next/link";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export interface ProductProps {
  data: ProductsDetails;
}
export interface ProductsDetails {
  id: number;
  description: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  rating: {
    count: number,
    rate: number
  };
  title: string;
  price: number
}


export const ProductDetails = ({ data }: ProductProps) => {
  return (
    <>
      <Link href={`/products/product/${data.id}`}> 
        <div className="bg-gray-100 border-[1px] border-gray-200 rounded-xl h-full flex flex-col justify-start cursor-pointer group">
          <div className="shadow-xl p-4 bg-white rounded-xl">
            <Image objectFit="contain" src={data.thumbnailUrl} alt={data.thumbnailAlt} className=" w-full h-96 border-1 border-gray-200 mx-auto transition-all" width={3} height={4} layout="responsive"/>
          </div>
          <div className="px-4">
            <div className="flex justify-between mt-4 items-center">
              <span className="font-bold text-lg text-white bg-black px-4 py-1 rounded-[50px]">${data.price}</span>
              <span className="flex gap-2"><StarIcon className="w-4"/>{data.rating.rate} ({data.rating.count})</span>
            </div>
            <h1 className="font-light mt-2 mb-4 text-xl">{data.title}</h1>
          </div>
        </div>
      </Link>
    </>
  );
};
