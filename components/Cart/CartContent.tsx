import { TrashIcon } from "@heroicons/react/24/outline";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
import { useCartState } from "./CartContext";

export const CartContent = () => {
  const cartState = useCartState();

  return (
    <div className="col-span-2">
      <ul className="divide-y divide-gray-200">
        {cartState.items.map((item, index) => (
          <li  className="py-4 flex justify-between"  key={`${item.price}_${index}`}>
            <div className="mr-4 flex gap-2">
              <MinusCircleIcon width={24} className="cursor-pointer" onClick={() => cartState.deleteItemCart(item.id)}/>
              <input type="number" className="border border-black w-16 h-8 text-center" value={item.count}/>
              <PlusCircleIcon width={24} className="cursor-pointer" onClick={() => cartState.addItemToCart(item)}/>
            </div>
            <div>{item.title}</div>
            <div className="ml-auto mr-4">{item.price}$ </div>
            <TrashIcon className="cursor-pointer text-red-500 hover:bg-red-200 w-8 h-8 p-1 rounded-md" onClick={() => cartState.deleteProductCart(item.id)} width={24}/>
          </li>
        ))}
      </ul>
    </div>
  );
};
