import React, { memo } from 'react';
import cls from './styles.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import FillStar from 'shared/assets/icons/star_fill.svg';
import EmptyStar from 'shared/assets/icons/star_empty.svg';

interface IStarsProps {
  className?: string;
  rate: number;
}

const FillStarComponent = () => <img src={FillStar} alt='полная звезда' />;
const EmptyStarComponent = () => <img src={EmptyStar} alt='пустая звезда' />;

export const Stars = memo((props: IStarsProps) => {
  const { rate, className } = props;

  const content = Array.from({ length: rate }, (item) => FillStar)
    .concat(Array.from({ length: 5 - rate }, (item) => EmptyStar))
    .map((Item, i) => <Item key={i} />);

  return <div className={classNames(cls.root, {}, [className])}>{content}</div>;
});
