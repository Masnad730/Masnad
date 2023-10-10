import React from 'react'
import Head from 'next/head'

import Header from '../Header'
import Footer from '../Footer'
import HeroSlider from '../HeroSlider'

const Layout = ({ children, title, canonical, pageDescription, jsonLD, page }) => {
  return (
    <React.Fragment>
      <Head>
        <link rel='canonical' href={canonical} />
        <meta name='description' content={pageDescription} />
        <title>{title}</title>
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: jsonLD }} />
      </Head>
      <>
        {page === 'home' ? <HeroSlider /> : ''}
        <div className={page === 'home' ? 'min-w-full absolute top-0 left-0 z-50' : ''}>
          <Header activePage={page} />
        </div>
      </>
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
