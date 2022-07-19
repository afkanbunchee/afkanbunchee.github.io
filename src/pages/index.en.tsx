import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Button from '../components/button';
import Card from '../components/card';
import Grid from '../components/grid';
import Layout from '../components/layout';
import TwoColumn from '../components/two-column';
import { pageContext } from '../contexts/page-context';

const img1 = (
  <StaticImage
    src='../images/whoweare.png'
    alt='Who are we?'
    width={720}
    height={523}
    layout='constrained'
    placeholder='blurred'
    objectFit='contain'
  />
);

const img2 = (
  <StaticImage
    src='../images/problems.png'
    alt='Lack of know-how'
    width={720}
    height={480}
    layout='constrained'
    placeholder='blurred'
    objectFit='contain'
  />
);

const problems = [
  "Want to start a business but don't know how to begin.",
  'Currently accounting is not conformance with laws, there may be penalty.',
  'Lack of accountant.',
  'Currently accounting cannot be used for business planning.',
  'Lack of tax planning, making taxing improper and inappropriate.',
  'Found problems in contacting government departments.',
  'Spending time on accounting, there is no time left to manage business.',
  'Hiring a full-time accountant is so expensive.',
];

export default function IndexPage() {
  return (
    <pageContext.Provider value={{ lang: 'en' }}>
      <Layout
        page='home'
        title='Accounting, Financial Statements, and Tax Planning'
        description='AF Kanbunchee are a team of professional accountants who is responsible for keeping and interpreting financial records. We are responsible for finance-related tasks.'
        url='/en'>
        <TwoColumn img={img1}>
          <h1 className='text-black text-opacity-90 leading-normal'>Who are we?</h1>
          <div className='mt-2 mb-6 text-black text-opacity-70'>
            We are a team of professional accountants who is responsible for keeping and interpreting financial records.
            We, accountants, are responsible for a wide range of finance-related tasks. We support all business areas,
            including transport, construction, retail, gold shop, pharmaceutical shop, or either individual clients or
            larger businesses and organizations employing us.
          </div>
          <Button to='/en/about-us' text='Find Out More' wrapped />
        </TwoColumn>
        <Grid header='Promotion' cols={3} link='/en/services' linkName='All Our Services'>
          <Card image='../images/registration.png' header='Business Registration'>
            12,000 THB
            <br />
            First Month Free
            <br />
            Discount 20% on Second Month
          </Card>
          <Card image='../images/accounting.png' header='Accounting'>
            2,500 THB/Month
            <br />
            First Month Free
            <br />
            Discount 10% on Second Month
          </Card>
          <Card image='../images/audit.png' header='Auditing'>
            5,000 THB
            <br />
            No Service for Empty Budget
          </Card>
        </Grid>
        <TwoColumn img={img2}>
          <h1 className='text-black text-opacity-90 leading-normal mb-4'>It's not a problem anymore</h1>
          <div className='mt-2 mb-6 text-black text-opacity-70 flex flex-col'>
            {problems.map((p) => (
              <div className='border-l-green-600 border-l-4 shadow-md p-4 w-full mb-4'>{p}</div>
            ))}
          </div>
        </TwoColumn>
      </Layout>
    </pageContext.Provider>
  );
}
