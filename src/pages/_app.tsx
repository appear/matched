import React from 'react'
import App, { AppInitialProps, AppContext } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'

type AppProps = AppInitialProps

export default class Page extends App<AppProps> {
  static async getInitialProps({
    ctx,
    Component: { getInitialProps: getComponentInitialProps },
  }: AppContext): Promise<AppProps> {
    const pageProps = await (getComponentInitialProps
      ? getComponentInitialProps(ctx)
      : Promise.resolve({}))

    return {
      pageProps,
    }
  }

  componentDidMount() {
    window.history.scrollRestoration = 'auto'

    const cachedScrollPositions: Array<[number, number]> = []
    let shouldScrollRestore: null | { x: number; y: number }

    Router.events.on('routeChangeStart', () => {
      cachedScrollPositions.push([window.scrollX, window.scrollY])
    })

    Router.events.on('routeChangeComplete', () => {
      if (shouldScrollRestore) {
        const { x, y } = shouldScrollRestore
        window.scrollTo(x, y)
        shouldScrollRestore = null
      }
      window.history.scrollRestoration = 'auto'
    })

    Router.beforePopState(() => {
      if (cachedScrollPositions.length > 0) {
        const scrolledPosition = cachedScrollPositions.pop()
        if (scrolledPosition) {
          shouldScrollRestore = {
            x: scrolledPosition[0],
            y: scrolledPosition[1],
          }
        }
      }
      window.history.scrollRestoration = 'manual'
      return true
    })
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no"
          />
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}
