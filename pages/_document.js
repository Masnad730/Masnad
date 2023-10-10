import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='UTF-8' />
          <meta
            name='keywords'
            content='
      Masnad,
      Masnad Law Firm,
      Full Service Law Firm
      Contact Us,
      Legal Services,
      Tax Service,get in touch,
      contact a law firm,
      need a law firm in afghanistan
      Law firm in Afghanistan
      Law firm,
      Law firm near by,
      Top law firms,
      Top law firms in Afghanistan,
      Leading law firm in Afghanistan
      Taxation law in Afghanistan,
      Corporate law firm in Afghanistan,
      Famous law firms,
      Aviation law in Afghanistan,
      Banking law in Afghanistan,
      Business crimes in Afghanistan,
      Construction and infrastructure in Afghanistan,
      Employment and labor Law,
      Energy and natural resources of Afghanistan,
      Afghanistan government,
      Immigration law,
      Insolvency, Bankruptcy and Restructuring in Afghanistan,
      Insurance law in Afghanistan,
      Intellectual Property in Afghanistan,
      Litigation in Afghanistan,
      Arbitration and dispute resolution in Afghanistan,
      Media and Entertainment law in Afghanistan,
      Taxation in Afghanistan,
      Attorney in Afghanistan,
      Trademark registration in Afghanistan,
      Intellectual Property rights in Afghanistan,
        '
          />
          <meta name='robots' content=' index, follow ' />

          {/* Facebook Open Graph  */}
          <meta property='og:title' content='Masnad Law Firm' />
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://www.masnad.af/' />
          <meta property='og:image' content='https://www.masnad.af/images/masnad-logo.png' />
          <meta property='og:site_name' content='Masnad Law Firm' />
          <meta
            property='og:description'
            content='Masnad Law Firm (MLF) is not a simple legal firm, but an experienced family composed of numerous well known and prestigious professionals in every legal domain and practice area.'
          />
          <meta
            property='og:image:secure_url'
            content='https://www.masnad.af/images/masnad-logo.png'
          />

          {/* Twitter */}
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:title' content='Masnad Law Firm' />
          <meta
            name='twitter:description'
            content='Masnad Law Firm (MLF) is not a simple legal firm, but an experienced family composed of numerous well known and prestigious professionals in every legal domain and practice area.'
          />
          <meta name='twitter:image' content='https://www.masnad.af/images/masnad-logo.png' />

          {/* Google Search Console Verification */}
          <meta
            name='google-site-verification'
            content='4uCHTyH5lLQEpKyPTfZ4kitfH6FfYCsOhn4bnPVNv5A'
          />

          {/* External Resources */}
          <link rel='stylesheet' type='text/css' href='/font/flaticon.css' />
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
            integrity='sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=='
            crossOrigin='anonymous'
          />

          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
          <link
            href='https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap'
            rel='stylesheet'
          />
          {/* Favicon For Different Browser */}
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/favicon-package/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-package/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-package/favicon-16x16.png'
          />
          <link rel='manifest' href='/favicon-package/site.webmanifest' />
          <link rel='mask-icon' href='/favicon-package/safari-pinned-tab.svg' color='#5bbad5' />
          <meta name='msapplication-TileColor' content='#da532c' />
          <meta name='theme-color' content='#ffffff'></meta>
          {/* Favicon - End */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
