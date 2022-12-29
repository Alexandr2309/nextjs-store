import { useCallback, useContext, useState } from 'react';
import CartContext from './CartContext';

export type SimpleCartType = { id: number; count: number };

type useCartResult = {
  cart: SimpleCartType[];
  addToCart: ({ id, count }: SimpleCartType) => void;
  removeFromCart: ({ id }: SimpleCartType) => void;
};
export const useCart = (): useCartResult => {
  const { setCart, cart = [] } = useContext(CartContext);

  const addToCart = useCallback(
    ({ id, count }: SimpleCartType) => {
      setCart?.((cart) => [...cart, { id, count }]);
    },
    [setCart]
  );

  const removeFromCart = useCallback(
    ({ id }: SimpleCartType) => {
      setCart?.((cart) => cart.filter((item) => item.id !== id));
    },
    [setCart]
  );

  return {
    cart,
    removeFromCart,
    addToCart,
  };
};
