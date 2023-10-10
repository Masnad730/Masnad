const Pagination = ({ itemsPerPage, totalItems, currentPage, setCurrentPage, paginate }) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i)
  }

  const paginateToBack = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
    else if (currentPage <= 1) setCurrentPage(currentPage)
  }
  const paginateToNext = () => {
    if (currentPage < pageNumbers.length) setCurrentPage(currentPage + 1)
    else if (currentPage >= pageNumbers.length) setCurrentPage(currentPage)
  }

  return (
    <section
      className={`min-w-full justify-end items-center border-b border-accents_4 ${
        totalItems === itemsPerPage ? 'hidden' : 'flex'
      }`}
    >
      <div className='flex items-center justify-center mb-4'>
        <div className='flex flex-wrap items-center text-gray-700 pb-2'>
          <div className='mb-1 last:mb-0 md:mb-0'>
            <button
              onClick={paginateToBack}
              disabled={currentPage <= 1 ? true : false}
              className='h-10 flex items-center justify-start p-0 px-2 mr-1 cursor-pointer rounded-none border border-accents_4 text-black disabled:text-accents_6'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='100%'
                height='100%'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
                className='w-4 h-4'
              >
                <polyline points='15 18 9 12 15 6'></polyline>
              </svg>
              <span className='text-sm'>Previous</span>
            </button>
          </div>
          <div className='flex items-center font-medium mb-1 last:mb-0 md:mb-0'>
            {pageNumbers.map((pageNumber) => (
              <div
                key={pageNumber}
                className={`flex justify-center items-center cursor-pointer transition duration-150 ease-in mr-1 last:mr-0 ${
                  pageNumber === currentPage ? 'bg-tertiary text-accents_0' : 'hover:bg-accents_4'
                }`}
              >
                <button
                  onClick={() => paginate(pageNumber)}
                  className='h-10 p-0 px-3 focus:outline-none rounded-none border border-accents_4'
                >
                  {pageNumber}
                </button>
              </div>
            ))}
          </div>
          <div className='mb-1 last:mb-0 md:mb-0'>
            <button
              onClick={paginateToNext}
              disabled={currentPage >= pageNumbers.length ? true : false}
              className='h-10 flex justify-end items-center p-0 px-2 ml-1 rounded-none cursor-pointer border border-accents_4 text-black disabled:text-accents_6'
            >
              <span className='text-sm'>Next</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='100%'
                height='100%'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
                className='w-4 h-4'
              >
                <polyline points='9 18 15 12 9 6'></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Pagination
