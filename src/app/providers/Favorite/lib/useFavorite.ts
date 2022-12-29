import { useCallback, useContext, useState } from 'react';
import FavoriteContext from './FavoriteContext';

type useFavoriteResult = {
  favorite: number[];
  addToFavorite: (x: number) => void;
  removeFromFavorite: (x: number) => void;
};
export const useFavorite = (): useFavoriteResult => {
  const { setFavorite, favorite = [] } = useContext(FavoriteContext);

  const addToFavorite = useCallback((id: number) => {
    setFavorite?.((favorites) => [...favorites, id]);
  }, [setFavorite]);

  const removeFromFavorite = useCallback((id: number) => {
    setFavorite?.((favorites) => favorites.filter((item) => item !== id));
  }, [setFavorite]);

  return {
    favorite,
    removeFromFavorite,
    addToFavorite,
  };
};
