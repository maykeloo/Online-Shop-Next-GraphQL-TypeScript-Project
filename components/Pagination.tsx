import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/router";
interface PaginationProps {
  refetch: Dispatch<SetStateAction<number>>;
  page: number;
  productsLength: number;
  pagesCount: number
}

export const Pagination = ({
  refetch,
  pagesCount
}: PaginationProps) => {
  const router = useRouter();
  const [ pageNumber, setPageNumber ] = useState<number>(1)

  useEffect(() => {
    if(router.query.page) {
      setPageNumber(Number(router.query.page))
    }
  }, [router.query.page])
  return (
    <>
      <div className="flex gap-16 mx-auto justify-center py-2 px-2 absolute left-[50%] translate-x-[-50%] bottom-[-4rem]">
        <Link href={`/products/${Number(router.query.page) - (pageNumber > 1 ? 1 : 0)}`}>
          <ChevronLeftIcon className="cursor-pointer" width={24} onClick={() => refetch((prev) => (prev > 1 ? prev - 1 : prev))}/>
        </Link>
        { pagesCount }
        <Link href={`/products/${Number(router.query.page) + (pageNumber < pagesCount ? 1 : 0)}`}>
          <ChevronRightIcon className="cursor-pointer" width={24} onClick={() => refetch((prev) => (prev < pagesCount ? prev + 1 : prev))}/>
        </Link>
       
      </div>
    </>
  );
};
