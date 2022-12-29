import cls from './styles.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';

type AppLinkTheme = 'white' | 'gray' | 'clear';

export interface IAppLinkProps extends LinkProps {
  className?: string;
  children: ReactNode;
  theme?: AppLinkTheme;
}

export const AppLink = memo((props: IAppLinkProps) => {
  const { className, theme = 'white', children, ...otherProps } = props;

  return (
    <Link
      {...otherProps}
      className={classNames(cls.root, {}, [className, cls[theme]])}
    >
      {children}
      <span className={cls.circle}></span>
    </Link>
  );
});
