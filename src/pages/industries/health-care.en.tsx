import { graphql } from 'gatsby';
import React from 'react';
import CheckList from '../../components/check-list';
import IndustryLayout from '../../components/industry-layout';
import { pageContext } from '../../contexts/page-context';

const consultings = [
  { h: 'Shareholder agreements' },
  { h: 'Equipment purchase and lease analysis' },
  { h: 'Retirement plans' },
  { h: 'Long-term strategic planning' },
  { h: 'Firm valuations' },
];

const taxes = [
  { h: 'Tax planning and consulting' },
  { h: 'New physician tax assistance' },
  { h: 'Updates in tax laws and accounting rules that directly impact your practice' },
  { h: 'Prepare P.N.D.94 and P.N.D.90/91 for assessable income under section 40(1)(2)(8)' },
];

const accountings = [
  { h: 'Financial statement audits, reviews and compilations' },
  { h: 'Prepare comprehensive financial statements using various methods including accrual, cash or income tax basis' },
  { h: 'Employee benefit plan accounting and audits' },
  { h: 'Internal control and analysis' },
  { h: 'Fraud examinations' },
];

export default function HealthCareIndustryPage({ data }) {
  return (
    <pageContext.Provider value={{ lang: 'en' }}>
      <IndustryLayout
        title={data.industriesEnJson.name}
        subtitle={data.industriesEnJson.description}
        url={data.industriesEnJson.link}>
        <div className='flex flex-col'>
          <div className='text-black text-opacity-70'>
            AF Kanbunchee has provided tax, accounting and consulting services to physicians and other health care
            consultants and organizations. Our comprehensive range of services inform and guide our clients at every
            stage of the business lifecycle. We stay on top of financial, compliance and accounting trends to help you
            stay ahead of the curve through active membership in professional organizations.
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
  query HealthCareIndustryEnQuery {
    industriesEnJson(link: { eq: "/en/industries/health-care" }) {
      name
      description
      link
    }
  }
`;
