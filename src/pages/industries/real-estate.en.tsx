import { graphql } from 'gatsby';
import React from 'react';
import CheckList from '../../components/check-list';
import IndustryLayout from '../../components/industry-layout';
import { pageContext } from '../../contexts/page-context';

const consultings = [
  { h: 'Evaluation and structuring of real estate syndications' },
  { h: 'Analysis of financing alternatives' },
];

const taxes = [
  { h: 'Tax planning for deduction' },
  { h: 'Real estate acquisition' },
  { h: 'Estate and financial planning for real estate owners, investors, developers and other professionals' },
  { h: 'Distressed real estate consulting, including foreclosures, workouts and other restructuring alternatives' },
  { h: 'Lease analysis for both landlords and tenants' },
];

const accountings = [
  { h: 'Financial statement audits, reviews and compilations' },
  { h: 'Percentage rent audits' },
  { h: 'Mortgage broker audits' },
  { h: 'Fraud investigations and forensic accounting' },
  { h: 'Turnover audits' },
];

export default function RealEstateIndustryPage({ data }) {
  return (
    <pageContext.Provider value={{ lang: 'en' }}>
      <IndustryLayout
        title={data.industriesEnJson.name}
        subtitle={data.industriesEnJson.description}
        url={data.industriesEnJson.link}>
        <div className='flex flex-col'>
          <div className='text-black text-opacity-70'>
            Whether you are struggling to rebound from a deal that is not performing up to your expectations, looking to
            maximize the return on your investment, or hoping to access new sources of funding for your new project, our
            professionals have the industry knowledge, depth of understanding, experience, relationships and resources
            to help you find creative solutions.
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
  query RealEstateIndustryEnQuery {
    industriesEnJson(link: { eq: "/en/industries/real-estate" }) {
      name
      description
      link
    }
  }
`;
