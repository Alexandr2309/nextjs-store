import React, {
  MutableRefObject,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import cls from './styles.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface ICardProps {
  className?: string;
  leftCls?: string;
  rightCls?: string;
  spanCls?: string;
  children: ReactNode;
}

export const Label = ({
  className,
  children,
  rightCls,
  leftCls,
  spanCls,
}: ICardProps) => {
  const divRef = useRef() as MutableRefObject<HTMLDivElement>;

  const triangleStyles = useMemo(
    () => ({
      left: {
        borderTopWidth: divRef?.current?.clientHeight,
      },
      right: {
        borderBottomWidth: divRef?.current?.clientHeight,
      },
    }),
    []
  );

  return (
    <div ref={divRef} className={classNames(cls.root, {}, [className])}>
      <span
        style={{ ...triangleStyles.left }}
        className={classNames(cls.leftTriangle, {}, [leftCls])}
      ></span>
      <span className={classNames(cls.Label, {}, [spanCls])}>{children}</span>
      <span
        style={{ ...triangleStyles.right }}
        className={classNames(cls.rightTriangle, {}, [rightCls])}
      ></span>
    </div>
  );
};
