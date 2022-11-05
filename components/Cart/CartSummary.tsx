import { useEffect, useState } from "react";
import { useCartState } from "./CartContext";

export const CartSummary = () => {
  const cartState = useCartState();
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    let tP = 0;
    if (cartState.items.length === 0) {
      setTotalPrice(0);
    }
    cartState.items.forEach((item) => {
      tP += item.count * item.price;
      setTotalPrice(tP);
    });
  }, [cartState]);

  return (
    <>
      <div className="py-10">
        <div>Podsumowanie koszyka</div>
        <div>
          Liczba elementów: <strong>{cartState.items.length}</strong>
        </div>
        <div>Cena łącznie: <strong>{totalPrice}$</strong></div>
      </div>
    </>
  );
};
