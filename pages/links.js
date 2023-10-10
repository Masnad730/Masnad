import { useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

import { getAllUsefulLinks, searchForUsefulLinks } from '../lib/api'
import Layout from '../components/layout/Layout'
import Pagination from '../components/Pagination'

export default function Links({ links }) {
  const [query, setQuery] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [isLoading, setIsLoading] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [searchedItems, setSearchedItems] = useState([])

  // Get Current Item
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = links.slice(indexOfFirstItem, indexOfLastItem)
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  const selectedItems = currentItems.map((item, index) => (
    <tr key={index} className='border-b border-accents_2'>
      <td className='border-t-0 px-6 align-middle border-l-0 whitespace-nowrap md:whitespace-normal border-r-0 p-4'>
        {item.acf.agency}
      </td>
      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4 '>
        <a
          href={`http://${item.acf.website}`}
          target='_blank'
          className='text-blue-700 underline focus:text-blue-700'
        >
          {item.acf.website}
        </a>
      </td>
    </tr>
  ))

  const selectedItemsAfterSearch = searchedItems.map((item, index) => (
    <tr key={index} className='border-b border-accents_2'>
      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4'>{item.acf.agency}</td>
      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4 '>
        <a
          href={`http://${item.acf.website}`}
          target='_blank'
          className='text-blue-700 underline focus:text-blue-700'
        >
          {item.acf.website}
        </a>
      </td>
    </tr>
  ))

  const handleChange = async (e) => {
    setQuery(e.target.value)
    setIsLoading(true)
    setIsSearching(e.target.value === '' ? false : true)
    await searchForUsefulLinks(e.target.value, setSearchedItems, setIsLoading)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  return (
    <div className='pt-20 pb-12 block w-full overflow-x-auto'>
      <div className='container'>
        <div className='row justify-center'>
          <div className='col-12'>
            <div className='text-center mb-16'>
              <h1 className='text-2xl md:text-3xl lg:text-5xl font-playfair leading-snug mb-2'>
                Useful Links
              </h1>
              <div className='relative line-sep-center'></div>
              <p className='text-base md:text-lg mb-4'>
                Website links to Afghanistan government ministries, departments, e-governance, and
                legal & business-related organizations
              </p>
            </div>
          </div>
        </div>
        <div className='row justify-end'>
          <div className='col-md-6'>
            <div className='pb-8'>
              <form onSubmit={handleSubmit}>
                <div className='flex items-center justify-center md:justify-end'>
                  <div className='block relative'>
                    <span class='h-full absolute inset-y-0 left-0 flex items-center pl-2'>
                      <svg viewBox='0 0 24 24' className='h-4 w-4 fill-current text-gray-500'>
                        <path d='M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z'></path>
                      </svg>
                    </span>
                    <input
                      className='mb-0 pl-8 w-full md:w-64'
                      name='query'
                      value={query}
                      onChange={handleChange}
                      type='search'
                      id='search-links'
                      spellCheck='true'
                      placeholder='Search'
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
              <table className='items-center bg-transparent w-full table-auto md:table-fixed'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th className='px-6 align-middle py-6 uppercase whitespace-nowrap font-bold text-left'>
                      Organization
                    </th>
                    <th className='px-6 align-middle py-6 uppercase whitespace-nowrap font-bold text-left'>
                      Website
                    </th>
                  </tr>
                </thead>
                {isLoading ? (
                  <tbody className='text-center'>
                    <tr>
                      <td colSpan='2' className='py-4'>
                        <ClipLoader size='50' />
                      </td>
                    </tr>
                  </tbody>
                ) : isSearching && searchedItems.length === 0 ? (
                  <tbody className='text-center'>
                    <tr>
                      <td colSpan='2' className='py-4'>
                        No matching records found
                      </td>
                    </tr>
                  </tbody>
                ) : (
                  <tbody>{query ? selectedItemsAfterSearch : selectedItems}</tbody>
                )}
              </table>
            </div>
          </div>
        </div>
        {isSearching ? (
          ''
        ) : (
          <div className='row'>
            <div className='col-12'>
              <div className='flex items-center justify-end pt-7'>
                <Pagination
                  itemsPerPage={itemsPerPage}
                  totalItems={links.length}
                  paginate={paginate}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

Links.getLayout = function getLayout(page) {
  return (
    <Layout
      title='Useful links - Masnad Law Firm'
      page='links'
      canonical='https://masnad.af/links'
      pageDescription='Ministry of Finance www.mof.gov.af, Ministry of Justice www.moj.gov.af, The Supreme Court www.supremecourt.gov.af, Attorney General’s Office www.ago.gov.af, Da Afghanistan Bank www.dab.gov.af, Afghanistan Chamber of Commerce & Investment www.acci.org.af, Afghanistan Central Business Registry www.acbr.gov.af, Procurement www.npa.gov.af, National Center for Policy Research www.ncpr.af, Supreme Audit Office www.sao.gov.af'
    >
      {page}
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const links = await getAllUsefulLinks()
  return {
    props: {
      links,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    //revalidate: 10, // In seconds
  }
}
