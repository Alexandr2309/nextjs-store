import { ReactNode, useMemo, useState } from 'react';
import CartContext from 'app/providers/Cart/lib/CartContext';
import { SimpleCartType } from '../lib/useCart';

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<SimpleCartType[]>([]);

  const value = useMemo(
    () => ({
      cart,
      setCart,
    }),
    [cart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
