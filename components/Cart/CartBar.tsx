import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { NavLink } from "../Nav/Link";
import { useCartState } from "./CartContext";

export const CartBar = () => {
  const cartState = useCartState()

  return (
    <>
      <NavLink pathName="cart">
        <span className="absolute top-1 right-0 text-white bg-red-600 w-5 h-5 flex justify-center items-center rounded-full text-sm">
          {cartState.items.length}
        </span>
        <ShoppingBagIcon width={20} />
      </NavLink>
    </>
  );
};
