import { AxiosPromise } from 'axios';
import { Product } from './model';
import { $api } from 'shared/api/typicode/config';

const BASE_URL = '/products';
const ELECTRONICS_PRODUCTS = `${BASE_URL}/category/electronics`;

export const getElectronics = (): AxiosPromise<Product[]> => {
  return $api.get(ELECTRONICS_PRODUCTS, {
    params: {
      limit: 9,
    },
  });
};

export const getAllProducts = (): AxiosPromise<Product[]> => {
  return $api.get(BASE_URL, {
    params: {
      limit: 9,
    },
  });
};
