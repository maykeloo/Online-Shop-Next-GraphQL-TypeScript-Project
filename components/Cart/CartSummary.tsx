import { useEffect, useState } from "react";

export const CartSummary = () => {
  const [totalPrice, setTotalPrice] = useState<number>(0);


  return (
    <>
      <div className="py-10">
        <div>Podsumowanie koszyka</div>
        <div>
        </div>
        <div>Cena łącznie: <strong>{totalPrice}$</strong></div>
      </div>
    </>
  );
};
