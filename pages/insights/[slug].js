import { IntlProvider, FormattedDate } from 'react-intl'

import { getAllInsights } from '../../lib/api'
import Layout from '../../components/layout/Layout'
import Insight from '../../components/InsightSection'

export default function SingleInsight({ allInsights, insight }) {
  return (
    <div className='pt-12 pb-16'>
      <div className='flex flex-col md:flex-row items-center mt-16'>
        <div className='flex-1 !order-2 md:!order-1 self-stretch bg-accents_2 p-8 flex flex-col justify-center'>
          <div className='mb-4 text-accents_7'>
            <IntlProvider locale='en-US'>
              <FormattedDate value={insight.date} day='2-digit' month='long' year='numeric' />
            </IntlProvider>
          </div>
          <h1 className='text-lg md:text-xl lg:text-2xl font-black mb-8'>
            {insight.title.rendered}
          </h1>
        </div>
        <div className='flex-1 !order-1 md:!order-2'>
          <img
            className='max-h-[350px] w-full object-cover'
            src={insight.acf.image.url}
            alt={insight.title.rendered}
          />
        </div>
      </div>
      <div className='container'>
        <div className='row border-t-2 border-primary mt-12'>
          <div className='col-12'>
            <div className='relative mt-12'>
              <div className='whitespace-pre-wrap mb-14'>
                <div
                  className='dashed'
                  dangerouslySetInnerHTML={{ __html: insight.acf.description }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='pb-12 flex items-center justify-between'>
              <div className='flex items-center'>
                <span className='dash-line'></span>
                <h2 className='text-base md:text-xl text-tertiary uppercase'>similar insights</h2>
              </div>
              <div className='text-accents_6 text-xs md:text-base'>Discover more</div>
            </div>
          </div>
        </div>
        <div className='row'>
          {allInsights.map((insight, index) => {
            if (index < 3) {
              return (
                <Insight
                  image={insight.acf.image.url}
                  datePublished={insight.date}
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
    </div>
  )
}

SingleInsight.getLayout = function getLayout(page, { insight }) {
  return (
    <Layout
      title={`${insight.title.rendered} - Masnad Law Firm`}
      canonical={`https://masnad.af/insights/${insight.slug}`}
      descriptionContent={insight.acf.description.substring(0, 160)}
    >
      {page}
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const insights = await getAllInsights()
  const paths = insights.map((insight) => ({
    params: { slug: insight.slug },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const allInsights = await getAllInsights()
  return {
    props: {
      insight: allInsights.find((insight) => insight.slug === params.slug) || {},
      allInsights,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    //revalidate: 10, // In seconds
  }
}
