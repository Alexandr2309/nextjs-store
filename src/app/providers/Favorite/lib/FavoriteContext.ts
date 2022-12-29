import { createContext, Dispatch, SetStateAction } from 'react';

interface IFavoriteContextProps {
  favorite?: number[];
  setFavorite?:  Dispatch<SetStateAction<number[]>>;
}

const FavoriteContext = createContext<IFavoriteContextProps>({});
export default FavoriteContext;

export const LOCAL_STORAGE_FAVORITE = 'user_favorite';