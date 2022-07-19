import { graphql } from 'gatsby';
import React from 'react';
import CheckList from '../../components/check-list';
import ServiceLayout from '../../components/service-layout';
import { pageContext } from '../../contexts/page-context';

const businessItems = [
  { h: 'Preparation of corporate, partnership and related income tax return filings' },
  { h: 'State and local tax expertise' },
  { h: 'Tax structuring and transaction assistance' },
  { h: 'Tax planning and research' },
  { h: 'International tax assistance' },
  { h: 'Representation before the Revenue Department, state and local taxing authorities' },
  { h: 'Executive compensation and bonus plans' },
  { h: 'Merger and acquisition representation' },
  { h: 'Research and development credits' },
  { h: 'Cost segregation studies' },
  { h: 'Local tax credits' },
  { h: 'Periodic tax law updates that directly impact your business' },
];

const individualItems = [
  { h: 'Preparation of individual income tax returns and related filings' },
  { h: 'State and local tax expertise' },
  { h: 'Tax planning and research' },
  { h: 'International tax assistance' },
  { h: 'Representation before the Revenue Department, state and local taxing authorities' },
  { h: 'Stock option planning' },
  { h: 'Planning for real estate and real estate professionals' },
  { h: 'Analysis of conversion of qualified retirement funds' },
  { h: 'Charitable giving strategies' },
  { h: 'Planning for closely-held business interests' },
  { h: 'Periodic tax law updates that directly impact your situation ' },
];

const investmentItems = [
  { h: 'Preparation of investment income tax returns and related filings' },
  { h: 'State and local tax expertise' },
  { h: 'Tax planning and research' },
  { h: 'International tax assistance' },
  { h: 'Representation before the Revenue Department, state and local taxing authorities' },
  { h: 'Preparation and planning for real estate' },
  { h: 'Funding analysis' },
  { h: 'State planning' },
  { h: 'Joint venture planning and preparation' },
  { h: 'Preparation and planning for Infrastructure Fund (IFF)' },
];

export default function TaxPlanningServicePage({ data }) {
  return (
    <pageContext.Provider value={{ lang: 'en' }}>
      <ServiceLayout
        title={data.servicesEnJson.name}
        subtitle={data.servicesEnJson.description}
        url={data.servicesEnJson.link}>
        <div className='flex flex-col'>
          <div className='text-black text-opacity-70'>
            Beyond combining tax planning and preparation services, what sets us apart from other providers is a
            resourceful team approach. Whether working on individual, corporate, partnership, estate, trust or other
            plans and returns, our professionals help you make the most of your money through knowledgeable planning and
            expert advice.
          </div>
          <CheckList header='Busniess' list={businessItems} />
          <CheckList header='Individual' list={individualItems} />
          <CheckList header='Investment' list={investmentItems} />
        </div>
      </ServiceLayout>
    </pageContext.Provider>
  );
}

export const query = graphql`
  query TaxPlanningServiceEnQuery {
    servicesEnJson(link: { eq: "/en/services/tax-planning" }) {
      name
      description
      link
    }
  }
`;
