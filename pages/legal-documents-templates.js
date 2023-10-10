import { getAllLegalDocTemplates } from '../lib/api'
import Layout from '../components/layout/Layout'

export default function LegalDocuments({ legalDocuments }) {
  return (
    <div className='pt-20 pb-12 block w-full overflow-x-auto'>
      <div className='container'>
        <div className='row justify-center'>
          <div className='col-12'>
            <div className='text-center mb-16'>
              <h1 className='text-2xl md:text-3xl lg:text-5xl font-playfair leading-snug mb-2'>
                Legal Documents (Templates)
              </h1>
              <div className='relative line-sep-center'></div>
              <p className='text-base md:text-lg mb-4'>Templates of mostly-used legal documents</p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
              <table className='items-center bg-transparent w-full table-auto'>
                <thead className='bg-gray-50'>
                  <tr></tr>
                </thead>
                <tbody>
                  {legalDocuments.map((item, index) => (
                    <tr key={index} className='border-b border-accents_2'>
                      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4 '>
                        {item.acf.doc_file.title}
                      </td>
                      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 p-4 text-right'>
                        <a
                          href={item.acf.doc_file.url}
                          className='bg-tertiary text-white p-2 cursor-pointer'
                          target='_blank'
                          download
                        >
                          <i className='fa fa-download'></i>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

LegalDocuments.getLayout = function getLayout(page) {
  return (
    <Layout
      title='Legal Documents (Templates) - Masnad Law Firm'
      page='legal-documents'
      canonical='https://masnad.af/legal-documents-templates'
      pageDescription='Writing and preparing legal documents from scratch may sometimes be challenging and time-consuming. These templates can help you save time and have the required legal document easily prepared.'
    >
      {page}
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const legalDocuments = await getAllLegalDocTemplates()
  return {
    props: {
      legalDocuments,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    //revalidate: 10, // In seconds
  }
}
