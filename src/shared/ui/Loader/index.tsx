import cls from './styles.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export interface ILoaderProps {
  className?: string;
}

export const Loader = ({ className }: ILoaderProps) => {
  return <div className={classNames(cls.ldsHourglass, {}, [className])}></div>;
};
