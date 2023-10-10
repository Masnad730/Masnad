import { useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import { useSnackbar } from 'notistack'

import { submitEnquiry } from '../lib/api'
import Layout from '../components/layout/Layout'

export default function Contact() {
  const { enqueueSnackbar } = useSnackbar()
  const [isLoading, setIsLoading] = useState(false)
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUserInfo({ ...userInfo, [name]: value })
  }
  const handleSubmit = async (e) => {
    setIsLoading(true)
    e.preventDefault()
    submitEnquiry(userInfo, setUserInfo, setIsLoading, enqueueSnackbar)
  }

  return (
    <div>
      <section className='pt-20 md:pt-28 lg:pt-48'>
        <div className='container'>
          <div className='row text-center'>
            <div className='col-12'>
              <div className='pb-24 lg:pb-32'>
                <h1 className='text-2xl md:text-4xl lg:text-5xl font-playfair leading-snug mb-4'>
                  Happy to help. <br className='block' />
                  Any time
                  <span className='font-lato'> &amp; </span>Always
                </h1>
                <p className='px-4'>
                  If you have any questions of legal matter, feel free to contact us.
                  <br className='hidden md:block' /> We’d love to hear from you, be it anything.
                </p>
              </div>
            </div>
          </div>
          <div className='row bg-accents_1 my-14'>
            <div className='col-lg-6'>
              <div className='relative p-0 md:p-4 lg:p-12'>
                <div className='lg:absolute lg:-top-12 lg:left-12 -mt-10 md:-mt-16 lg:-mt-0 shadow-box'>
                  <div className='bg-white px-4 md:px-8 py-6'>
                    <div>
                      <form onSubmit={handleSubmit}>
                        <div className='row'>
                          <div className='col-sm-12 col-lg-6'>
                            <label className='text-sm font-light' htmlFor='first-name'>
                              First Name
                            </label>
                            <input
                              type='text'
                              name='firstName'
                              value={userInfo.firstName}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className='col-sm-12 col-lg-6'>
                            <label className='text-sm font-light' htmlFor='last-name'>
                              Last Name
                            </label>
                            <input
                              type='text'
                              name='lastName'
                              value={userInfo.lastName}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className='col-lg-12'>
                            <label className='text-sm font-light' htmlFor='phone-number'>
                              Phone Number
                            </label>
                            <input
                              type='text'
                              name='phoneNumber'
                              value={userInfo.phoneNumber}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className='col-lg-12'>
                            <label className='text-sm font-light' htmlFor='email'>
                              Email
                            </label>
                            <input
                              type='email'
                              name='email'
                              value={userInfo.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className='col-lg-12'>
                            <label className='text-sm font-light' htmlFor='message'>
                              Message
                            </label>
                            <textarea
                              name='message'
                              id='message'
                              cols='30'
                              rows='4'
                              name='message'
                              value={userInfo.message}
                              onChange={handleChange}
                              required
                            ></textarea>
                          </div>
                          <div className='col-lg-12'>
                            <button className='bg-primary text-white text-sm uppercase w-full flex items-center justify-center'>
                              {!isLoading ? (
                                'send message'
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
            <div className='col-lg-6'>
              <div className='pt-16 pl-4 md:pl-12 pr-8 md:pr-28 pb-12'>
                <div className='flex items-center mb-10'>
                  <span className='dash-line'></span>
                  <h2 className='text-base text-tertiary uppercase font-playfair'>get in touch</h2>
                </div>
                <div>
                  <div className='flex items-start justify-between border-b border-accents_3 last:border-b-0 py-8'>
                    <div>
                      <div className='text-lg text-accents_6 font-bold'>Phone</div>
                      <div className='text-lg font-bold'>+93 781 221 122</div>
                    </div>
                    <div>
                      <div className='text-lg text-accents_6 font-bold'>WhatsApp</div>
                      <a href='https://wa.me/93730830830' target='_blank' rel='noreferrer'>
                        <div className='text-lg font-bold'>+93 730 830 830</div>
                      </a>
                    </div>
                  </div>
                  <div className='flex items-start border-b border-accents_3 last:border-b-0 py-8'>
                    <div>
                      <div className='text-lg text-accents_6 font-bold'>Email</div>
                      <a href='mailto:info@masnad.af'>
                        <div className='text-lg font-bold'>info@masnad.af</div>
                      </a>
                    </div>
                  </div>
                  <div className='flex items-start border-b border-accents_3 last:border-b-0 py-8'>
                    <div>
                      <div className='text-lg text-accents_6 font-bold'>Address</div>
                      <address className='not-italic text-lg font-bold'>
                        Ansori Street, Shahri Now, Kabul, Afghanistan
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <div className='pt-6 md:pt-12 pb-8 md:pb-16'>
                <h3 className='text-xl md:text-2xl lg:text-3xl text-center mb-10'>
                  You’ll find us on the Map in…
                </h3>
                <iframe
                  className='outline-none focus:outline-none rounded-lg'
                  src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6573.188889417662!2d69.17287680000003!3d34.538501600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1617276306046!5m2!1sen!2s'
                  width='100%'
                  height='480'
                  allowFullScreen
                  loading='lazy'
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

Contact.getLayout = function getLayout(page) {
  return (
    <Layout
      title='Contact Us - Masnad Law Firm'
      page='contact'
      canonical='https://masnad.af/contact'
      pageDescription='Contact us. Ansori Street, Shahri Now, District 10, Kabul, Afghanistan | +93 730 830 830. info@masnad.af'
    >
      {page}
    </Layout>
  )
}
