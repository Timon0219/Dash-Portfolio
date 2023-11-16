import Document, { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { ReactElement } from 'react';
import { GA_TRACKING_ID } from '../lib/helper/gtag';

class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/Dusan.ico" />

          <meta
            name="description"
            content="I am Dusan Simic. Senior WordPress developer Based in Serbia. Tech Stack are WordPress, Elementor, WooCommerce, React, Html, CSS, JS, TS, React, NEXT.JS, Tailwindcss, Scss."
          />

          <meta name="author" content="Dusan Simic" />

          <meta name="robots" content="index, follow" />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content=""
          />
          <meta
            property="og:title"
            content="Dusan Portfolio"
          />
          <meta property="og:image" content="/HomePreview_old.png" />

          <meta name="theme-color" content="#111119" />
          <link rel="apple-touch-icon" href="/logo192.png" />

          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@1,700&family=Roboto+Mono&family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700&family=Iceland&display=swap"
            rel="stylesheet"
          />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <Script
            id="ga-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;