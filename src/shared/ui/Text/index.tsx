import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './styles.module.scss';

export enum TextAlign {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
}

export enum TextSize {
  XS = 'size_xs',
  S = 'size_s',
  SM = 'size_sm',
  M = 'size_m',
  L = 'size_l',
  LBIG = 'size_l_big',
  XL = 'size_xl',
}
type TextWeight = 'regular' | 'medium' | 'semibold' | 'bold';

export interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  align?: TextAlign;
  size?: TextSize;
  weight?: TextWeight;
}

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.XS]: 'p',
  [TextSize.S]: 'p',
  [TextSize.SM]: 'h5',
  [TextSize.M]: 'h4',
  [TextSize.L]: 'h3',
  [TextSize.LBIG]: 'h2',
  [TextSize.XL]: 'h1',
};

export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    align = TextAlign.LEFT,
    size = TextSize.M,
    weight = 'regular',
  } = props;

  const addClasses = [className, cls[align], cls[size], cls[weight]];

  const HeaderTag = mapSizeToHeaderTag[size];

  return (
    <div className={classNames(cls.Text, {}, addClasses)}>
      {title && (
        <HeaderTag
          className={cls.title}
          dangerouslySetInnerHTML={{ __html: title }}
        ></HeaderTag>
      )}
      {text && (
        <p className={cls.text} dangerouslySetInnerHTML={{ __html: text }}></p>
      )}
    </div>
  );
});
