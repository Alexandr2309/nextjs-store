import React, { memo } from 'react';
import { Product } from 'shared/api';
import { ProductCard } from 'entities/Product';
import { classNames } from 'shared/lib/classNames/classNames';
import Card from 'shared/ui/Card';
import { AddToCart } from 'features/AddToCart';
import cls from './styles.module.scss';
import { AddToFavorite } from 'features/AddToFavorite';

interface IProductItemProps {
  className?: string;
  product: Product;
}

export const ProductItem = memo(({ product, className }: IProductItemProps) => {
  return (
    <Card className={classNames(cls.root, {}, [className])}>
      <ProductCard product={product} key={product.id} className={cls.info} />
      <div className={cls.actions}>
        <AddToCart id={product.id} />
        <AddToFavorite id={product.id} className={cls.heart} />
      </div>
    </Card>
  );
});
