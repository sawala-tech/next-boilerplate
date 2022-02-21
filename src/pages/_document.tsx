import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import { Fragment } from 'react'

import { extractCritical } from '@emotion/server'

export default class _DOCUMENT extends Document<{
  ids: string[]
  css: string
}> {
  static async getInitialProps(ctx: DocumentContext) {
    const page = await ctx.renderPage()
    const initialProps = await Document.getInitialProps(ctx)
    const { css, ids } = extractCritical(page.html)
    return {
      ...initialProps,
      styles: (
        <Fragment>
          {initialProps.styles}
          <style data-emotion={`css ${ids.join(' ')}`} dangerouslySetInnerHTML={{ __html: css }} />
        </Fragment>
      )
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
