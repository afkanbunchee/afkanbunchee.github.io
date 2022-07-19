import { graphql } from 'gatsby';
import React from 'react';
import CheckList from '../../components/check-list';
import IndustryLayout from '../../components/industry-layout';
import { pageContext } from '../../contexts/page-context';

const consultings = [
  { h: 'Shareholder agreements' },
  { h: 'Retirement plans' },
  { h: 'Long-term strategic planning' },
  { h: 'Firm valuations' },
  { h: 'Class action accounting administration' },
];

const taxes = [{ h: 'Tax planning and consulting' }, { h: 'Tax assistance' }];

const accountings = [
  { h: 'Financial statement audits, reviews and compilations' },
  { h: 'Account reconciliations' },
  { h: 'Employee benefit plan audits' },
  { h: 'Internal control and analysis' },
  { h: 'Prepare comprehensive financial statements using various methods including accrual, cash or income tax basis' },
];

export default function LawFirmIndustryPage({ data }) {
  return (
    <pageContext.Provider value={{ lang: 'en' }}>
      <IndustryLayout
        title={data.industriesEnJson.name}
        subtitle={data.industriesEnJson.description}
        url={data.industriesEnJson.link}>
        <div className='flex flex-col'>
          <div className='text-black text-opacity-70'>
            AF Kanbunchee deliver the proactive personal attention and team engagement found in small firms, along with
            the breadth of services, capabilities and resources of a large firm. We also serve legal clients with
            international needs.
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
  query LawFirmIndustryEnQuery {
    industriesEnJson(link: { eq: "/en/industries/law-firm" }) {
      name
      description
      link
    }
  }
`;
