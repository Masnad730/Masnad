import Link from 'next/link'

const PracticesSidebarNav = ({ selectedPractice, allPractices }) => {
  return (
    <div className='bg-grey-light-1 border-r border-accents_4 sidebar-nav'>
      <ul className='h-[774px] overflow-y-scroll border-b'>
        {allPractices.map((practice, index) => (
          <li
            className={` ${
              practice.acf.area === selectedPractice.acf.area
                ? 'bg-grey-light-2'
                : 'hover:bg-grey-light-2'
            }`}
          >
            <Link href={`/practices/${practice.slug}`} passHref>
              <a className='flex items-center pl-10 pr-10 pb-5 pt-5'>
                <div className='flex items-center justify-center mr-3'>
                  <img
                    src={`/icons/svg-black/${practice.slug}.svg`}
                    alt=''
                    width='35'
                    height='32'
                  />
                </div>
                <h3 className='text-base font-normal'>{practice.acf.area}</h3>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default PracticesSidebarNav
