import { createContext, Dispatch, SetStateAction } from 'react';
import { SimpleCartType } from './useCart';

interface ICartContextProps {
  cart?: SimpleCartType[];
  setCart?: Dispatch<SetStateAction<SimpleCartType[]>>;
}

const CartContext = createContext<ICartContextProps>({});
export default CartContext;

export const LOCAL_STORAGE_CART = 'user_cart';
