import React from 'react';
import cls from './styles.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text';
import ArrowIcon from 'shared/assets/icons/arrow.svg';
import { Banners } from './banners';
import { Banner } from './banners/model';

interface ICategoryBannersProps {
  className?: string;
  title: string;
  banners: Banner[];
}

export const CategoryBanners = (props: ICategoryBannersProps) => {
  const { className, title, banners } = props;

  return (
    <article className={classNames(cls.root, {}, [className])}>
      <Text title={title} size={TextSize.XL} weight="bold" className={cls.mainTitle}/>
      <ArrowIcon className={cls.arrow} />
      <Banners banners={banners} className={cls.banners}/>
    </article>
  );
};
