import { getAllTreatiesAndConventions, getAllAfghanistanLaws, searchForAfghanLaw } from '../lib/api'
import { IntlProvider, FormattedDate } from 'react-intl'
import { useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

import Layout from '../components/layout/Layout'
import Pagination from '../components/Pagination'

export default function AfghanistanLaws({ treaties, afghanLaws }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [userChoice, setUserChoice] = useState('laws')
  const [defaultCategory, setDefaultCategory] = useState('all-categories')
  const [afgLawsUserCategory, setAFGLawsUserCategory] = useState(afghanLaws)

  //State Variables for Searching Function
  const [isLoading, setIsLoading] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [userQuery, setUserQuery] = useState('')
  const [searchedItems, setSearchedItems] = useState([])

  // Get Current Item
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = afgLawsUserCategory.slice(indexOfFirstItem, indexOfLastItem)
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  //
  const selectedItems = currentItems.map((item, index) => (
    <tr key={index} className='border-b border-accents_2'>
      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4' colSpan='5'>
        {item.acf.legislation}
      </td>
      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4'>{item.acf.gazette}</td>
      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4' colSpan='3'>
        <IntlProvider locale='en-US'>
          <FormattedDate value={item.acf.published} month='short' year='numeric' day='2-digit' />
        </IntlProvider>
      </td>
      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4'>
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
  ))

  const selectedItemsAfterSearch = searchedItems.map((item, index) => (
    <tr key={index} className='border-b border-accents_2'>
      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4'>
        {item.acf.legislation}
      </td>
      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4'>{item.acf.gazette}</td>
      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4' colSpan='3'>
        <IntlProvider locale='en-US'>
          <FormattedDate value={item.acf.published} month='short' year='numeric' day='2-digit' />
        </IntlProvider>
      </td>
      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4'>
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
  ))

  // Handle Click Event
  const handleClick = (userChoice) => {
    setUserChoice(userChoice)
  }
  const handleChange = async (e) => {
    setUserQuery(e.target.value)
    setIsLoading(true)
    setIsSearching(e.target.value === '' ? false : true)
    await searchForAfghanLaw(e.target.value, setSearchedItems, setIsLoading)
  }
  const handleCategoryChange = async (e) => {
    if (e.target.value === 'all-categories') {
      setDefaultCategory(e.target.value)
      setAFGLawsUserCategory(afghanLaws)
    } else {
      const userCategory = afghanLaws.filter((law) =>
        law.acf.category.find((category) => category.post_name === e.target.value)
      )
      setDefaultCategory(e.target.value)
      setAFGLawsUserCategory(userCategory)
      setCurrentPage(1)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  return (
    <div className='pt-36 pb-28'>
      <div className='container'>
        <div className='row justify-center'>
          <div className='col-12'>
            <div className='text-center mb-16'>
              <h1 className='text-2xl md:text-3xl lg:text-5xl font-playfair leading-snug mb-2'>
                Afghanistan Laws & Regulations
              </h1>
              <div className='relative line-sep-center'></div>
              <p className='text-base md:text-lg mb-4'>
                Unofficial English translated version of Afghanistan laws and regulations
              </p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-3'>
            <div className=''>
              <div
                className={`mb-2 py-3 px-5 cursor-pointer ${
                  userChoice === 'laws'
                    ? 'bg-tertiary text-grey-light-1'
                    : 'bg-grey-light-1 text-tertiary hover:text-primary'
                }`}
                onClick={() => handleClick('laws')}
              >
                <span className='mr-2'>
                  <i className='fa fa-gavel'></i>
                </span>
                <span className='font-extrabold text-base md:text-lg'>Laws & Regulations</span>
              </div>
              <div
                className={`mb-2 py-3 px-5 cursor-pointer ${
                  userChoice === 'treaties'
                    ? 'bg-tertiary text-grey-light-1'
                    : 'bg-grey-light-1 text-tertiary hover:text-primary'
                }`}
                onClick={() => handleClick('treaties')}
              >
                <span className='mr-2'>
                  <i className='fa fa-handshake'></i>
                </span>
                <span className='font-extrabold text-base md:text-lg'>Treaties & Conventions</span>
              </div>
            </div>
          </div>
          {userChoice === 'laws' ? (
            <div className='col-lg-9'>
              <div className='row'>
                <div className='col-12'>
                  <div className='bg-grey-light-1 text-accents_8 px-8 py-4'>
                    <div>
                      <div className='flex flex-wrap flex-col md:flex-row'>
                        <form>
                          <div className='mr-0 md:mr-4'>
                            <select
                              id=''
                              name=''
                              value={defaultCategory}
                              onChange={handleCategoryChange}
                            >
                              <option value='all-categories'>All Categories</option>
                              <option value='commercial-laws'>Commercial Laws</option>
                              <option value='administration-laws'>Administration Laws</option>
                              <option value='civil-laws'>Civil Laws</option>
                              <option value='constitution'>Constitution</option>
                              <option value='criminal-laws'>Criminal Laws</option>
                              <option value='miscellaneous-laws'>Miscellaneous Laws</option>
                            </select>
                          </div>
                        </form>
                        <div className='flex-1'>
                          <form onSubmit={handleSubmit}>
                            <div className='flex'>
                              <div className='flex-1 mr-4 last:mr-0'>
                                <input
                                  name='userQuery'
                                  value={userQuery}
                                  onChange={handleChange}
                                  spellCheck='true'
                                  type='search'
                                  placeholder='Search'
                                  required
                                />
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12'>
                  <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                    <table className='items-center bg-transparent w-full table-auto'>
                      <thead className='bg-gray-50'>
                        <tr>
                          <th
                            className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4'
                            colSpan='5'
                          >
                            Legislation
                          </th>
                          <th className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4'>
                            Gazette
                          </th>
                          <th
                            className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4'
                            colSpan='2'
                          >
                            Published
                          </th>
                          <th className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4'></th>
                          <th className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4'></th>
                        </tr>
                      </thead>
                      {isLoading ? (
                        <tbody className='text-center'>
                          <tr>
                            <td colSpan='6' className='py-4 align-middle'>
                              <ClipLoader size='50px' />
                            </td>
                          </tr>
                        </tbody>
                      ) : isSearching && searchedItems.length === 0 ? (
                        <tbody className='text-center'>
                          <tr>
                            <td colSpan='6' className='py-4 align-middle'>
                              No matching records found
                            </td>
                          </tr>
                        </tbody>
                      ) : (
                        <tbody>{userQuery ? selectedItemsAfterSearch : selectedItems}</tbody>
                      )}
                    </table>
                  </div>
                </div>
              </div>
              {isSearching ? (
                ''
              ) : (
                <div className='row'>
                  <div className='col'>
                    <div className='flex items-center justify-end pt-7'>
                      <Pagination
                        itemsPerPage={itemsPerPage}
                        totalItems={afgLawsUserCategory.length}
                        paginate={paginate}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className='col-lg-9'>
              <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                <table className='items-center bg-transparent w-full table-auto'>
                  <thead className='bg-gray-50'>
                    <tr>
                      <th className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4'>
                        Treaties & Conventions
                      </th>
                      <th className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4'>
                        Year
                      </th>
                      <th className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4'>
                        Pashto
                      </th>
                      <th className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4'>
                        Dari
                      </th>
                      <th className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4'>
                        English
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {treaties.map((item, index) => (
                      <tr key={index} className='border-b border-accents_2'>
                        <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4'>
                          {item.acf.title}
                        </td>
                        <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4'>
                          {item.acf.year}
                        </td>
                        <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4'>
                          {item.acf.doc_pashto && (
                            <a
                              href={item.acf.doc_pashto.url}
                              className='bg-tertiary text-white p-2 cursor-pointer'
                              target='_blank'
                              download
                            >
                              <i className='fa fa-download'></i>
                            </a>
                          )}
                        </td>
                        <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4'>
                          {item.acf.doc_dari && (
                            <a
                              href={item.acf.doc_dari.url}
                              className='bg-tertiary text-white p-2 cursor-pointer'
                              target='_blank'
                              download
                            >
                              <i className='fa fa-download'></i>
                            </a>
                          )}
                        </td>
                        <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4'>
                          {item.acf.doc_english && (
                            <a
                              href={item.acf.doc_english.url}
                              className='bg-tertiary text-white p-2 cursor-pointer'
                              target='_blank'
                              download
                            >
                              <i className='fa fa-download'></i>
                            </a>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

AfghanistanLaws.getLayout = function getLayout(page) {
  return (
    <Layout
      title='Afghanistan Laws & Regulations - Masnad Law Firm'
      page='afghanistan-laws-regulations'
      canonical='https://masnad.af/afghanistan-laws-regulations'
      pageDescription='Here is the list of Afghanistan laws and regulations ranging from civil to commercial to criminal that are translated in English. Please note that the English translation of the legislations is not official and is therefore not guaranteed by Masnad Law Firm. We recommend to use Dari & Pashto official version of the legislations for better understanding.'
    >
      {page}
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const treaties = await getAllTreatiesAndConventions()
  const afghanLaws = await getAllAfghanistanLaws()
  return {
    props: {
      afghanLaws,
      treaties,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    //revalidate: 10, // In seconds
  }
}
