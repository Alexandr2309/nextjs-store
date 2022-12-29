import { formatNumWord } from 'shared/lib/words';

export function feedbackFormat(value: number) {
  return formatNumWord(value, ['отзыв', 'отзыва', 'отзывов']);
}
