import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from '../styles.module.scss';
import { Banner } from './model';
import { BannerItem } from './banner-item';

interface IBannerProps {
  className?: string;
  banners: Banner[];
}

export const Banners = (props: IBannerProps) => {
  const { className, banners } = props;

  return (
    <div className={classNames(cls.bannersWrapper, {}, [className])}>
      {banners.map((banner, i) => (
        <BannerItem
          banner={banner}
          key={banner.href}
          invert={(i + 1) % 2 === 0}
        />
      ))}
    </div>
  );
};
