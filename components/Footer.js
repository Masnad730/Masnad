import Link from 'next/link'
import { useState } from 'react'
import axios from 'axios'
import ClipLoader from 'react-spinners/ClipLoader'
import { useSnackbar } from 'notistack'

import { submitSubscriptionEmail } from '../lib/api'

const Footer = () => {
  const { enqueueSnackbar } = useSnackbar()
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    submitSubscriptionEmail(email, setEmail, setIsLoading, enqueueSnackbar)
  }
  return (
    <footer className='bg-grey-light-1 text-accents_8 text- pt-2 pb-6'>
      <div className='container'>
        <div className='row py-16 md:py-20 lg:py-28 items-center'>
          <div className='col-12'>
            <div className='flex flex-col items-center justify-center text-center min-w-full'>
              <div className='pb-8'>
                <h4 className='text-xl md:text-2xl lg:text-4xl text-accents_9 font-bold mb-2'>
                  Subscribe to our newsletter!
                </h4>
                <p className='text-accents_6 font-rubik'>
                  Stay up to date with our latest insights.
                </p>
              </div>
              <div className='w-full'>
                <form onSubmit={handleSubmit}>
                  <div className='max-w-[440px] mx-auto'>
                    <div className=''>
                      <input
                        name='email'
                        type='email'
                        className='rounded'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className=''>
                      <button
                        type='submit'
                        className='bg-secondary text-white w-full text-center rounded'
                      >
                        {!isLoading ? (
                          'Subscribe'
                        ) : (
                          <ClipLoader color={'#fff'} loading={isLoading} size={30} />
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className='border-t border-accents_5' />

      <div className='px-8'>
        <div className='flex flex-col md:flex-row flex-wrap items-center justify-between py-12'>
          <div className='flex-1 flex items-center justify-start'>
            <nav className='mb-8 lg:mb-0'>
              <ul className='flex'>
                <li className='ml-5 first:ml-0 lg:ml-6 lg:first:ml-0 capitalize text-sm md:text-base'>
                  <Link href='/about'>
                    <a>about us</a>
                  </Link>
                </li>
                <li className='ml-5 first:ml-0 lg:ml-6 lg:first:ml-0 capitalize text-sm md:text-base'>
                  <Link href='/practices'>
                    <a>practices</a>
                  </Link>
                </li>
                <li className='ml-5 first:ml-0 lg:ml-6 lg:first:ml-0 capitalize text-sm md:text-base'>
                  <Link href='/insights'>
                    <a>insights</a>
                  </Link>
                </li>
                <li className='ml-5 first:ml-0 lg:ml-6 lg:first:ml-0 capitalize text-sm md:text-base'>
                  <Link href='/contact'>
                    <a>contact us</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className='flex-1 flex items-center justify-center order-3 lg:!order-none basis-full lg:basis-auto pt-4 lg:pt-0'>
            <Link href='/' passHref>
              <a>
                <img
                  src='/images/masnad-logo.png'
                  alt='Masnad Law Firm'
                  className='w-[166px] lg:w-[203px]'
                />
              </a>
            </Link>
          </div>

          <div className='flex-1 flex items-center justify-end mb-8 lg:mb-0'>
            <ul className='flex items-center'>
              <li className='flex items-center justify-center text-accents_8 text-xl mr-8 last:mr-0'>
                <a href='https://www.facebook.com/MasnadLawFirm/' target='_blank'>
                  <i className='flaticon-facebook'></i>
                </a>
              </li>
              <li className='flex items-center justify-center text-accents_8 text-xl mr-8 last:mr-0'>
                <a href='https://twitter.com/masnadlc' target='_blank'>
                  <i className='flaticon-twitter'></i>
                </a>
              </li>
              <li className='flex items-center justify-center text-accents_8 text-xl mr-8 last:mr-0'>
                <a
                  href='https://www.linkedin.com/company/masnad?trk=biz-companies-cym'
                  target='_blank'
                >
                  <i className='flaticon-linkedin'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              <span className='text-xs'>
                All Rights Reserved. Copyright © {new Date().getFullYear()} Masnad Law Firm
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
