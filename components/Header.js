import * as React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

import ResponsiveHeader from './ResponsiveHeader'

const Header = ({ activePage }) => {
  const [showNavbar, setShowNavbar] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setShowNavbar(window.pageYOffset > 200))
    }
  }, [])
  return (
    <>
      <div className='block lg:hidden'>
        <ResponsiveHeader activePage={activePage} />
      </div>
      <header
        className={
          showNavbar
            ? 'hidden lg:block fixed top-0 min-w-full bg-white z-50 shadow-navbar font-lato'
            : 'hidden lg:block min-w-full p-0 m-0 font-lato'
        }
      >
        <div
          className={
            activePage === 'home' && !showNavbar
              ? 'flex justify-between items-center pr-24 pl-0 py-5'
              : 'flex justify-between items-center px-24 py-5'
          }
        >
          <div
            className={
              activePage === 'home' && !showNavbar
                ? 'bg-white pt-4 pr-8 pb-5 pl-[90px] rounded-r-full'
                : ''
            }
          >
            <Link href='/' passHref>
              <a>
                <img src='/images/masnad-logo.png' alt='Masnad Law Firm' width='203' />
              </a>
            </Link>
          </div>
          <nav
            className={
              activePage === 'home' && !showNavbar
                ? 'text-white hidden lg:block'
                : 'text-accents_9 hidden lg:block'
            }
          >
            <ul className='flex'>
              <li className='ml-10 first:ml-0 py-1 uppercase text-medium relative border-hover'>
                <Link href='/'>
                  <a
                    className={`py-2 ${
                      activePage === 'home'
                        ? 'text-primary'
                        : activePage === 'home' && !showNavbar
                        ? 'text-white'
                        : 'text-accents_9'
                    }`}
                  >
                    home
                  </a>
                </Link>
              </li>
              <li className='ml-10 first:ml-0 py-1 uppercase text-medium relative border-hover group'>
                <Link href='#'>
                  <a className='py-6 relative'>
                    <span
                      className={
                        activePage === 'about'
                          ? 'text-primary'
                          : activePage === 'home' && !showNavbar
                          ? 'text-white'
                          : 'text-accents_9'
                      }
                    >
                      about
                    </span>
                    <ul className='hidden opacity-0 absolute -left-3/4 top-0 z-50 py-8 pl-10 mt-14 w-72 bg-accents_9 normal-case text-accents_0 group-hover:block group-hover:opacity-100 font-lato'>
                      <li className='py-3 text-base w-max relative border-hover'>
                        <Link href='/about' passHref>
                          <a>About Firm</a>
                        </Link>
                      </li>
                      <li className='py-3 text-base w-max relative border-hover'>
                        <Link href='/accreditation-recognitions' passHref>
                          <a>Accreditation & Recognitions</a>
                        </Link>
                      </li>
                    </ul>
                  </a>
                </Link>
              </li>
              <li className='ml-10 first:ml-0 py-1 uppercase text-medium relative border-hover'>
                <Link href='/practices'>
                  <a
                    className={`py-2 ${
                      activePage === 'practices'
                        ? 'text-primary'
                        : activePage === 'home' && !showNavbar
                        ? 'text-white'
                        : 'text-accents_9'
                    }`}
                  >
                    practices
                  </a>
                </Link>
              </li>
              <li className='ml-10 first:ml-0 py-1 uppercase text-medium relative border-hover'>
                <Link href='/insights'>
                  <a
                    className={`py-2 ${
                      activePage === 'insights'
                        ? 'text-primary'
                        : activePage === 'home' && !showNavbar
                        ? 'text-white'
                        : 'text-accents_9'
                    }`}
                  >
                    insights
                  </a>
                </Link>
              </li>
              <li className='ml-10 first:ml-0 py-1 uppercase text-medium relative border-hover group'>
                <Link href='#'>
                  <a className='py-6 relative'>
                    <span
                      className={
                        activePage === 'resources'
                          ? 'text-primary'
                          : activePage === 'home' && !showNavbar
                          ? 'text-white'
                          : 'text-accents_9'
                      }
                    >
                      resources
                    </span>
                    <ul className='hidden opacity-0 absolute -left-3/4 top-0 z-50 py-8 pl-10 mt-14 w-72 bg-accents_9 normal-case text-accents_0 group-hover:block group-hover:opacity-100 font-lato'>
                      <li className='py-3 text-base w-max relative border-hover'>
                        <Link href='/afghanistan-laws-regulations' passHref>
                          <a>Afghanistan Laws & Regulations</a>
                        </Link>
                      </li>
                      <li className='py-3 text-base w-max relative border-hover'>
                        <Link href='/tax-manuals-guidelines' passHref>
                          <a>Tax Manuals & Guidelines</a>
                        </Link>
                      </li>
                      <li className='py-3 text-base w-max relative border-hover'>
                        <Link href='/legal-books-papers' passHref>
                          <a>Legal Books & Papers</a>
                        </Link>
                      </li>
                      <li className='py-3 text-base w-max relative border-hover'>
                        <Link href='/legal-documents-templates' passHref>
                          <a>Legal Documents (Templates)</a>
                        </Link>
                      </li>
                      <li className='py-3 text-base w-max relative border-hover'>
                        <Link href='/legal-reports' passHref>
                          <a>Legal Reports</a>
                        </Link>
                      </li>
                      <li className='py-3 text-base w-max relative border-hover'>
                        <Link href='/links' passHref>
                          <a>Useful Links</a>
                        </Link>
                      </li>
                      <li className='py-3 text-base w-max relative border-hover'>
                        <Link href='/doing-business-in-afghanistan' passHref>
                          <a>Doing Business in Afghanistan</a>
                        </Link>
                      </li>
                    </ul>
                  </a>
                </Link>
              </li>
              <li className='ml-10 first:ml-0 py-1 uppercase text-medium relative border-hover'>
                <Link href='/contact'>
                  <a
                    className={`py-2 ${
                      activePage === 'contact'
                        ? 'text-primary'
                        : activePage === 'home' && !showNavbar
                        ? 'text-white'
                        : 'text-accents_9'
                    }`}
                  >
                    contact us
                  </a>
                </Link>
              </li>
              <li className='ml-10 first:ml-0 py-1 uppercase text-medium relative border-hover'>
                <a>
                  <i className='fas fa-search'></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
