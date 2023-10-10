import Link from 'next/link'

import { getAllPracticesCustomFields } from '../../lib/api'
import Layout from '../../components/layout/Layout'

export default function PracticeAreas({ allPractices }) {
  return (
    <div className='pb-20 md:pb-32 pt-20 md:pt-32 lg:pt-48'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 col-lg-9 flex items-center'>
            <div className='mr-0 lg:mr-52 mb-10 md:mb-4'>
              <div className='flex items-center mb-4'>
                <span className='dash-line'></span>
                <div className='text-accents_7 text-base md:text-xl uppercase font-playfair'>
                  services
                </div>
              </div>
              <h1 className='text-2xl md:text-3xl lg:text-5xl mb-6'>Our Key Practice Areas</h1>
              <p className='font-rubik font-light'>
                Masnad law firm provides full-service to its Clients. The following highlights a
                general description of many of our practice areas, but there are many specialized
                and nuanced areas of law that we also practice, so if you have a legal situation
                that does not appear to fall into any of the practice areas directly, please give us
                a call anyway so that we can help you to find an attorney that can help you.
              </p>
            </div>
          </div>
          {allPractices.map((practice) => (
            <div className='col-md-4 col-lg-3' key={practice.id}>
              <div className='mb-4 h-[200px] md:h-[270px]'>
                <div
                  className='text-white h-full w-full relative'
                  style={{
                    backgroundImage: `url("${practice.acf.image.url}")`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPositionX: '40%',
                  }}
                >
                  <div className='absolute top-0 left-0 right-0 bottom-0 w-full h-full opacity-100 transition-custom bg-black-alpha-0.7'>
                    <div className='w-full h-full flex flex-col justify-between pt-10 lg:pt-14 pl-5 lg:pl-8'>
                      <div className='pr-8'>
                        <div className='hidden'>image</div>
                        <div className='mb-4'>
                          <img
                            src={`/icons/svg-white/${practice.slug}.svg`}
                            alt={practice.acf.area}
                            width='65'
                            height='62'
                            className='w-[45px] h-[42px] md:w-[65px] md:h-[62px]'
                          />
                        </div>
                        <Link href='/practices/[slug]' as={`/practices/${practice.slug}`} passHref>
                          <a>
                            <h2 className='text-base md:text-[1.15rem] leading-[27.6px] hover:text-primary'>
                              {practice.acf.area}
                            </h2>
                          </a>
                        </Link>
                      </div>
                      <div className='flex items-center justify-end'>
                        <Link href='/practices/[slug]' as={`/practices/${practice.slug}`} passHref>
                          <a>
                            <div className='flex items-center justify-end max-w-min bg-primary px-4 py-3'>
                              <i className='flaticon-arrow-pointing-to-right'></i>
                            </div>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

PracticeAreas.getLayout = function getLayout(page) {
  return (
    <Layout
      title='Our Practices - Masnad Law Firm'
      page='practices'
      canonical='https://masnad.af/practices'
      pageDescription='Masnad law firm provides full-service to its Clients. Taxation, Intellectual Property, Real Estate, Insurance and Reinsurance, Aviation, Government Affairs, Insolvency, Bankruptcy and Restructuring, ...'
    >
      {page}
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const allPractices = await getAllPracticesCustomFields()
  return {
    props: {
      allPractices,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    //revalidate: 10, // In seconds
  }
}
