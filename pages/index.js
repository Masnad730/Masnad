import Link from 'next/link'

import { getAllInsights } from '../lib/api'
import Layout from '../components/layout/Layout'
import Practices from '../components/PracticesSection'
import CTA from '../components/CTA'
import Insight from '../components/InsightSection'
import CompanyBackground from '../components/CompanyBackground'
import BorderlessSolution from '../components/BorderlessSolution'

export default function Home({ allInsights }) {
  return (
    <div>
      <CompanyBackground showMore={false} />
      <Practices />
      <section className='pt-12 pb-20'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-2'>
              <div>
                <h2 className='text-lg md:text-3xl lg:text-[1.97rem] leading-9 pb-2 md:pb-0'>
                  Legal Clinic
                </h2>
              </div>
            </div>
            <div className='col-lg-5'>
              <div>
                <p className='text-accents_7 pb-4 md:pb-0'>
                  As part of our corporate social responsibility, MLF provides free legal advisory
                  services in many areas, including civil, commercial, criminal, and personal status
                  cases to clients who are not able to afford it.
                </p>
              </div>
            </div>
            <div className='col-lg-5'>
              <div>
                <p className='text-accents_7'>
                  The legal clinics are directed by our experienced and professional legal team in
                  order to support the community and enhance their legal knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTA />
      <BorderlessSolution />
      <section className='pt-12 pb-24'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='pb-12 flex items-center justify-between font-playfair'>
                <div className='flex items-center'>
                  <span className='dash-line'></span>
                  <h2 className='text-base md:text-xl uppercase'>insights</h2>
                </div>
                <Link href='/insights' passHref>
                  <a className='text-accents_6 text-xs md:text-base hover:text-primary'>
                    Discover more
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className='row'>
            {allInsights.map((insight, index) => {
              if (index < 3) {
                return (
                  <Insight
                    image={insight.acf.image.url}
                    datePublished={insight.modified}
                    title={insight.title.rendered}
                    description={insight.acf.description}
                    slug={insight.slug}
                    key={insight.id}
                  />
                )
              }
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const allInsights = await getAllInsights()
  return {
    props: {
      allInsights,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    //revalidate: 10, // In seconds
  }
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout
      title='Masnad Law Firm - A Full Service Law Firm'
      page='home'
      canonical='https://masnad.af/'
      pageDescription='Masnad Law Firm (MLF) is a local law firm distinguished from other Afghan legal institutions by its close relationship with lawyers from more than 100 countries on all continents of the globe.'
      jsonLD='{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            "@id": "https://masnad.af/#website",
            "url": "https://masnad.af/",
            "name": "Masnad Law Firm",
            "description": "A Full-Service Law Firm Based in Kabul, Afghanistan",
            "publisher": { "@id": "https://masnad.af/#organization" }
          },
          {
            "@type": "Organization",
            "@id": "https://masnad.af/#organization",
            "name": "Masnad Law Firm",
            "url": "https://masnad.af/",
            "logo": "https://masnad.af/img/masnad-logo.png"
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://masnad.af/#breadcrumblist",
            "itemListElement": [
              {
                "@type": "ListItem",
                "@id": "https://masnad.af#about/#listItem",
                "position": 1,
                "item": {
                  "@type": "WebPage",
                  "@id": "https://masnad.af#about/#item",
                  "name": "About",
                  "description": "Masnad Law Firm (MLF) is not a simple legal firm, but an experienced family composed of numerous well known and prestigious professionals in every legal domain and practice area.",
                  "url": "https://masnad.af#about"
                }
              },
              {
                "@type": "ListItem",
                "@id": "https://masnad.af#contact/#listItem",
                "position": 2,
                "item": {
                  "@type": "WebPage",
                  "@id": "https://masnad.af#contact/#item",
                  "name": "Contact",
                  "description": "Contact us. Ansori Street, Shahri Now, District 10, Kabul, Afghanistan | +93 730 830 830. info@masnad.af",
                  "url": "https://masnad.af#contact"
                }
              }
            ]
          },
          {
            "@type": "WebPage",
            "@id": "https://masnad.af/#webpage",
            "url": "https://masnad.af/",
            "name": "Masnad Law Firm",
            "description": "Masnad Law Firm (MLF) is a local law firm distinguished from other Afghan legal institutions by its close relationship with lawyers from more than 100 countries on all continents of the globe.",
            "inLanguage": "en-US",
            "isPartOf": { "@id": "https://masnad.af/#website" },
            "breadcrumb": { "@id": "https://masnad.af/#breadcrumblist" }
          }
        ]
      }'
    >
      {page}
    </Layout>
  )
}
