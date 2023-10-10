import { useState } from 'react'

import { getAllDoingBizInAfghanistan } from '../lib/api'
import Layout from '../components/layout/Layout'
import Pagination from '../components/Pagination'

export default function LegalBooks({ doingBusiness }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(13)

  // Get Current Item
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = doingBusiness.slice(indexOfFirstItem, indexOfLastItem)
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const selectedItems = currentItems.map((item, index) => {
    if (!item.acf.is_belong_to_investing_opportunity_afghanistan_sector) {
      return (
        <tr key={index} className='border-b border-accents_2'>
          <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4 '>
            {item.acf.doc_file.title}
          </td>
          <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4 text-right'>
            <a
              href={item.acf.doc_file.url}
              className='bg-tertiary text-white p-2 cursor-pointer'
              target='_blank'
              download
            >
              <i className='fa fa-download'></i>
            </a>
          </td>
        </tr>
      )
    }
  })

  const itemsUnderSubHeading = currentItems.map((item, index) => {
    if (item.acf.is_belong_to_investing_opportunity_afghanistan_sector) {
      return (
        <tr key={index} className='border-b border-accents_2'>
          <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4 '>
            {item.acf.doc_file.title}
          </td>
          <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4 text-right'>
            <a
              href={item.acf.doc_file.url}
              className='bg-tertiary text-white p-2 cursor-pointer'
              target='_blank'
              download
            >
              <i className='fa fa-download'></i>
            </a>
          </td>
        </tr>
      )
    }
  })

  return (
    <div className='pt-20 pb-12 block w-full overflow-x-auto'>
      <div className='container'>
        <div className='row justify-center'>
          <div className='col-12'>
            <div className='text-center mb-16'>
              <h1 className='text-2xl md:text-3xl lg:text-5xl font-playfair leading-snug mb-2'>
                Doing Business in Afghanistan
              </h1>
              <div className='relative line-sep-center'></div>
              <p className='text-base md:text-lg mb-4'>
                Informative packages on doing business in Afghanistan
              </p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
              <table className='items-center bg-transparent w-full table-auto'>
                <tbody>{selectedItems}</tbody>
                <tbody className='bg-gray-50'>
                  <tr>
                    <td colSpan='2' className='font-extrabold text-center py-4'>
                      Investment Opportunities in Afghanistan Sectors
                    </td>
                  </tr>
                </tbody>
                <tbody>{itemsUnderSubHeading}</tbody>
              </table>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='flex items-center justify-end pt-7'>
              <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={doingBusiness.length}
                paginate={paginate}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

LegalBooks.getLayout = function getLayout(page) {
  return (
    <Layout
      title='Doing Business in Afghanistan - Masnad Law Firm'
      page='doing-biz-in-afg'
      canonical='https://masnad.af/doing-business-in-afghanistan'
      pageDescription='There are many untapped business opportunities in Afghanistan that domestic or foreign investors may utilize. Recently, the Afghanistan government has brought significant facilitations in obtaining business license and investment conditions for the investors.'
    >
      {page}
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const doingBusiness = await getAllDoingBizInAfghanistan()
  return {
    props: {
      doingBusiness,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    //revalidate: 10, // In seconds
  }
}
