import styles from 'app/styles/Home.module.scss';
import { Product, typicodeApi } from 'shared/api';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { ProductList } from 'widgets/Products';
import React from 'react';
import { HeadMeta } from 'shared/config';
import { Layout } from 'shared/ui/Layout';
import { Banner, CategoryBanners } from 'features/CategoryBanners';

export const getStaticProps: GetStaticProps<{
  products: Product[];
}> = async () => {
  try {
    const response = await typicodeApi.getAllProducts();
    return {
      props: {
        products: response.data,
      },
    };
  } catch (e) {
    console.log(e);
    // @ts-ignore
    throw new Error(e, 'Ошибка здесь!');
  }
};

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <HeadMeta />
      <main className={styles.main}>
        <ProductList products={products} />
      </main>
    </Layout>
  );
}
