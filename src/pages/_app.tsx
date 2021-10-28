import '@styles/index.scss'

import Head from 'next/head'

import type { AppProps, NextWebVitalsMetric } from 'next/app'

const CONSOLE_STYLE = {
  ok: ['color: #fff'].join(';'),
  warn: ['color: #ff0000'].join(';')
}

/**
 * Measuring performance
 * you can disable if it's not necessary
 * @param metric NextWebVitalsMetric
 */
export const reportWebVitals = (metric: NextWebVitalsMetric) => {
  // disable it in production
  if (process.env.NODE_ENV === 'production') return
  const VALUE: number = parseFloat((metric.value / 1000).toFixed(3))
  const STYLE: string = VALUE > 3 ? CONSOLE_STYLE.warn : CONSOLE_STYLE.ok

  switch (metric.name) {
    case 'Next.js-hydration':
      // Length of time it takes for the page to start and finish hydrating (in ms)
      console.info(`%cFirst load render finish in: ${VALUE}s`, STYLE)
      break
    case 'Next.js-render':
      // Length of time it takes for a page to finish render after a route change (in ms)
      console.info(`%cFinish rendering in: ${VALUE}s`, STYLE)
      break
    default:
      break
  }
}

const _APP = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/ico" href="/static/icons/logo.ico"></link>
        <meta name="robots" content="index, follow" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default _APP
