import React, { memo } from 'react';
import { Product } from 'shared/api';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './styles.module.scss';
import { ProductItem } from '../product-item';
import { Banner, CategoryBanners } from 'features/CategoryBanners';

interface IProductListProps {
  className?: string;
  products: Product[];
}

const banners: Banner[] = [
  {
    title: 'На товары для кабинета',
    href: '/cabinet',
    img: 'https://s3-alpha-sig.figma.com/img/3bf8/a9e3/c41865981b038bd93f9c8880b9384053?Expires=1673222400&Signature=QGqJ0J2qp03hkr8BDTYUS12ifgpResnmwlCvGEMUXz93AU64GdcgKqcHsCj-0PUzNbvomYiUc2l~GTcJlygeyUEloHGPzrfP-kTM5uYCO77tpPJtT3W7ADeoCR~ymncE1FI7XDE0CJdafYMbdRT0mzvvAtVd1HCy5osmWSH-9dRir89YmrbHLLgxX6JoGLpzHir91YuCZSge9hIp0jLa4ntakhyK8Ia2FIeqagnLCs6Ls3Cmwbv3bzuO2FkxvuFL86PRxc128pVlIFQzMhSvGNIgpWtd5vx8CkjDNIujwayTLJpOssnl0UmUq5q3ZbWd4rOFPvHtn1ogwbbs9OGBKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    discount: '25',
  },
  {
    title: 'Скидка на периферию для компьютера',
    href: '/peref',
    img: 'https://s3-alpha-sig.figma.com/img/a97d/9fd8/c92e42f379472fd918c96e2e1cac29fd?Expires=1673222400&Signature=ijpqGxrVdx4idR9d6WLrmcNNdqcghnSg44POebSH30PG6icEorNK8t0XqLaLZtTVABsf3FE~95XbcqW6KGpFJp8YLwaZvUIdy4FNuUQ0ox2fnIXSNt1F-UCO7EBjCPNXubPlN9pL3yQuQ4AzC4zj2tOGSmHCB9tM4Pg3z51PH8uC8h2MeNZlDMdC2bkET0zObce-Q3SuCZWL5N1zQ-DX5tY6MM23kHEhvzqCG~BfUewuCMTq8tbyvhYHFIIfc2fO~ol2D~CpJVerJ~1sRtyMceEY3rB93PN71EEi0XRBQAM~~sH2Xc~cLmGrE~yXFzWPEJcP2~2QMxuvbkjEF-x5~w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    discount: '10',
  },
];

export const ProductList = memo(
  ({ products, className }: IProductListProps) => {
    return (
      <div className={classNames(cls.root, {}, [className])}>
        <CategoryBanners title='Всё для комфортной работы' banners={banners} />
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    );
  }
);
