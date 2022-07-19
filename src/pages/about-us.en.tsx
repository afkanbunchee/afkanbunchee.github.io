import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Button from '../components/button';
import Layout from '../components/layout';
import { pageContext } from '../contexts/page-context';

const img1 = (
  <StaticImage
    src='../images/cer-bangphli.jpg'
    alt='AF Bunchee Accounting License'
    width={350}
    height={300}
    layout='constrained'
    placeholder='blurred'
    objectFit='contain'
  />
);

const img2 = (
  <StaticImage
    src='../images/cer-latkrabang.jpg'
    alt='M2 All Accounting License'
    width={350}
    height={300}
    layout='constrained'
    placeholder='blurred'
    objectFit='contain'
  />
);

const img3 = (
  <StaticImage
    src='../images/cer-saimai.jpg'
    alt='Banana Leaf Consultant Accounting License'
    width={350}
    height={300}
    layout='constrained'
    placeholder='blurred'
    objectFit='contain'
  />
);

const scopes = [
  {
    h: 'Accounting system implementation:',
    t: 'Designing and planning accounting system, evaluating financial operations to recommend best practices, identify issues and strategize solutions, and help organizations run efficiently',
  },
  {
    h: 'Bookkeeping:',
    t: 'Recording and categorizing expenses, preparing and maintaining important financial reports',
  },
  {
    h: 'Taking care of tax returns',
    t: 'and ensuring that taxes are paid properly in time',
  },
  {
    h: 'Examining the accuracy',
    t: 'of financial documents and where they stand with laws and regulations',
  },
  {
    h: 'Business consulting:',
    t: 'Offering advice to organizations on how to reduce cost, improve their revenue, and boost profit',
  },
  {
    h: 'Auditing:',
    t: 'Finding and addressing any discrepancies in accounting',
  },
  {
    t: 'Keeping account books and systems up to date',
  },
  {
    t: 'Working with external auditors',
  },
  {
    t: 'Recording payments and disbursements',
  },
];

export default function AboutUsPage() {
  return (
    <pageContext.Provider value={{ lang: 'en' }}>
      <Layout
        page='about-us'
        title='About Us'
        description='We are a team of professional accountants who is responsible for keeping and interpreting financial records.'
        url='/en/about-us'>
        <div className='w-full py-8 px-6'>
          <div className='mx-auto max-w-screen-xl flex flex-col'>
            <div className='flex flex-col md:flex-row'>
              <div className='flex-1'>
                <h1 className='text-black text-opacity-90'>About Us</h1>
                <div className='mt-8 text-black text-opacity-70'>
                  We are a team of professional accountants who is responsible for keeping and interpreting financial
                  records. We, accountants, are responsible for a wide range of finance-related tasks. We support all
                  business areas, including transport, construction, retail, gold shop, pharmaceutical shop, or either
                  individual clients or larger businesses and organizations employing us.
                </div>
                <Button to='/en/contact-us' text='Contact Us' className='my-8' />
                <h1 className='text-black text-opacity-90 my-8'>What we do?</h1>
                <ul>
                  {scopes.map((s) => (
                    <li className='border-l-green-600 border-l-4 shadow-md p-4 w-full mb-4'>
                      {s.h && <span className='text-green-600'>{s.h}</span>}
                      {s.t && <span className='text-black text-opacity-70'>{s.h ? ` ${s.t}` : s.t}</span>}
                    </li>
                  ))}
                </ul>
                <Button to='/en/services' text='Our Services' className='my-8' />
              </div>
              <div className='flex flex-col md:ml-8 my-2 md:my-0'>
                <div className='border-gray-100 border-4 mb-4 text-center'>{img1}</div>
                <div className='border-gray-100 border-4 mb-4 text-center'>{img2}</div>
                <div className='border-gray-100 border-4 mb-4 text-center'>{img3}</div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </pageContext.Provider>
  );
}
