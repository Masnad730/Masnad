import Link from 'next/link'

const Practices = () => {
  return (
    <div
      className='bg-cover lg:bg-100% bg-no-repeat bg-top-4 md:bg-0%'
      style={{
        backgroundImage: 'url("/images/bg-practice.jpg")',
      }}
    >
      <div className='container pt-2 lg:pt-32 pb-10'>
        <div className='row'>
          <div className='col-sm-6 col-md-4 col-lg-3 p-[0!important]'>
            <div className='pr-px pb-px'>
              <div className='bg-tertiary text-white h-full w-full flex flex-col items-center justify-start px-2 md:px-0 py-10'>
                <div className='h-12'>
                  <h3 className='text-sm md:text-base text-center'>Tax Law</h3>
                </div>
                <div className='mt-8 mb-4'>
                  <img src='/icons/svg-white/tax.svg' alt='Tax Law' width='65' height='62' />
                </div>
              </div>
            </div>
          </div>
          <div className='col-6 col-md-4 col-lg-3 p-[0!important]'>
            <div className='pr-px pb-px'>
              <div className='bg-tertiary text-white h-full w-full flex flex-col items-center justify-start px-2 md:px-0 py-10'>
                <div className='h-12'>
                  <h3 className='text-sm md:text-base text-center'>Aviation</h3>
                </div>
                <div className='mt-8 mb-4'>
                  <img src='/icons/svg-white/aviation.svg' alt='Aviation' width='65' height='62' />
                </div>
              </div>
            </div>
          </div>
          <div className='col-6 col-md-4 col-lg-3 p-[0!important]'>
            <div className='pr-px pb-px'>
              <div className='bg-tertiary text-white h-full w-full flex flex-col items-center justify-start px-2 md:px-0 py-10'>
                <div className='h-12'>
                  <h3 className='text-sm md:text-base text-center'>Real Estate</h3>
                </div>
                <div className='mt-8 mb-3'>
                  <img
                    src='/icons/svg-white/real-estate.svg'
                    alt='Real Estate'
                    width='65'
                    height='62'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='col-6 col-md-6 col-lg-3 p-[0!important]'>
            <div className='pr-px pb-px'>
              <div className='bg-tertiary text-white h-full w-full flex flex-col items-center justify-start px-2 md:px-0 py-10'>
                <div className='h-12'>
                  <h3 className='text-sm md:text-base text-center'>
                    Banking and Financial Services
                  </h3>
                </div>
                <div className='mt-8 mb-3'>
                  <img
                    src='/icons/svg-white/banking-and-financial-services.svg'
                    alt='Banking and Financial Services'
                    width='65'
                    height='62'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='col-6 col-md-6 col-lg-3 p-[0!important]'>
            <div className='pr-px pb-px'>
              <div className='bg-tertiary text-white h-full w-full flex flex-col items-center justify-start px-2 md:px-0 py-10'>
                <div className='h-12'>
                  <h3 className='text-sm md:text-base text-center'>
                    Due Diligence and Investigation
                  </h3>
                </div>
                <div className='mt-8 mb-4'>
                  <img
                    src='/icons/svg-white/due-diligence-and-investigations.svg'
                    alt='Due Diligence and Investigation'
                    width='65'
                    height='62'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 p-[0!important]'>
            <div className='pr-px pb-px h-full'>
              <div className='bg-secondary text-white  w-full h-full flex flex-col items-center justify-start py-10 px-8'>
                <h2 className='text-xl md:text-2xl mb-3'>Practice Areas</h2>
                <p className='text-center'>
                  Masnad Law Firm provides full-service to its Clients. The following highlights a
                  general description of many of our practice areas.
                </p>
              </div>
            </div>
          </div>
          <div className='col-6 col-md-4 col-lg-3 p-[0!important]'>
            <div className='pr-px pb-px'>
              <div className='bg-tertiary text-white h-full w-full flex flex-col items-center justify-start px-2 md:px-0 py-10'>
                <div className='h-12'>
                  <h3 className='text-sm md:text-base text-center'>Employment and Labor Law</h3>
                </div>
                <div className='mt-8 mb-3'>
                  <img
                    src='/icons/svg-white/employment-and-labor-law.svg'
                    alt='Employment and Labor Law'
                    width='65'
                    height='62'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='col-6 col-md-4 col-lg-3 p-[0!important]'>
            <div className='pr-px pb-px'>
              <div className='bg-tertiary text-white h-full w-full flex flex-col items-center justify-start px-2 md:px-0 py-10'>
                <div className='h-12'>
                  <h3 className='text-sm md:text-base text-center'>Intellectual Property</h3>
                </div>
                <div className='mt-8 mb-3'>
                  <img
                    src='/icons/svg-white/intellectual-property.svg'
                    alt='Intellectual Property'
                    width='65'
                    height='62'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='col-6 col-md-4 col-lg-3 p-[0!important]'>
            <div className='pr-px pb-px'>
              <div className='bg-tertiary text-white h-full w-full flex flex-col items-center justify-start px-2 md:px-0 py-10'>
                <div className='h-12'>
                  <h3 className='text-sm md:text-base text-center'>
                    Insolvency, Bankruptcy and Restructuring
                  </h3>
                </div>
                <div className='mt-8 mb-3'>
                  <img
                    src='/icons/svg-white/insolvency-bankruptcy-and-restructuring.svg'
                    alt='Insolvency, Bankruptcy and Restructuring'
                    width='65'
                    height='62'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='col-6 col-md-6 col-lg-3 p-[0!important]'>
            <div className='pr-px pb-px'>
              <div className='bg-tertiary text-white h-full w-full flex flex-col items-center justify-start px-2 md:px-0 py-10'>
                <div className='h-12'>
                  <h3 className='text-sm md:text-base text-center'>Insurance and Reinsurance</h3>
                </div>
                <div className='mt-8 mb-3'>
                  <img
                    src='/icons/svg-white/insurance-and-reinsurance.svg'
                    alt='Insurance and Reinsurance'
                    width='65'
                    height='62'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-3 p-[0!important]'>
            <div className='pr-px pb-px'>
              <div className='bg-tertiary text-white h-full w-full flex flex-col items-center justify-start px-2 md:px-0 py-10'>
                <div className='h-12'>
                  <h3 className='text-sm md:text-base text-center'>Immigration</h3>
                </div>
                <div className='mt-8 mb-3'>
                  <img
                    src='/icons/svg-white/immigration.svg'
                    alt='Immigration'
                    width='65'
                    height='62'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='flex justify-end items-center mt-4'>
              <Link href='/practices'>
                <a className='text-white hover:text-primary font-playfair'>Discover More</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Practices
