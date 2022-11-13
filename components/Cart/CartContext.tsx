import { useLazyQuery } from "@apollo/client"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { CART_PRODUCTS } from "../../graphql/handlers/queries"
import { ContextPayload } from "../../types/cart.types"


const CartContext = createContext<ContextPayload | null>(null)

export const CartStateContextProvider = ({ children }: { children: ReactNode }) => {
  const [_, { data, loading, refetch: refetchCartItems}] = useLazyQuery(CART_PRODUCTS);
  const [ count, setCount ] = useState(0)
  useEffect(() => {
      setCount(data?.getCart?.length ? data.getCart.length : 0);
  }, [data, loading])

  return (
    <CartContext.Provider value={{
      data: data,
      refetchCartItems,
      cartItemsCount: count
    }}>
      { children }
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("There is no CartContextProvider");
  }

  return context;
}