import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/global';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#333333" />
        <meta
          name="description"
          content="A simple project starter to work with React, NextJS, TypeScript and Styled Components"
        />

        <link rel="shortcut icon" href="/images/icon-512.png" />
        <link rel="apple-touch-icon" href="/images/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />

        <title>boilerplate</title>
      </Head>

      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default App;
