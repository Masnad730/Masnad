import { Carousel } from 'react-responsive-carousel'

const HeroSlider = () => {
  return (
    <Carousel
      autoPlay={true}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
      infiniteLoop={true}
      interval={4000}
      showIndicators={true}
      animationHandler='fade'
      swipeable={false}
      dynamicHeight={false}
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
          return (
            <li
              className='w-2 h-2 inline-block my-0 mx-2 bg-primary'
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            />
          )
        }
        return (
          <li
            className='w-2 h-2 inline-block my-0 mx-2 bg-white'
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role='button'
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
          />
        )
      }}
    >
      <div className='relative h-[90vh]'>
        <img src='/images/slider-1.jpg' alt='Slider 1' className='w-full h-full object-cover' />
        <div className='absolute top-0 left-0 right-0 bottom-0 z-10 w-full h-full opacity-100 transition-custom bg-black-alpha-0.6'>
          <div className='absolute top-1/2 left-1/2 z-[9999] w-11/12 md:w-2/3 lg:w-auto transform -translate-x-1/2 -translate-y-1/2'>
            <h1 className='text-accents_0 text-center uppercase'>
              <div className='mb-6 last:mb-0 text-2xl md:text-3xl lg:text-4xl font-rubik font-light tracking-wide'>
                welcome to
              </div>
              <div className='mb-6 last:mb-0 text-[1.645rem] md:text-4xl xl:text-6xl font-bold font-poppins tracking-widest'>
                masnad law firm
              </div>
              <div className='mb-6 last:mb-0 text-2xl md:text-3xl lg:text-4xl font-rubik font-light tracking-wide normal-case'>
                A Full-Service Law Firm
              </div>
            </h1>
          </div>
        </div>
      </div>
      <div className='relative h-[90vh]'>
        <img src='/images/slider-2.jpg' alt='Slider 2' className='w-full h-full object-cover' />
        <div className='absolute top-0 left-0 right-0 bottom-0 z-10 w-full h-full opacity-100 transition-custom bg-black-alpha-0.6'>
          <div className='absolute top-1/2 left-1/2 z-[9999] w-11/12 md:w-2/3 lg:w-auto transform -translate-x-1/2 -translate-y-1/2'>
            <div className='pt-20'>
              <div className='mb-10'>
                <h2 className='text-white text-xl md:text-2xl lg:text-3xl font-poppins tracking-wide leading-normal'>
                  We are recognized as 'Annual Award Winner' by Global Law Experts and have received
                  'Certificate of Excellence' from Advisory Excellence.
                </h2>
              </div>
              <div className='flex items-center justify-center'>
                <img
                  src='/images/global-law-experts-winner.jpg'
                  alt=''
                  width='150'
                  height='127'
                  className='w-[150px!important] h-[127px!important] mr-8 last:mr-0'
                />
                <img
                  src='/images/advisory-execellence-award.jpeg'
                  alt=''
                  width='150'
                  height='127'
                  className='w-[150px!important] h-[127px!important] mr-8 last:mr-0'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='relative h-[90vh]'>
        <img src='/images/slider-3.jpg' alt='Slider 3' className='w-full h-full object-cover' />
        <div className='absolute top-0 left-0 right-0 bottom-0 z-10 w-full h-full opacity-100 transition-custom bg-black-alpha-0.6'>
          <div className='absolute top-1/2 left-1/2 z-[9999] w-11/12 md:w-2/3 lg:w-auto transform -translate-x-1/2 -translate-y-1/2'>
            <div className='pt-20'>
              <div className='mb-10'>
                <h2 className='text-white text-xl md:text-2xl lg:text-3xl font-poppins tracking-wide leading-normal'>
                  We are experienced family composed of numerous well known and prestigious
                  professionals in every legal domain and practice area.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  )
}

export default HeroSlider
