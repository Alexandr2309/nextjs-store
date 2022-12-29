import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './styles.module.scss';
import { Button } from 'shared/ui/Button';
import { ChangeCount } from './count-change';
import { useCart } from 'app/providers/Cart';

interface IAddToCartProps {
  className?: string;
  id: number;
}

export const AddToCart = (props: IAddToCartProps) => {
  const { className, id } = props;
  const [count, setCount] = useState(1);
  const { addToCart, removeFromCart, cart } = useCart();
  const isProductInCart = cart.find((product) => product.id === id);

  const onAddHandler = useCallback(() => {
    addToCart({ id, count });
    console.log(cart);
  }, [addToCart, count, id]);

  const onRemoveHandler = useCallback(() => {
    removeFromCart({ id, count });
  }, [count, id, removeFromCart]);

  const InCartButton = () => (
    <Button onClick={onRemoveHandler} className={cls.remove} theme='successful'>
      В корзине
    </Button>
  );

  return (
    <div className={classNames(cls.root, {[cls.large]: isProductInCart !== undefined}, [])}>
      {isProductInCart ? (
        <InCartButton />
      ) : (
        <>
          <Button onClick={onAddHandler} className={cls.add}>
            В корзину
          </Button>
          <ChangeCount count={count} setCount={setCount} />
        </>
      )}
    </div>
  );
};
