import React from 'react';
import { Banner } from './model';
import cls from '../styles.module.scss';
import Image from 'next/image';
import { Label } from 'shared/ui/Label';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { Text, TextSize } from 'shared/ui/Text';

interface IBannerProps {
  className?: string;
  banner: Banner;
  invert?: boolean;
}

export const BannerItem = (props: IBannerProps) => {
  const { className, banner, invert } = props;

  return (
    <div
      className={classNames(cls.banner, { [cls.invert]: invert }, [className])}
    >
      <div className={cls.imgWrapper}>
        <Image
          src={banner.img}
          alt={banner.title}
          fill
          placeholder='blur'
          blurDataURL='https://img.freepik.com/free-vector/white-blurred-background_1034-249.jpg'
          objectFit='cover'
        />
      </div>
      <div className={cls.info}>
        {banner.discount && (
          <Label className={cls.discount} spanCls={cls.label}>
            -{banner.discount}%
          </Label>
        )}
        {
          <Text
            text={banner.title}
            size={TextSize.LBIG}
            className={cls.title}
          />
        }
        {banner.href && (
          <AppLink
            href={banner.href}
            className={cls.link}
            theme={invert ? 'gray' : 'white'}
          >
            Выбрать
          </AppLink>
        )}
      </div>
    </div>
  );
};
