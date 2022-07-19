import React from 'react';
import Card from '../components/card';
import Grid from '../components/grid';
import Layout from '../components/layout';
import PriceCard from '../components/price-card';
import { pageContext } from '../contexts/page-context';

export default function PricingPage() {
  return (
    <pageContext.Provider value={{ lang: 'en' }}>
      <Layout
        page='services'
        title='Pricing'
        description='Pricing of services including Business Registration, Accounting, Auditing, DBD Modification, Business Retirement, Liquidation, Social Security Registration'
        url='/en/pricing'>
        <Grid header='Promotion' cols={3}>
          <Card image='../images/registration.png' header='Business Registration'>
            12,000 THB
            <br />
            First Month Free
            <br />
            Discount 20% on Second Month
          </Card>
          <Card image='../images/accounting.png' header='Accounting'>
            2,500 THB/Month
            <br />
            First Month Free
            <br />
            Discount 10% on Second Month
          </Card>
          <Card image='../images/audit.png' header='Auditing'>
            5,000 THB
            <br />
            No Service for Empty Budget
          </Card>
        </Grid>
        <Grid header='Pricing' cols={3}>
          <PriceCard index={1} header='Business Registration' price='14,000'>
            Memorandum and Business Registration
            <br />
            <span className='text-red-700'>Including Fees</span>
          </PriceCard>
          <PriceCard index={2} header='Partnerships Registration' price='6,500'>
            Reserve a Juristic Name
            <br />
            Prepare Registration Forms
            <br />
            Register a Partnership
            <br />
            <span className='text-red-700'>Including Fees</span>
          </PriceCard>
          <PriceCard index={3} header='Department of Business Development (DBD) Modification' price='3,500'>
            Modification of Registered Transaction, Board of Director, Autorized Director, Objective, Business
            Shareholder List, Equity
            <br />
            <span className='text-red-700'>Excluding Fees</span>
          </PriceCard>
          <PriceCard
            index={4}
            header='Register a limited company, limited partnership, group of person, and partnerships'
            price='3,000'></PriceCard>
          <PriceCard
            index={5}
            header='Request Taxpayer Identification No. (TIN) and Value Added Tax (VAT)'
            price='3,000'></PriceCard>
          <PriceCard index={6} header='Request Social Security Number' price='3,000'></PriceCard>
          <PriceCard index={7} header='Revenue Department (RD) Modification' price='3,500'>
            Modification of Business Name, Address, Branch, Type of Business, etc.
          </PriceCard>
          <PriceCard index={8} header='Business Retirement and Liquidation' price='15,000'>
            <span className='text-red-700'>Including Fees</span>
          </PriceCard>
          <PriceCard index={9} header='Request a Juristic Identification No.' price='3,000'>
            <span className='text-red-700'>Including Fees</span>
          </PriceCard>
        </Grid>
      </Layout>
    </pageContext.Provider>
  );
}
