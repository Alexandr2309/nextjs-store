import cls from './styles.module.scss';
import { Product } from 'shared/api';
import Image, { ImageLoader, ImageLoaderProps } from 'next/image';
import { Text, TextSize } from 'shared/ui/Text';
import { Stars } from 'shared/ui/Stars';
import { feedbackFormat } from 'entities/Product/lib';
import { convertPrice } from 'shared/lib/nums';
import { Label } from 'shared/ui/Label';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Skeleton } from 'shared/ui/Skeleton';

export interface ICartProps {
  className?: string;
  product: Product;
}

export const ProductCard = ({ className, product }: ICartProps) => {
  return (
    <div className={className}>
      <div className={cls.imgWrapper}>
        <Image
          src={product.image}
          alt={product.title}
          fill
          placeholder='blur'
          blurDataURL='https://img.freepik.com/free-vector/white-blurred-background_1034-249.jpg'
          objectFit='contain'
        />
        {product.rating.count > 300 && (
          <div className={cls.hitWrapper}>
            <Label className={cls.hit}>Хит</Label>
          </div>
        )}
      </div>
      <div className={cls.info}>
        <Text
          text={product.category}
          size={TextSize.S}
          className={cls.category}
        />
        <Stars rate={Math.round(product.rating.rate)} className={cls.stars} />
        <Link href='/feedback' className={cls.link}>
          <Text
            text={
              product.rating.count.toString() +
              ' ' +
              feedbackFormat(product.rating.count)
            }
            size={TextSize.S}
            className={cls.feedback}
          />
        </Link>
      </div>
      <Text
        text={product.description}
        size={TextSize.L}
        className={cls.description}
      />
      <div className={cls.cost}>
        <Text
          title={String(convertPrice(product.price)) + ' ₽ '}
          size={TextSize.LBIG}
          weight='semibold'
          className={cls.costTitle}
        />
      </div>
    </div>
  );
};
