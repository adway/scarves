import * as React from 'react'
import NextApp from 'next/app'

// import '@hackclub/theme/fonts/reg-bold.css'
import theme from '../components/theme'
import Meta from '../components/meta'
import { ThemeProvider, Heading } from 'theme-ui'
// import ColorSwitcher from '../components/color-switcher'
import Header from '../components/header'
import Footer from '../components/footer'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Header />
        <Meta />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    )
  }
}
