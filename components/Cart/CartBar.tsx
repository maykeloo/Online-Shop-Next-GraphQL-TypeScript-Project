import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { memo } from "react";
import { NavLink } from "../Nav/Link";

interface CartBarProps {
  count: number;
}

export const CartBar = ({ count }: CartBarProps) => {
  return (
    <>
      <NavLink pathName="cart">
        <span className="absolute top-1 right-0 text-white bg-red-600 w-5 h-5 flex justify-center items-center rounded-full text-sm">
          {count}
        </span>
        <ShoppingBagIcon width={20} />
      </NavLink>
    </>
  );
};
