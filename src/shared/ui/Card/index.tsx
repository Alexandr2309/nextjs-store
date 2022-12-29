import React, { ReactNode } from 'react';
import cls from './styles.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface ICardProps {
  className?: string;
  children: ReactNode;
}

const Card = ({ className, children }: ICardProps) => {
  return <article className={classNames(cls.Card, {}, [className])}>{children}</article>;
};

export default Card;
