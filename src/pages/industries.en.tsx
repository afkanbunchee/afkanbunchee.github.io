import { graphql } from 'gatsby';
import React from 'react';
import IndustryCard from '../components/industry-card';
import Grid from '../components/grid';
import Layout from '../components/layout';
import { pageContext } from '../contexts/page-context';

export default function IndustriesPage({ data }) {
  return (
    <pageContext.Provider value={{ lang: 'en' }}>
      <Layout
        page='industries'
        title='Industry Sectors'
        description={`We support variety of wide-ranging industry sectors including ${data.allIndustriesEnJson.nodes
          .map((n) => n.name)
          .join(', ')}`}
        url='/industries'>
        <Grid header='Industry Sectors' cols={3}>
          {data.allIndustriesEnJson.nodes.map((n, index) => (
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
  query IndustriesEnQuery {
    allIndustriesEnJson {
      nodes {
        name
        link
        description
      }
    }
  }
`;
