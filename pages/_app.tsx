import Head from 'next/head';

import GlobalStyles from '../styles/global';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Clone Instagram</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
