import Script from 'next/script';
import type { AppProps } from 'next/app';

import '../styles/globals.css';
import '../styles/leccion.css';
import Head from 'next/head';

export const config = { amp: 'true', unstable_runtimeJS: false };

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover, initial-scale=1.0" />
      </Head>
      <Script
        id="analytics"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window, document, 'script', 'dataLayer', '${process.env.NEXT_PUBLIC_GTM_ID}');`,
        }}
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
