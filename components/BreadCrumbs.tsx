import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Data } from "../types/utils.types";

interface BreadCrumbsProps {
      data: Data
}

export const BreadCrumbs = ({ data }: BreadCrumbsProps) => {
  return (
      <div className="flex gap-2">
      <div className="text-gray-400">Products</div>
      <ChevronRightIcon width={14}/>
      <div className="text-gray-400">{data.category}</div>
      <ChevronRightIcon width={14}/>
      <div className="uppercase font-bold">{data.title}</div>
    </div>
  );
}