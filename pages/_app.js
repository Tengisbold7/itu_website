import Head from 'next/head';
import Layout from '../components/layout/Layout';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap')
  }, []);
  return (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
  );
}

export default MyApp;
