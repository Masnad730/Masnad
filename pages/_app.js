import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'
import { SnackbarProvider } from 'notistack'

// Third-Party libraries CSS Files
import 'tailwindcss/tailwind.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'animate.css/animate.min.css'
import 'react-responsive-modal/styles.css'

// Custom CSS Files
import '../styles/base.css'
import '../styles/main.css'
import '../styles/grid.css'
import '../styles/nprogress.css'

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <Head>
        <meta name='viewport' content='viewport-fit=cover' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
      </Head>
      <SnackbarProvider maxSnack={3}>
        {getLayout(<Component {...pageProps} />, pageProps)}
      </SnackbarProvider>
    </>
  )
}

export default MyApp
