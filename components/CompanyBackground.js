import Link from 'next/link'

const CompanyBackground = ({ showAllInfo }) => {
  return (
    <section
      className='py-28 lg:py-32'
      style={{
        backgroundImage: 'url("/images/bg-back-image.png")',
        backgroundSize: 'cover',
      }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='flex items-center justify-end'>
              <h2 className='text-right text-4xl font-normal leading-snug pr-6 pb-8'>
                A Full Service <br />
                Law Firm
              </h2>
            </div>
          </div>
          <div className='col-lg-8'>
            <div className='h-full flex items-center border-l-2 border-primary'>
              <div>
                <span className='ml-8 uppercase text-sm text-accents_6 tracking-widest font-semibold font-playfair'>
                  About Us
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-4'></div>
          <div className='col-lg-8'>
            <div className='pt-12'>
              <p className={!showAllInfo ? '' : 'pb-6 last:pb-0'}>
                <b>Masnad Law Firm (MLF)</b> is a local law firm distinguished from other Afghan
                legal institutions by its close relationship with lawyers from more than 100
                countries in all continent of the globe. Our friendly and professional international
                connections reserves us the highest rank in the country and let us easily and
                promptly achieve our clients’ objectives within every jurisdiction.
              </p>
              <p className={!showAllInfo ? 'hidden' : 'pb-6 last:pb-0'}>
                Through <b>MLF</b> and its international colleagues around the globe, DISTANCE
                merely remains as an 8 alphabet word in an old English dictionaries. No magic is
                needed to solve legal matters with a snap of the fingers.
              </p>
              <div className={!showAllInfo ? 'mt-12 block' : 'hidden'}>
                <Link href='/about' passHref>
                  <a className='flex items-center text-sm hover:bg-black hover:text-white border border-accents_3 w-max px-10 py-2 rounded transition-custom'>
                    <span className='mr-2'>Read More</span>
                    <i className='flaticon-arrow-pointing-to-right'></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default CompanyBackground
