import { useState } from 'react'

import { getAllLegalBooks } from '../lib/api'
import Layout from '../components/layout/Layout'
import Pagination from '../components/Pagination'

export default function LegalBooks({ legalBooks }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  // Get Current Item
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = legalBooks.slice(indexOfFirstItem, indexOfLastItem)
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const selectedItems = currentItems.map((item, index) => (
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
  ))

  return (
    <div className='pt-20 pb-12 block w-full overflow-x-auto'>
      <div className='container'>
        <div className='row justify-center'>
          <div className='col-12'>
            <div className='text-center mb-16'>
              <h1 className='text-2xl md:text-3xl lg:text-5xl font-playfair leading-snug mb-2'>
                Legal Books & Papers
              </h1>
              <div className='relative line-sep-center'></div>
              <p className='text-base md:text-lg mb-4'>
                Informative books and papers about laws, regulations, and other legal issues in
                Afghanistan
              </p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
              <table className='items-center bg-transparent w-full table-auto'>
                <thead className='bg-gray-50'>
                  <tr></tr>
                </thead>
                <tbody>{selectedItems}</tbody>
              </table>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='flex items-center justify-end pt-7'>
              <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={legalBooks.length}
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
      title='Legal Books & Papers - Masnad Law Firm'
      page='legal-books'
      canonical='https://masnad.af/legal-books-papers'
      pageDescription='Introductions, guides, manuals, and informative papers about the most commonly-used laws and regulations in Afghanistan that help readers better understand them.'
    >
      {page}
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const legalBooks = await getAllLegalBooks()
  return {
    props: {
      legalBooks,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    //revalidate: 10, // In seconds
  }
}
