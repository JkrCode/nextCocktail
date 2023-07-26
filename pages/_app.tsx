import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

import Layout from '../components/layout/layout';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Cocktail-Finder</title>
        <meta name='description' content='Cocktailfinder' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
