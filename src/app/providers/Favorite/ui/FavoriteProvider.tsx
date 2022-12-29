import { ReactNode, useMemo, useState } from 'react';
import FavoriteContext from '../lib/FavoriteContext';

export const FavoriteContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [favorite, setFavorite] = useState<number[]>([]);

  const value = useMemo(
    () => ({
      favorite,
      setFavorite,
    }),
    [favorite]
  );

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};
