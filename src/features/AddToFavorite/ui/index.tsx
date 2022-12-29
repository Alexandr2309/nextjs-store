import React, { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './styles.module.scss';
import { Button } from 'shared/ui/Button';
import { useFavorite } from 'app/providers/Favorite';
import RedHeartIcon from 'shared/assets/icons/heart_red.svg';
import GrayHeartIcon from 'shared/assets/icons/heart_gray.svg';

interface IAddToFavoriteProps {
  className?: string;
  id: number;
}

export const AddToFavorite = (props: IAddToFavoriteProps) => {
  const { className, id } = props;
  const { addToFavorite, favorite, removeFromFavorite } = useFavorite();
  const isFavorite = favorite.find((productId) => productId === id);

  const onAddFavorite = useCallback(() => {
    addToFavorite(id);
  }, [addToFavorite, id]);

  const onRemoveFavorite = useCallback(() => {
    removeFromFavorite(id);
  }, [removeFromFavorite, id]);

  return (
    <>
      {isFavorite ? (
        <button
          onClick={onRemoveFavorite}
          className={classNames(cls.root, {}, [className, cls.active])}
        >
          <RedHeartIcon />
        </button>
      ) : (
        <button
          onClick={onAddFavorite}
          className={classNames(cls.root, {}, [className])}
        >
          <GrayHeartIcon />
        </button>
      )}
    </>
  );
};
