import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export interface ProductContentProps {
  data: ProductsDetails;
}
export interface ProductsDetails {
  description: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
  price: number;
}

export const ProductContent = ({ data }: ProductContentProps) => {
  return (
    <>
      <div className="my-10 rounded-xl h-full w-full max-w-7xl mx-auto flex justify-start group flex-col sm:flex-row">
        <div className="shadow-xl p-4 bg-white rounded-xl flex justify-center">
          <Image layout="intrinsic" objectFit="contain" width={300} height={400} src={data.thumbnailUrl} alt={data.thumbnailAlt} className="border-1 border-gray-200 mx-auto transition-all"/>
        </div>
        <div className="px-4">
          <div className="flex justify-between mt-4 flex-col gap-4 items-start">
            <span className="flex gap-2">
              <StarIcon className="w-4" />
              {data.rating.rate} ({data.rating.count})
            </span>
            <span className="font-bold text-lg text-white bg-black px-4 py-1 rounded-[50px]">
              ${data.price}
            </span>
          </div>
          <h1 className="font-bold text-2xl mb-4 mt-4">{data.title}</h1>
          <p className="w-72">{data.description}</p>
        </div>
      </div>
    </>
  );
};
