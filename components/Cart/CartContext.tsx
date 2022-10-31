import { createContext, ReactNode, useContext, useState } from "react";

interface CartItem {
  readonly price: number;
  readonly title: string;
  readonly count: number;
  readonly id: number;
}

interface CartState {
  items: readonly CartItem[];
  addItemToCart: (item: CartItem) => void;
  deleteItemCart: (id: number) => void;
  deleteProductCart: (id: number) => void;
}
export const CartStateContext = createContext<CartState | null>(null);

export const CartStateContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  //ADD PRODUCT TO CART
  const addItemToCart: CartState['addItemToCart'] = (item) => {
    setCartItems((cartItems) => {
      const existingItem = cartItems.find((existingItem) => existingItem.title === item.title);
      if (!existingItem) {
        return [...cartItems, item];
      }
      return cartItems.map((existingItem) => {
        return existingItem.title === item.title
          ? { ...existingItem, count: existingItem.count + 1 }
          : existingItem;
      });
    });
  };

  //DELETE ONE ITEM FROM PRODUCT CART
  const deleteItemCart: CartState['deleteItemCart'] = (id) => {
    setCartItems((cartItems) => {
      const existingItem = cartItems.find((existingItem) => existingItem.id === id);

      if (existingItem && existingItem.count > 1) {
        return cartItems.map((existingItem) => {
          return existingItem.id === id
            ? { ...existingItem, count: existingItem.count - 1 }
            : existingItem;
        });
      }
      return cartItems.filter((item) => item.id !== existingItem?.id);
    });
  };

  //DELETE PRODUCT FROM CART 
  const deleteProductCart: CartState['deleteProductCart']  = (id) => {
    setCartItems((cartItems) => cartItems.filter(product => product.id !== id));
  }

  return (
    <CartStateContext.Provider
      value={{
        items: cartItems,
        addItemToCart,
        deleteItemCart,
        deleteProductCart,
      }}
    >
      {children}
    </CartStateContext.Provider>
  );
};

export const useCartState = () => {
  const context = useContext(CartStateContext);
  if (!context) {
    throw new Error("There is no CartStateContextProvider");
  }

  return context;
};
