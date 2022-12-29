import { classNames } from 'shared/lib/classNames/classNames';
import cls from './styles.module.scss';
import { ReactNode } from 'react';

export interface ILayoutProps {
  className?: string;
  children: ReactNode;
}

export const Layout = ({ className, children }: ILayoutProps) => {
  return (
    <div className={classNames(cls.root, {}, [className])}>{children}</div>
  );
};
