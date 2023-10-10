import Layout from '../components/layout/Layout'
import CTA from '../components/CTA'
import CompanyBackground from '../components/CompanyBackground'
import BorderlessSolution from '../components/BorderlessSolution'

export default function About() {
  return (
    <div className='pt-24'>
      <CompanyBackground showAllInfo={true} />
      <CTA />
      <section className='relative pt-20 lg:pt-28'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-4 col-lg-3'>
              <div className='mb-10'>
                <h1 className='uppercase text-base lg:text-xl text-accents_6 tracking-widest font-semibold font-playfair'>
                  masnad law firm
                </h1>
                <div className='relative line-sep-start'></div>
              </div>
            </div>
            <div className='col-12 col-md-8 col-lg-9'>
              <div className='mb-12'>
                <div>
                  <h2 className='text-4xl mb-4 font-lato'>Why Us?</h2>
                  <div>
                    <p className='pb-4 last:pb-0'>
                      Masnad Law Firm (MLF) is not a simple legal firm, but an experienced family
                      composed of numerous well known and prestigious professionals in every legal
                      domain and practice area. With no discrimination, individuals, private
                      companies, public sector’s entities, and governments can acquire our services
                      in order to easily and effectively obtain their objectives and secure
                      benefits. We ensure prompt results, decisive actions, credible outcomes and
                      winning your dreams.
                    </p>
                    <p className='pb-4 last:pb-0'>
                      Our joint effort is the gateway to a broader and globally recognized
                      businesses and transactions. Through MLF’s legal network you will experience
                      the essence of no boundary and reality of the world as a reachable global
                      village. You deserve the best and we are committed to help you attain the
                      climax of successes. Devotion of our local and international lawyers is merely
                      dedicated to assist you with practical legal skills, professionalism,
                      influential connections, and appropriate expertise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BorderlessSolution />
    </div>
  )
}

About.getLayout = function getLayout(page) {
  return (
    <Layout
      title='About Us - Masnad Law Firm'
      page='about'
      canonical='https://masnad.af/about/'
      pageDescription='Masnad Law Firm (MLF) is not a simple legal firm, but an experienced family composed of numerous well known and prestigious professionals in every legal domain and practice area.'
    >
      {page}
    </Layout>
  )
}
