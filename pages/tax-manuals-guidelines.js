import { useEffect, useState } from 'react'

import Layout from '../components/layout/Layout'
import Pagination from '../components/Pagination'
import { getAllTaxManuals, getAllTaxGuidelines } from '../lib/api'

export default function TaxManualsGuidelines({ taxManuals, taxGuidelines }) {
  const [language, setLanguage] = useState('eng')
  const [totalGuidelines, setTotalGuidelines] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  useEffect(() => {
    setTotalGuidelines(() => {
      if (language === 'eng')
        return taxGuidelines.filter((item) => item.acf.doc_english_title !== '')
      else if (language === 'pash')
        return taxGuidelines.filter((item) => item.acf.doc_pashto_title !== '')
      else if (language === 'dr')
        return taxGuidelines.filter((item) => item.acf.doc_dari_title !== '')
    })
  }, [language])

  // Get Current Item
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = totalGuidelines.slice(indexOfFirstItem, indexOfLastItem)
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const handleClick = (lang) => {
    setLanguage(lang)
    setCurrentPage(1)
  }

  const selectedItems = currentItems.map((item, index) => {
    if (language === 'eng' && item.acf.doc_english.title !== '') {
      return (
        <tr key={index} className='border-b border-accents_2 shadow-sm'>
          <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4 pl-1'>
            {item.acf.doc_english.title}
          </td>
          <td className='border-t-0 px-2 align-middle border-l-0 border-r-0 p-4 pr-1 text-right'>
            <a
              href={item.acf.doc_english.url}
              className='bg-tertiary text-white p-2 cursor-pointer'
              target='_blank'
              download
            >
              <i className='fa fa-download'></i>
            </a>
          </td>
        </tr>
      )
    } else if (language === 'pash' && item.acf.doc_pashto.title !== '') {
      return (
        <tr key={index} className='border-b border-accents_2 shadow-sm text-right'>
          <td className='border-t-0 px-2 align-middle border-l-0 border-r-0 p-4 pl-1 text-left'>
            <a
              href={item.acf.doc_pashto.url}
              className='bg-tertiary text-white p-2 cursor-pointer'
              target='_blank'
              download
            >
              <i className='fa fa-download'></i>
            </a>
          </td>
          <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4 pr-2'>
            {item.acf.doc_pashto.title}
          </td>
        </tr>
      )
    } else if (language === 'dr' && item.acf.doc_dari.title !== '') {
      return (
        <tr key={index} className='border-b border-accents_2 shadow-sm text-right'>
          <td className='border-t-0 px-2 align-middle border-l-0 border-r-0 p-4 pl-1 text-left'>
            <a
              href={item.acf.doc_dari.url}
              className='bg-tertiary text-white p-2 cursor-pointer'
              target='_blank'
              download
            >
              <i className='fa fa-download'></i>
            </a>
          </td>
          <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4 pr-2'>
            {item.acf.doc_dari.title}
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
                Tax Manuals & Guidelines
              </h1>
              <div className='relative line-sep-center'></div>
              <p className='text-base md:text-lg mb-4'>
                Tax manuals and guidelines for better understanding Afghanistan tax laws and
                regulations and easily settling tax liabilities.
              </p>
            </div>
          </div>
        </div>
        <div className='row pt-10 pb-20'>
          <div className='col-12'>
            <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
              <table className='items-center bg-transparent w-full table-auto'>
                <tbody className='bg-gray-50'>
                  <tr>
                    <td colSpan='2' className='font-extrabold text-center py-4'>
                      Tax Manuals
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  {taxManuals.map((item, index) => (
                    <tr key={index} className='border-b border-accents_2'>
                      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4 '>
                        {item.title.rendered}
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
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className='row justify-center'>
          <div className='col-12'>
            <div className='text-center mb-0'>
              <table className='items-center bg-transparent w-full table-auto'>
                <tbody className='bg-gray-50'>
                  <tr>
                    <td className='font-extrabold text-center py-4 w-full'>Tax Guidelines</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-3'>
            <div className=''>
              <div
                className={`mb-2 last:mb-0 py-3 px-5 cursor-pointer ${
                  language === 'eng'
                    ? 'bg-tertiary text-grey-light-1'
                    : 'bg-grey-light-1 text-tertiary hover:text-primary'
                }`}
                onClick={() => handleClick('eng')}
              >
                <span className='mr-2'>
                  <i className='fa fa-language'></i>
                </span>
                <span className='font-extrabold text-base md:text-lg'>English</span>
              </div>
              <div
                className={`mb-2 last:mb-0 py-3 px-5 cursor-pointer ${
                  language === 'pash'
                    ? 'bg-tertiary text-grey-light-1'
                    : 'bg-grey-light-1 text-tertiary hover:text-primary'
                }`}
                onClick={() => handleClick('pash')}
              >
                <span className='mr-2'>
                  <i className='fa fa-language'></i>
                </span>
                <span className='font-extrabold text-base md:text-lg'>Pashto</span>
              </div>
              <div
                className={`mb-2 last:mb-0 py-3 px-5 cursor-pointer ${
                  language === 'dr'
                    ? 'bg-tertiary text-grey-light-1'
                    : 'bg-grey-light-1 text-tertiary hover:text-primary'
                }`}
                onClick={() => handleClick('dr')}
              >
                <span className='mr-2'>
                  <i className='fa fa-language'></i>
                </span>
                <span className='font-extrabold text-base md:text-lg'>Dari</span>
              </div>
            </div>
          </div>
          <div className='col-lg-9'>
            <div className='relative overflow-x-auto sm:rounded-lg'>
              <table className='items-center bg-transparent w-full table-auto'>
                <tbody>{selectedItems}</tbody>
              </table>
            </div>
          </div>
        </div>
        <div className='row justify-end'>
          <div className='col-lg-9'>
            <div className='flex items-center justify-end pt-7'>
              <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={totalGuidelines.length}
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

TaxManualsGuidelines.getLayout = function getLayout(page) {
  return (
    <Layout
      title='Tax Manuals & Guidelines - Masnad Law Firm'
      page='tax-manuals-guidelines'
      canonical='https://masnad.af/tax-manuals-guidelines'
      pageDescription='Tax manuals and guidelines for better understanding Afghanistan tax laws and regulations and easily settling tax liabilities.'
    >
      {page}
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const taxManuals = await getAllTaxManuals()
  const taxGuidelines = await getAllTaxGuidelines()
  return {
    props: {
      taxManuals,
      taxGuidelines,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    //revalidate: 10, // In seconds
  }
}
