import { graphql } from 'gatsby';
import React from 'react';
import CheckList from '../../components/check-list';
import ServiceLayout from '../../components/service-layout';
import { pageContext } from '../../contexts/page-context';

const services = [
  {
    h: 'Register a limited company, limited partnership, group of person, and partnerships',
  },
  {
    h: 'File Modification of Registered Transaction',
    t: 'including board of directors modification, location modification, capital increase/decrease, etc.',
  },
  {
    h: 'File Form of Requesting the Liquidation and Liquidation Report',
    t: 'for either partnership or company',
  },
  {
    h: 'Request Taxpayer Identification No. (TIN)',
    t: 'of group of person and juristic person',
  },
  {
    h: 'Request Value Added Tax (VAT) and Specific Business Tax',
    t: 'and request User ID, Password to submit online forms',
  },
  {
    h: 'Notify tax changes to Revenue Department',
    t: 'including additional filing, address of representative modification, business name modification, business operation modification, etc.',
  },
  {
    h: 'Request Social Security Number',
    t: 'including employer, employee, and request username and password for doing operations with Social Security Office',
  },
  {
    h: 'Register a trademark',
  },
];

export default function BusinessRegistrationServicePage({ data }) {
  return (
    <pageContext.Provider value={{ lang: 'en' }}>
      <ServiceLayout
        title={data.servicesEnJson.name}
        subtitle={data.servicesEnJson.description}
        url={data.servicesEnJson.link}>
        <div className='flex flex-col'>
          <div className='text-black text-opacity-70'>
            AF Kanbunchee do understand how worthy your time is, so we take pride in serving you to register your
            juristic identification with professionals and knowledge in operations and laws. We also welcome serving
            your juristic registrations, saving your money and time with a qualified team.
          </div>
          <CheckList header='Services' list={services} />
        </div>
      </ServiceLayout>
    </pageContext.Provider>
  );
}

export const query = graphql`
  query BusinessRegistrationServiceEnQuery {
    servicesEnJson(link: { eq: "/en/services/business-registration" }) {
      name
      description
      link
    }
  }
`;
