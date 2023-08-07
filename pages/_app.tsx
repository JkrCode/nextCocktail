// pages/_app.tsx
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../store/store'; // Stellen Sie sicher, dass Sie den Store importieren

import Layout from '../components/layout/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <title>Cocktail-Finder</title>
          <meta name='description' content='Cocktailfinder' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}