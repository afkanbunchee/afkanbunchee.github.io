import { graphql } from 'gatsby';
import React from 'react';
import CheckList from '../../components/check-list';
import IndustryLayout from '../../components/industry-layout';
import { pageContext } from '../../contexts/page-context';

const consultings = [
  { h: 'Entity structuring and investor analysis' },
  { h: 'Developing informative periodic financial analysis templates' },
  { h: 'Coordinating payroll and tip reporting practices' },
  { h: 'Point-of-sale (POS) system selection' },
  { h: 'Gift card analysis' },
  { h: 'Menu engineering' },
  { h: 'Inventory management' },
];

const taxes = [
  { h: 'Tax planning and consulting' },
  { h: 'Local tax expertise' },
  { h: 'Proactive tax saving strategies' },
  { h: 'Restaurant tax credits' },
  { h: 'Updates in tax laws and accounting rules that directly impact your business' },
  { h: 'Cost segregation studies' },
];

const accountings = [
  { h: 'Financial statement audits, reviews and compilations' },
  { h: 'Internal control and fraud examinations' },
  { h: 'Evaluate receivables and cash receipts' },
  { h: 'Evaluate franchisee revenues' },
  { h: 'Employee benefit plan audits' },
];

export default function RestaurantIndustryPage({ data }) {
  return (
    <pageContext.Provider value={{ lang: 'en' }}>
      <IndustryLayout
        title={data.industriesEnJson.name}
        subtitle={data.industriesEnJson.description}
        url={data.industriesEnJson.link}>
        <div className='flex flex-col'>
          <div className='text-black text-opacity-70'>
            AF Kanbunchee help new restaurants get started on the right track by setting up internal controls, designing
            back-office systems, selecting general ledger software and assisting in many other areas. With our
            integrated tax, consulting and accounting expertise, we help you establish and continue to serve up healthy
            results.
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
  query RestaurantIndustryEnQuery {
    industriesEnJson(link: { eq: "/en/industries/restaurant" }) {
      name
      description
      link
    }
  }
`;
