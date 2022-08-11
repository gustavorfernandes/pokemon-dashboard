import { Html, Head, Main, NextScript } from "next/document"

function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Exo:wght@300;500;700&family=Roboto:ital,wght@0,300;0,500;1,700&display=swap" rel="stylesheet" />       

        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatibe" content="IE=edge" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
