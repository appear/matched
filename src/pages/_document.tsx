import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta charSet="utf-8" />
          <meta property="og:title" content="matched" />
          <meta property="og:image" content="" />
          <meta id="metaOgUrl" property="og:url" content="" />
          <meta
            property="og:description"
            content="프로젝트 모임을 편하게 matched"
          />
          <link rel="shortcut icon" href="" />
          <link rel="icon" href="" />
          <link rel="apple-touch-icon-precomposed" href="" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
