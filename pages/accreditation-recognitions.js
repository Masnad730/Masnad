import { useState } from 'react'
import { Modal } from 'react-responsive-modal'

import Layout from '../components/layout/Layout'

export default function AccreditationAndRecognitions() {
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)

  const onOpenModal1 = () => setOpen1(true)
  const onCloseModal1 = () => setOpen1(false)
  const onOpenModal2 = () => setOpen2(true)
  const onCloseModal2 = () => setOpen2(false)
  return (
    <div className='pt-20 pb-12 block w-full overflow-x-auto'>
      <div className='container'>
        <div className='row justify-center'>
          <div className='col-12'>
            <div className='text-center mb-16'>
              <h1 className='text-2xl md:text-3xl lg:text-5xl font-playfair leading-snug mb-2'>
                Accreditation & Recognitions
              </h1>
              <div className='relative line-sep-center'></div>
              <p className='text-base md:text-lg mb-4'>
                Masnad Law Firm is a recognized and well-known brand name in field of law in
                Afghanistan, its trademark is registered in Afghanistan and abroad all of its
                intellectual property rights are reserved. Some of such registrations and
                accreditations are as follow:
              </p>
            </div>
          </div>
        </div>
        <div className='row pb-12'>
          <div className='col-sm-12 col-md-6 col-lg-4 mb-6 sm:mb-0'>
            <div className='border border-accents_3 rounded-2xl py-3 md:py-6 text-center hover:bg-white hover:shadow-card'>
              <figure className='cursor-pointer' onClick={onOpenModal1}>
                <div className='h-[16rem] px-5 lg:px-10 flex items-center justify-center'>
                  <img
                    src='/images/MASNAD Trademark Registration in Afghanistan.jpg'
                    className='w-auto shadow-card'
                    alt=''
                  />
                </div>
                <figcaption className='px-4 mt-6'>
                  <h3 className='text-sm lg:text-base xl:text-lg font-lato font-bold'>
                    MASNAD Trademark Registration in Afghanistan
                  </h3>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4 mb-6 sm:mb-0'>
            <div className='border border-accents_3 rounded-2xl py-3 md:py-6 text-center hover:bg-white hover:shadow-card'>
              <figure className='cursor-pointer' onClick={onOpenModal2}>
                <div className='h-[16rem] px-5 lg:px-10 flex items-center justify-center'>
                  <img
                    src='/images/MASNAD Trademark Registration in China.jpg'
                    className='h-full w-auto shadow-card'
                    alt
                  />
                </div>
                <figcaption className='px-4 mt-6'>
                  <h3 className='text-sm lg:text-base xl:text-lg font-lato text-base md:text-lg lg:text-xl font-bold'>
                    MASNAD Trademark Registration in China
                  </h3>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open1} onClose={onCloseModal1} center>
        <img src='/images/MASNAD Trademark Registration in Afghanistan.jpg' alt='' />
      </Modal>
      <Modal open={open2} onClose={onCloseModal2} center>
        <img
          src='/images/MASNAD Trademark Registration in China.jpg'
          alt=''
          className='h-auto sm:h-[450px] lg:h-[650px]'
        />
      </Modal>
    </div>
  )
}

AccreditationAndRecognitions.getLayout = function getLayout(page) {
  return (
    <Layout
      title='Accreditation & Recognitions - Masnad Law Firm'
      page='accreditation-recognitions'
      canonical='https://masnad.af/accreditation-recognitions'
      pageDescription=''
    >
      {page}
    </Layout>
  )
}
