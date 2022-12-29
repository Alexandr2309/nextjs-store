import cls from './styles.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributes, memo, ReactNode } from 'react';

type ButtonTheme = 'successful' | 'primary' | 'clear';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  theme?: ButtonTheme;
}

export const Button = memo((props: IButtonProps) => {
  const { className, theme = 'primary', children, ...otherProps } = props;

  return (
    <button
      {...otherProps}
      className={classNames(cls.root, {}, [className, cls[theme]])}
    >
      {children}
    </button>
  );
});
