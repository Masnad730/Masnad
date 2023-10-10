import { getAllPracticesCustomFields } from '../../lib/api'
import Layout from '../../components/layout/Layout'
import PracticesSidebarNav from '../../components/PracticesSidebarNav'

export default function PracticeArea({ practice, allPractices }) {
  return (
    <div className='pt-20 md:pt-32 lg:pt-48 pb-16'>
      <div className='container'>
        <div className='row justify-center'>
          <div className='col-12'>
            <div className='text-center mb-16'>
              <h2 className='text-2xl md:text-3xl lg:text-4xl mb-2'>Practice Area</h2>
              <div className='relative line-sep-center'></div>
              <p className='text-base lg:text-lg mb-4'>
                We represent clients of all sizes, across industry, as well as foreign missions,
                <br /> government entities and INGOs.
              </p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-4 order-2 order-lg-1'>
            <PracticesSidebarNav selectedPractice={practice} allPractices={allPractices} />
          </div>
          <div className='col-lg-8 order-1 order-lg-2'>
            <div className=''>
              <div className='h-auto md:h-80 mb-12'>
                <img
                  className='w-full h-full object-cover'
                  src={practice.acf.image.url}
                  alt={practice.acf.area}
                />
              </div>
              <div className='mb-4 md:mb-2'>
                <h1 className='text-2xl md:text-3xl'>{practice.acf.area}</h1>
              </div>
              <div className='whitespace-pre-wrap'>
                <div
                  className='dashed'
                  dangerouslySetInnerHTML={{ __html: practice.acf.description }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

PracticeArea.getLayout = function getLayout(page, { practice }) {
  return (
    <Layout
      title={`${practice.acf.area} - Masnad Law Firm`}
      canonical={`https://masnad.af/practices/${practice.slug}`}
      descriptionContent={practice.acf.description.substring(0, 160)}
    >
      {page}
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const practices = await getAllPracticesCustomFields()
  const paths = practices.map((practice) => ({
    params: { slug: practice.slug },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const allPractices = await getAllPracticesCustomFields()
  return {
    props: {
      practice: allPractices.find((practice) => practice.slug === params.slug) || {},
      allPractices,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    //revalidate: 10, // In seconds
  }
}
