import Link from 'next/link'
import { IntlProvider, FormattedDate } from 'react-intl'

const Insight = ({ image, datePublished, title, description, slug }) => {
  return (
    <>
      <div className='col-12 col-md-6 col-lg-4'>
        <div className='min-h-[550px] lg:min-h-[630px] w-full flex flex-col cursor-pointer border border-accents_3 rounded-2xl mb-12 hover:bg-white hover:shadow-card'>
          <div className='pl-6 pt-6'>
            <div className='text-xl md:text-2xl font-bold mb-2 text-primary'>
              <IntlProvider locale='en-US'>
                <FormattedDate value={datePublished} day='2-digit' />
              </IntlProvider>
            </div>
            <div className='text-sm md:text-base font-light mb-5 bg-white text-accents_9'>
              <IntlProvider locale='en-US'>
                <FormattedDate value={datePublished} month='long' year='numeric' />
              </IntlProvider>
            </div>
            <div className='w-[75px] h-1 bg-primary rounded'></div>
          </div>
          <div className='px-6 py-4 line-clamp-3'>
            <Link href='/insights/[slug]' as={`/insights/${slug}`} passHref>
              <a className='hover:text-primary'>
                <h2 className='text-base md:text-lg lg:text-xl font-bold mb-3.5'>{title}</h2>
              </a>
            </Link>
            <div className='text-accents_7 font-light mb-5'>
              <div
                className='line-clamp-3'
                dangerouslySetInnerHTML={{ __html: description.substring(0, 150) }}
              ></div>
            </div>
          </div>
          <div className='rounded mx-5 relative'>
            <img
              src={image}
              alt={title}
              className='absolute inset-0 min-w-full max-w-full min-h-full rounded-[10px]'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Insight
