import { graphql } from 'gatsby';
import React from 'react';
import CheckList from '../../components/check-list';
import ServiceLayout from '../../components/service-layout';
import { pageContext } from '../../contexts/page-context';

const bizs = [
  {
    h: 'Business Valuation Services:',
    t: 'Prepare formal business valuation reports for income, taxes, divorce and other purposes',
  },
  {
    h: 'Value Enhancement Strategies:',
    t: 'Deliver ideas for improving the profitability and cash flow of your business while mitigating risk',
  },
  {
    h: 'Executive Compensation and Bonus Plans:',
    t: 'Determine which options make the most sense for you, your business and your employees',
  },
  {
    h: 'Business Plans and Financial Forecasts and Projections:',
    t: 'A good business plan explains expected growth and forecasts future financial results. We help you articulate your plan, apply it to financial projections, and implement and update it over time.',
  },
  {
    h: 'Business Structure and Tax Planning Services:',
    t: 'We assist with entity structure, transaction consulting, family wealth transfers and more. We help you understand your options and the tax implications, and then help you make and implement smart choices with confidence.',
  },
  {
    h: 'Benchmarks and Industry Comparisons:',
    t: 'See how you measure up to your past results and industry high performers. We help you pinpoint areas for improvement to enhance strengths and mitigate weaknesses.',
  },
  {
    h: 'Comprehensive Exit Planning:',
    t: 'Choosing the best exit strategy involves a careful assessment of your personal, family and business goals and circumstances',
  },
  {
    h: 'Merger and Acquisition Representation',
    t: 'Partner with owners and their advisors to manage the total process, from clarifying goals through closing the transaction',
  },
];

const individuals = [
  { h: 'Land and building tax planning and compliance' },
  { h: 'Retirement planning and analysis' },
  { h: 'Cash flow planning and budgeting' },
  { h: 'Insurance and risk management' },
  { h: 'Financial forecasting and investment analysis' },
  { h: 'Income tax planning and compliance' },
  { h: 'Education funding strategies' },
  { h: 'Business exit planning strategies' },
  { h: 'Comprehensive personal financial planning' },
  { h: 'Retirement planning' },
  { h: 'Social security planning' },
  { h: 'Life insurance planning and policy review' },
  { h: 'Disability insurance planning and policy review' },
  { h: 'Family wealth planning' },
  { h: 'Charitable giving strategies' },
];

export default function ConsultingServicePage({ data }) {
  return (
    <pageContext.Provider value={{ lang: 'en' }}>
      <ServiceLayout
        title={data.servicesEnJson.name}
        subtitle={data.servicesEnJson.description}
        url={data.servicesEnJson.link}>
        <div className='text-black text-opacity-70'>
          Whether it's a new home, college, a business sale, retirement, estate planning or any number of events that
          require financial guidance, AF Bunchee is with you every step of the way. We help individuals, families and
          business owners set realistic goals and develop strategies to make them happen.
        </div>
        <CheckList header='Business' list={bizs} />
        <CheckList header='Individual' list={individuals} />
      </ServiceLayout>
    </pageContext.Provider>
  );
}

export const query = graphql`
  query ConsultingServiceEnQuery {
    servicesEnJson(link: { eq: "/en/services/consulting" }) {
      name
      description
      link
    }
  }
`;
