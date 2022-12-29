import React, { Dispatch, memo, SetStateAction, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './styles.module.scss';
import { Button } from 'shared/ui/Button';
import PlusIcon from 'shared/assets/icons/plus.svg';
import MinusIcon from 'shared/assets/icons/minus.svg';
import { Text, TextSize } from 'shared/ui/Text';

interface IChangeCountProps {
  className?: string;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

export const ChangeCount = memo((props: IChangeCountProps) => {
  const { className, setCount, count } = props;

  const addCount = useCallback(() => {
    setCount((count) => count + 1);
  }, [setCount]);

  const takeCount = useCallback(() => {
    setCount((count) => (count === 1 ? count : count - 1));
  }, [setCount]);

  return (
    <div className={classNames(cls.change, {}, [])}>
      <button key={'count_btn_minus'} onClick={takeCount}>
        <MinusIcon />
      </button>
      <Text text={count.toString()} size={TextSize.S} key={'count_text'} className={cls.text} />
      <button key={'count_btn_plus'} onClick={addCount}>
        <PlusIcon />
      </button>
    </div>
  );
});
