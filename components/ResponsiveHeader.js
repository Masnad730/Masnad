import { useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'

const ResponsiveHeader = ({ activePage }) => {
  Router.events.on('routeChangeStart', (url) => {
    setShowMenu(false)
  })
  const [showSubMenu1, setShowSubMenu1] = useState(false)
  const [showSubMenu2, setShowSubMenu2] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className='transition-custom w-full overflow-auto'>
      <div className=''>
        <div className='flex items-start justify-between pt-6 pb-0'>
          <div
            className={
              activePage === 'home'
                ? 'bg-white pt-4 pr-8 pb-5 pl-[47px] md:pl-16 rounded-r-full'
                : 'pl-5 md:pl-10 pt-2.5'
            }
          >
            <div className='flex items-center justify-center'>
              <div>
                <Link href='/' passHref>
                  <a>
                    <img src='/images/masnad-logo.png' alt='Masnad Law Firm' width='166' />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className='self-start pr-5 md:pr-10'>
            <button
              className={
                activePage === 'home'
                  ? 'px-0 py-0 my-0 text-accents_0 transition-all focus:outline-none'
                  : 'px-0 py-0 my-0 text-accents_9 transition-all focus:outline-none'
              }
              onClick={() => setShowMenu(!showMenu)}
            >
              <svg
                className='fill-current'
                xmlns='http://www.w3.org/2000/svg'
                width='28'
                height='28'
                viewBox='0 0 20 20'
              >
                <title>menu-toggle</title>
                <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
              </svg>
            </button>
            <div
              className={
                showMenu
                  ? 'fixed top-0 right-[0%] bg-primary text-accents_0 w-80 md:w-96 h-screen overflow-y-auto z-50 transition-all duration-500'
                  : 'fixed top-0 -right-full bg-primary text-accents_0 w-0 h-screen z-50 transition-all duration-500'
              }
            >
              <div className='w-full flex flex-col'>
                <div className='flex items-start justify-between px-8 py-6 bg-white'>
                  <Link href='/' passHref>
                    <a>
                      <img src='/images/masnad-logo.png' alt='Masnad Law Firm' width='168' />
                    </a>
                  </Link>
                  <label
                    htmlFor='menu-toggle'
                    className='cursor-pointer transition-all'
                    onClick={() => setShowMenu(false)}
                  >
                    <svg className='text-accents_9' width='30' height='30' viewBox='0 0 20 20'>
                      <title>cancel-menu</title>
                      <path d='M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z'></path>
                    </svg>
                  </label>
                </div>
                <nav className='flex items-center overflow-y-scroll'>
                  <ul className='flex flex-col w-full font-bold py-2'>
                    <li className='py-2.5 w-full px-5'>
                      <Link href='/' passHref>
                        <a
                          className={
                            activePage === 'home'
                              ? 'text-tertiary'
                              : 'transition-custom hover:text-tertiary'
                          }
                        >
                          Home
                        </a>
                      </Link>
                    </li>
                    <li className='py-2.5 w-full pl-5'>
                      <a className='relative'>
                        <div
                          className='flex items-center justify-between pr-5'
                          onClick={() => setShowSubMenu1(!showSubMenu1)}
                        >
                          <span
                            className={
                              activePage === 'about' || activePage === 'accreditation-recognitions'
                                ? 'text-tertiary'
                                : 'transition-custom hover:text-tertiary'
                            }
                          >
                            About
                          </span>
                          <span
                            className={`flex items-center justify-center ${
                              showSubMenu1
                                ? 'transform rotate-180 transition-all duration-300 ease-in-out'
                                : ''
                            }`}
                          >
                            <svg
                              className='w-2.5 h-2.5 pointer-events-none'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 412 232'
                            >
                              <path
                                d='M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z'
                                fill='#ffffff'
                                fillRule='nonzero'
                              />
                            </svg>
                          </span>
                        </div>
                        <ul className={showSubMenu1 ? 'block mt-2' : 'hidden'}>
                          <li className='px-5 py-2.5 flex last:border-b-0 font-normal'>
                            <Link href='/about' passHref>
                              <a
                                className={
                                  activePage === 'about'
                                    ? 'text-tertiary'
                                    : 'transition-custom hover:text-tertiary w-full'
                                }
                              >
                                About Firm
                              </a>
                            </Link>
                          </li>
                          <li className='px-5 py-2.5 flex last:border-b-0 font-normal'>
                            <Link href='/accreditation-recognitions' passHref>
                              <a
                                className={
                                  activePage === 'accreditation-recognitions'
                                    ? 'text-tertiary'
                                    : 'transition-custom hover:text-tertiary w-full'
                                }
                              >
                                Accreditation & Recognitions
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </a>
                    </li>
                    <li className='py-2.5 w-full px-5'>
                      <Link href='/practices' passHref>
                        <a
                          className={
                            activePage === 'practices'
                              ? 'text-tertiary'
                              : 'transition-custom hover:text-tertiary'
                          }
                        >
                          Practices
                        </a>
                      </Link>
                    </li>
                    <li className='py-2.5 w-full px-5'>
                      <Link href='/insights' passHref>
                        <a
                          className={
                            activePage === 'insights'
                              ? 'text-tertiary'
                              : 'transition-custom hover:text-tertiary'
                          }
                        >
                          Insights
                        </a>
                      </Link>
                    </li>

                    <li className='py-2.5 w-full pl-5'>
                      <a className='relative'>
                        <div
                          className='flex items-center justify-between pr-5'
                          onClick={() => setShowSubMenu2(!showSubMenu2)}
                        >
                          <span
                            className={
                              activePage !== 'home' &&
                              activePage !== 'about' &&
                              activePage !== 'accreditation-recognitions' &&
                              activePage !== 'insights' &&
                              activePage !== 'practices' &&
                              activePage !== 'contact'
                                ? 'text-tertiary'
                                : 'transition-custom hover:text-tertiary'
                            }
                          >
                            Resources
                          </span>
                          <span
                            className={`flex items-center justify-center ${
                              showSubMenu2
                                ? 'transform rotate-180 transition-all duration-300 ease-in-out'
                                : ''
                            }`}
                          >
                            <svg
                              className='w-2.5 h-2.5 pointer-events-none'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 412 232'
                            >
                              <path
                                d='M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z'
                                fill='#ffffff'
                                fillRule='nonzero'
                              />
                            </svg>
                          </span>
                        </div>
                        <ul className={showSubMenu2 ? 'block mt-2' : 'hidden'}>
                          <li className='px-5 py-2.5 flex last:border-b-0 font-normal'>
                            <Link href='/afghanistan-laws-regulations' passHref>
                              <a
                                className={
                                  activePage === 'afghanistan-laws-regulations'
                                    ? 'text-tertiary'
                                    : 'transition-custom hover:text-tertiary w-full'
                                }
                              >
                                Afghanistan Laws & Regulations
                              </a>
                            </Link>
                          </li>
                          <li className='px-5 py-2.5 flex last:border-b-0 font-normal'>
                            <Link href='/tax-manuals-guidelines' passHref>
                              <a
                                className={
                                  activePage === 'tax-manuals-guidelines'
                                    ? 'text-tertiary'
                                    : 'transition-custom hover:text-tertiary w-full'
                                }
                              >
                                Tax Manuals & Guidelines
                              </a>
                            </Link>
                          </li>
                          <li className='px-5 py-2.5 flex last:border-b-0 font-normal'>
                            <Link href='/legal-books-papers' passHref>
                              <a
                                className={
                                  activePage === 'legal-books'
                                    ? 'text-tertiary'
                                    : 'transition-custom hover:text-tertiary w-full'
                                }
                              >
                                Legal Books & Papers
                              </a>
                            </Link>
                          </li>
                          <li className='px-5 py-2.5 flex last:border-b-0 font-normal'>
                            <Link href='/legal-documents-templates' passHref>
                              <a
                                className={
                                  activePage === 'legal-documents'
                                    ? 'text-tertiary'
                                    : 'transition-custom hover:text-tertiary w-full'
                                }
                              >
                                Legal Documents (Templates)
                              </a>
                            </Link>
                          </li>
                          <li className='px-5 py-2.5 flex last:border-b-0 font-normal'>
                            <Link href='/legal-reports' passHref>
                              <a
                                className={
                                  activePage === 'legal-reports'
                                    ? 'text-tertiary'
                                    : 'transition-custom hover:text-tertiary w-full'
                                }
                              >
                                Legal Reports
                              </a>
                            </Link>
                          </li>
                          <li className='px-5 py-2.5 flex last:border-b-0 font-normal'>
                            <Link href='/links' passHref>
                              <a
                                className={
                                  activePage === '/links'
                                    ? 'text-tertiary'
                                    : 'transition-custom hover:text-tertiary w-full'
                                }
                              >
                                Useful Links
                              </a>
                            </Link>
                          </li>
                          <li className='px-5 py-2.5 flex last:border-b-0 font-normal'>
                            <Link href='/doing-business-in-afghanistan' passHref>
                              <a
                                className={
                                  activePage === 'doing-biz-in-afg'
                                    ? 'text-tertiary'
                                    : 'transition-custom hover:text-tertiary w-full'
                                }
                              >
                                Doing Business in Afghanistan
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </a>
                    </li>
                    <li className='py-2.5 w-full px-5'>
                      <Link href='/contact' passHref>
                        <a
                          className={
                            activePage === 'contact'
                              ? 'text-tertiary'
                              : 'transition-custom hover:text-tertiary'
                          }
                        >
                          Contact Us
                        </a>
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div className='flex items-center mt-8 mb-10 ml-5'>
                  <ul className='flex items-center text-accents_0'>
                    <li className='flex items-center mr-2 last:mr-0'>
                      <a
                        className='w-10 h-10 rounded-1/2 flex items-center justify-center bg-tertiary'
                        href='https://www.facebook.com/MasnadLawFirm/'
                      >
                        <i className='flaticon-facebook'></i>
                      </a>
                    </li>
                    <li className='flex items-center mr-2 last:mr-0'>
                      <a
                        className='w-10 h-10 rounded-1/2 flex items-center justify-center bg-tertiary'
                        href='https://twitter.com/masnadlc'
                      >
                        <i className='flaticon-twitter'></i>
                      </a>
                    </li>
                    <li className='flex items-center mr-2 last:mr-0'>
                      <a
                        className='w-10 h-10 rounded-1/2 flex items-center justify-center bg-tertiary'
                        href='https://www.linkedin.com/company/masnad?trk=biz-companies-cym'
                      >
                        <i className='flaticon-linkedin'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/*<div className='col-4 flex items-center justify-end'></div>*/}
        </div>
      </div>
      <span className={showMenu ? 'overlay-full-black' : 'hidden'}></span>
    </header>
  )
}

export default ResponsiveHeader
