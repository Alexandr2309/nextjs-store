import 'app/styles/globals.scss';
import type { AppProps } from 'next/app';
import { CartContextProvider } from 'app/providers/Cart';
import { FavoriteContextProvider } from 'app/providers/Favorite';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <FavoriteContextProvider>
        <Component {...pageProps} />
      </FavoriteContextProvider>
    </CartContextProvider>
  );
}
