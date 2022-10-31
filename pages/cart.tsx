import { CartContent } from "../components/Cart/CartContent";
import { CartSummary } from "../components/Cart/CartSummary";

const ShopCart = () => {
  return (
    <div className="grid grid-cols-3 gap-8 w-full">
      <CartContent />
      <CartSummary />
    </div>
  );
};

export default ShopCart;
