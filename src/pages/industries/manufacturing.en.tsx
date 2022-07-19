import { graphql } from 'gatsby';
import React from 'react';
import CheckList from '../../components/check-list';
import IndustryLayout from '../../components/industry-layout';
import { pageContext } from '../../contexts/page-context';

const consultings = [
  { h: 'Operational guidance' },
  { h: 'Development of key performance indicators (KPI)' },
  { h: 'Supply chain and inventory management' },
  { h: 'Business valuations' },
  { h: 'Pricing and process flow improvement studies' },
  { h: 'Business succession planning' },
  { h: 'Employee bonus and incentive plans' },
  { h: 'Regulatory guidance' },
  { h: 'Risk management' },
];

const taxes = [
  { h: 'Tax planning and consulting' },
  { h: 'State and local tax' },
  { h: 'Cost segregation studies' },
  { h: 'Tax return preparation' },
  { h: 'Updates in tax and accounting rules that directly impact your business' },
];

const accountings = [
  { h: 'Audits, reviews and compilations' },
  { h: 'Financial statement forecasts and projections' },
  { h: 'Employee benefit plan accounting and audits' },
  { h: 'Internal control evaluation' },
  { h: 'Regulatory compliance' },
  { h: 'Forensic accounting and fraud examinations' },
];

export default function ManufacturingIndustryPage({ data }) {
  return (
    <pageContext.Provider value={{ lang: 'en' }}>
      <IndustryLayout
        title={data.industriesEnJson.name}
        subtitle={data.industriesEnJson.description}
        url={data.industriesEnJson.link}>
        <div className='flex flex-col'>
          <div className='text-black text-opacity-70'>
            Engagements often begin with traditional tax compliance or accounting services, yet they expand into broader
            business consulting support. From entrepreneurs who need help obtaining start-up financing to long-term
            owners seeking to sell, we supply insights, ideas and know-how in a range of areas. Whether it's advising on
            tax credits for employee training and hiring veterans or performing product line profitability analysis, we
            connect leaders to solutions that minimize taxes, maximize profits and make the most of business
            opportunities.
          </div>
          <CheckList header='Consulting' list={consultings} />
          <CheckList header='Tax' list={taxes} />
          <CheckList header='Accounting' list={accountings} />
        </div>
      </IndustryLayout>
    </pageContext.Provider>
  );
}

export const query = graphql`
  query ManufacturingIndustryEnQuery {
    industriesEnJson(link: { eq: "/en/industries/manufacturing" }) {
      name
      description
      link
    }
  }
`;
