const CTA = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/images/cta-bg.jpg")`,
        backgroundSize: 'cover',
        backgroundBlendMode: 'normal',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center center',
      }}
    >
      <div>
        <div className='container py-16'>
          <div className='row justify-center'>
            <div className='col-md-8 text-center'>
              <div className='bg-white-layer shadow-white px-10 py-11 rounded-sm font-lato'>
                <div>
                  <h4 className='text-accents_6 text-sm md:text-base mb-4'>
                    Talk to us! We promise we can help you!
                  </h4>
                  <h3 className='mb-8 text-lg lg:text-4xl font-bold leading-snug'>
                    If you have any questions of legal matter, feel free to contact us!
                  </h3>
                  <div className='flex flex-col md:flex-row items-center justify-center mb-3 text-lg font-lato'>
                    <div className='flex items-center justify-center pl-0 md:pl-3'>
                      <div className='text-primary mr-2'>
                        <i className='flaticon-phone-call'></i>
                      </div>
                      <span>+93 730 830 830</span>
                    </div>
                    .
                    <div className='flex items-center justify-center pl-0 md:pl-3'>
                      <div className='text-primary mr-2'>
                        <i className='flaticon-mail'></i>
                      </div>
                      <span>info@masnad.af</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CTA
