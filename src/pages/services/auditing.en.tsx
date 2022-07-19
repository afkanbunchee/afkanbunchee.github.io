import { graphql } from 'gatsby';
import React from 'react';
import CheckList from '../../components/check-list';
import ServiceLayout from '../../components/service-layout';
import { pageContext } from '../../contexts/page-context';

const scopes = [
  { h: 'Audits by certified public accountants (CPA)', t: 'for large companies and partnerships' },
  { h: 'Audits by tax auditors (TA)', t: 'for small and medium sized companies' },
  { h: 'Review and audit accounting entries - financial statements', t: 'by certified public accountants' },
  {
    h: 'Propose remarks to executives',
    t: 'to identify major deficiencies in internal control in the accounting which were found during an audit',
  },
  {
    h: 'File fiscal finanial and supplementary statements to Department of Business Development',
    t: "including Submission Form of Financial Statements (S.BCh.3), Copy of List of Shareholder's Names (BOJ.5)",
  },
];

export default function AuditingServicePage({ data }) {
  return (
    <pageContext.Provider value={{ lang: 'en' }}>
      <ServiceLayout
        title={data.servicesEnJson.name}
        subtitle={data.servicesEnJson.description}
        url={data.servicesEnJson.link}>
        <div className='flex flex-col'>
          <div className='text-black text-opacity-70'>
            AF Kanbunchee takes pride in working with clients to provide a range of audit services that go beyond just
            the financial statements to discover what's driving financial performance. We help identify potential areas
            of improvement, evaluate options and deliver insightful solutions to owners and managers of companies of all
            sizes.
          </div>
          <CheckList header='Year-End Closing with Auditing' list={scopes} />
        </div>
      </ServiceLayout>
    </pageContext.Provider>
  );
}

export const query = graphql`
  query AuditingServiceEnQuery {
    servicesEnJson(link: { eq: "/en/services/auditing" }) {
      name
      description
      link
    }
  }
`;
