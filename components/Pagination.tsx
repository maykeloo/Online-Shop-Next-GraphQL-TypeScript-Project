import { Dispatch, SetStateAction } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/router";
interface PaginationProps {
  refetch: Dispatch<SetStateAction<number>>;
  page: number;
  setPerPage: Dispatch<SetStateAction<number>>;
  perPage: number;
  ssg?: boolean;
  productsLength: number
}

export const Pagination = ({
  refetch,
  page: currentPage,
  setPerPage,
  perPage,
  ssg,
  productsLength,
}: PaginationProps) => {
  const router = useRouter();
  const totalPagesLength = productsLength / perPage;
  return (
    <>
      <div className="flex gap-16 mx-auto justify-center py-2 px-2 absolute left-[50%] translate-x-[-50%] bottom-[-4rem]">
        <Link href={`/products/${Number(router.query.page) - (ssg && currentPage > 1 ? 1 : 0)}`}>
          <ChevronLeftIcon className="cursor-pointer" width={24} onClick={() => refetch((prev) => (prev > 1 ? prev - 1 : prev))}/>
        </Link>
        <div className="flex gap-4">
          {[...Array.from({ length: totalPagesLength }, (_, i) => i + 1)].map((page) => {
            const isPrev = page == currentPage - 1;
            const isCurrent = page == currentPage;
            const isNext = page == currentPage + 1;
            const currentPageClass =
              page == currentPage || page == Number(router.query.page)
                ? "border-b-2 border-black w-8 h-8 flex justify-center align-center h-min"
                : "";

              if (isPrev || isCurrent || isNext) {
                return (
                  <Link href={ssg ? `/products/${page}` : ""} key={page}>
                    <span onClick={() => {refetch(page)}} className={"cursor-pointer py-2 " + currentPageClass}>
                      {page}
                    </span>
                  </Link>
                );
              }
          })}
        </div>
        <Link href={`/products/${Number(router.query.page) + (ssg && currentPage < totalPagesLength ? 1 : 0)}`}>
          <ChevronRightIcon className="cursor-pointer" width={24} onClick={() => refetch((prev) => (prev < totalPagesLength ? prev + 1 : prev))}/>
        </Link>
        {!ssg && <select
          name="perPage"
          className="bg-black ml-auto absolute right-2 text-white border-0 px-2 py-1 rounded-[50px]"
          value={perPage}
          onChange={(e) => setPerPage(+e.target.value)}
        >
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="100">100</option>
        </select>}
      </div>
    </>
  );
};
