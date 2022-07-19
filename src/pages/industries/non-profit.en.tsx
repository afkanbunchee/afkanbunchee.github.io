import { graphql } from 'gatsby';
import React from 'react';
import CheckList from '../../components/check-list';
import IndustryLayout from '../../components/industry-layout';
import { pageContext } from '../../contexts/page-context';

const consultings = [
  { h: 'Strategic planning' },
  { h: 'Tax consulting and advisory services' },
  { h: 'Grant analysis' },
  { h: 'Employee benefit plans' },
  { h: 'Benchmarking studies' },
  { h: 'Financial, capital, and resource management' },
  { h: 'Fraud risk assessment, fraud investigation and forensic accounting' },
  { h: 'Internal control reviews and consultations' },
  { h: 'Risk management and advisory services' },
];

const taxes = [{ h: 'Securing and maintaining tax-exempt status' }, { h: 'Unrelated business income tax issues' }];

const accountings = [
  { h: 'Financial statement audits, reviews and compilations' },
  { h: 'Single audits' },
  { h: 'Grant audits' },
  { h: 'Performance audits' },
  { h: 'Audit schedule preparation' },
  { h: 'Bank reconciliations' },
  { h: 'Bookkeeping and processing receipts and disbursements' },
  { h: 'Internal audit capabilities' },
];

export default function NonProfitIndustryPage({ data }) {
  return (
    <pageContext.Provider value={{ lang: 'en' }}>
      <IndustryLayout
        title={data.industriesEnJson.name}
        subtitle={data.industriesEnJson.description}
        url={data.industriesEnJson.link}>
        <div className='flex flex-col'>
          <div className='text-black text-opacity-70'>
            In addition to limited funding and stretched resources, we know that non-profit organizations face
            challenges that range from board accountability to complex tax and audit reporting requirements. AF
            Kanbunchee has provided solutions they need to fulfill their commitments and serve the needs of the
            communities they support.
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
  query NonProfitIndustryEnQuery {
    industriesEnJson(link: { eq: "/en/industries/non-profit" }) {
      name
      description
      link
    }
  }
`;
