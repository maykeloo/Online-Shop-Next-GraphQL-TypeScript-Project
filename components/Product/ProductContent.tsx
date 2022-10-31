import { StarIcon } from "@heroicons/react/24/solid";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from 'react-markdown'

export interface ProductContentProps {
  data: ProductsDetails;
}
export interface ProductsDetails {
  id: number;
  description: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
  price: number;
  longDescription: string;
}

export const ProductContent = ({ data }: ProductContentProps) => {
  return (
    <>
      <NextSeo title={data.title} description={data.description} canonical={`https://online-shop-81ahtpoi3-maykeloo.vercel.app/products/product/${data.id}`}/>
      <Link href={`/products/product/${data.id}`}>
        <div className=" border-gray-200 h-full flex flex-col justify-start cursor-pointer group">
          <div className="p-4 max-w-sm bg-white">
            <Image src={data.thumbnailUrl} alt={data.thumbnailAlt} className="max-w-56 border-1 border-gray-200 mx-auto transition-all" width={300} height={400} layout="responsive"/>
          </div>
          <div className="flex-grow flex flex-col justify-between">
            <h1 className="font-light my-2 text-lg">{data.title}</h1>
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg">${data.price}</span>
              <span className="flex gap-2">
                <StarIcon className="w-4" />
                {data.rating.rate} ({data.rating.count})
              </span>
            </div>
            <div>
              <article className="prose lg:prose-xl">
                <ReactMarkdown>{data.longDescription}</ReactMarkdown>
              </article>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
