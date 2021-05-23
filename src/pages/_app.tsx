import React from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const Layout = Component.layout || React.Fragment

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
