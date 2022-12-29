import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties } from 'react';
import cls from './styles.module.scss';

export interface ISkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  border?: string;
}

export const Skeleton = ({
  className,
  width,
  border,
  height,
}: ISkeletonProps) => {
  const styles: CSSProperties = {
    width,
    height,
    border,
  };

  return (
    <div style={styles} className={classNames(cls.Skeleton, {}, [className])} />
  );
};
