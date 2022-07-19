import { graphql } from 'gatsby';
import React from 'react';
import IndustryCard from '../components/industry-card';
import Grid from '../components/grid';
import Layout from '../components/layout';
import { pageContext } from '../contexts/page-context';

export default function IndustriesPage({ data }) {
  return (
    <pageContext.Provider value={{ lang: 'th' }}>
      <Layout
        page='industries'
        title='กลุ่มธุรกิจลูกค้า'
        description={`เรารองรับธุรกิจลูกค้าที่หลากหลาย เช่น ${data.allIndustriesThJson.nodes
          .map((n) => n.name)
          .join(', ')}`}
        url='/industries'>
        <Grid header='กลุ่มธุรกิจลูกค้า' cols={3}>
          {data.allIndustriesThJson.nodes.map((n, index) => (
            <IndustryCard header={n.name} link={n.link} index={index + 1}>
              {n.description}
            </IndustryCard>
          ))}
        </Grid>
      </Layout>
    </pageContext.Provider>
  );
}

export const query = graphql`
  query IndustriesThQuery {
    allIndustriesThJson {
      nodes {
        name
        link
        description
      }
    }
  }
`;
