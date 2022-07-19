import { graphql } from 'gatsby';
import React from 'react';
import CheckList from '../../components/check-list';
import ServiceLayout from '../../components/service-layout';
import { pageContext } from '../../contexts/page-context';

const bookkeepingItems = [
  {
    h: 'Maintain bookkeepings',
    t: 'including Cash, Bank Deposit, Purchases Journal, Sales Journal, General Journal, General Ledger',
  },
  { h: 'Record accounting entries conformance to Thailand Accounting Standards and Accounting Act' },
  { h: 'Record payments, receipts, and journal entries' },
  {
    h: 'Record payroll',
  },
  {
    h: 'Prepare depreciation and amortization schedules',
  },
  { h: 'Record accounting entries with modern accounting software which is certified by Revenue Department' },
  {
    t: 'Reconcile asset and liability accounts',
  },
  {
    t: 'Reconcile bank statements',
  },
];

const financialItems = [
  { h: 'Compiled financial statements that reflect management-represented information' },

  {
    h: 'Prepare comprehensive financial statements using various financial instruments',
    t: 'including Invoice, Receipt, Record of Bank Deposit, Tax Invoice, Cash, etc.',
  },

  {
    h: 'Prepare monthly, quaterly, semi-annual and annual financial statements for meetings and Deparment of Business Development',
  },

  {
    h: 'Prepare monthly financial statements',
    t: 'that reflect your current financial position for efficient budget planning.',
  },
  {
    h: 'Prepare annual financial and supplementary statements for fiscal year',
    t: 'including Assets, Accounts Receivable, Investments, Property, Plant and Equipment (PPE), Intangible Assets, Liabilities, etc.',
  },
];

const taxItems = [
  { h: 'Prepare and file Withholding Tax (P.N.D.1, P.N.D.2, P.N.D.3, P.N.D.53, P.N.D.54)' },
  { h: 'Prepare and file Income Tax Return for Companies or Juristic Partnerships (P.N.D.50, P.N.D.51)' },
  { h: 'Prepare reporting of input/output tax and file Value Added Tax Return (P.P.30, P.P.36)' },
  { h: 'Prepare and file Specific Business Tax Return (P.T.40)' },
];

export default function AccountingServicePage({ data }) {
  return (
    <pageContext.Provider value={{ lang: 'en' }}>
      <ServiceLayout
        title={data.servicesEnJson.name}
        subtitle={data.servicesEnJson.description}
        url={data.servicesEnJson.link}>
        <div className='flex flex-col'>
          <div className='text-black text-opacity-70'>
            AF Kanbunchee offers a variety of services on a number of different platforms that allow you more time to
            focus on your business and gain confidence in your financials. Our professionals collaborate with you to
            identify objectives and alleviate concerns. Services range from traditional onsite bookkeeping services to
            recording data in accounting softwares. We can get you up and running quickly, improve accounting functions
            and help you understand and utilize your financial statements effectively.
          </div>
          <CheckList header='Bookkeeping' list={bookkeepingItems} />
          <CheckList header='Financial Statement Preparation' list={financialItems} />
          <CheckList header='Tax' list={taxItems} />
        </div>
      </ServiceLayout>
    </pageContext.Provider>
  );
}

export const query = graphql`
  query AccountingServiceEnQuery {
    servicesEnJson(link: { eq: "/en/services/accounting" }) {
      name
      description
      link
    }
  }
`;
