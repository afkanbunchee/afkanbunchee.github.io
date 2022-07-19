import { graphql } from 'gatsby';
import React from 'react';
import CheckList from '../../components/check-list';
import ServiceLayout from '../../components/service-layout';
import { pageContext } from '../../contexts/page-context';

const fillings = [
  { h: 'Form SSO series preparation and filing services' },
  { h: 'Preparation and filing services for any related retirement plan filings' },
  { h: 'Preparation of required employee communications' },
];

const plans = [
  { h: 'Contribution allocations' },
  { h: 'Year-end account preparation' },
  { h: 'Compliance testing' },
  { h: 'Census data updates' },
  { h: 'Plan and participant communications' },
  { h: 'Complete, timely and accurate record keeping services' },
];

const audits = [
  { h: 'Single and multi-employer plans' },
  { h: 'Health and welfare plans' },
  { h: 'Defined benefit plans including pension plans and retirement plans' },
];

export default function SocialSecurityServicePage({ data }) {
  return (
    <pageContext.Provider value={{ lang: 'en' }}>
      <ServiceLayout
        title={data.servicesEnJson.name}
        subtitle={data.servicesEnJson.description}
        url={data.servicesEnJson.link}>
        <div className='text-black text-opacity-70'>
          Our Employee Benefit Plans professionals are poised to provide your company with consulting on plan creation
          to reporting requirements to audits and administration. Our team has the expertise to answer all of your
          retirement plan and tax-related questions.
        </div>
        <CheckList header='SSO Form and Related Filings' list={fillings} />
        <CheckList header='Retirement Plan' list={plans} />
        <CheckList header='Plan Audits' list={audits} />
      </ServiceLayout>
    </pageContext.Provider>
  );
}

export const query = graphql`
  query SocialSecurityServiceEnQuery {
    servicesEnJson(link: { eq: "/en/services/social-security" }) {
      name
      description
      link
    }
  }
`;
