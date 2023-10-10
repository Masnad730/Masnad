import { getAllInsights } from '../../lib/api'
import Layout from '../../components/layout/Layout'
import Insight from '../../components/InsightSection'

export default function Insights({ allInsights }) {
  return (
    <div className='pt-20 md:pt-32 lg:pt-48 pb-12 md:pb-20 lg:pb-28'>
      <div className='container'>
        <div className='row justify-center'>
          <div className='col-12'>
            <div className='text-center mb-16'>
              <h1 className='text-2xl md:text-3xl lg:text-5xl font-playfair leading-snug mb-2'>
                Insights
              </h1>
              <div className='relative line-sep-center'></div>
              <p className='text-base md:text-lg mb-4'>Find out the recent news and insights</p>
            </div>
          </div>
        </div>
        <div className='row'>
          {allInsights.map((insight) => (
            <Insight
              image={insight.acf.image.url}
              datePublished={insight.modified}
              title={insight.title.rendered}
              description={insight.acf.description}
              slug={insight.slug}
              key={insight.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

Insights.getLayout = function getLayout(page) {
  return (
    <Layout
      page='insights'
      title='Insights - Masnad Law Firm'
      canonical='https://masnad.af/insights'
      pageDescription='Find out the recent news and insights. We report on matters of interest to our clients, partners, and other persons and companies doing business in Afghanistan.'
    >
      {page}
    </Layout>
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
