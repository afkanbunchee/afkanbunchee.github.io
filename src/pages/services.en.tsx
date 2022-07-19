import { graphql } from 'gatsby';
import React from 'react';
import Card from '../components/card';
import Grid from '../components/grid';
import Layout from '../components/layout';
import { pageContext } from '../contexts/page-context';

export default function ServicesPage({ data }) {
  return (
    <pageContext.Provider value={{ lang: 'en' }}>
      <Layout
        page='services'
        title='Our Services'
        description={`We have wide-range services that support your business including ${data.allServicesEnJson.nodes
          .map((n) => n.name)
          .join(', ')}`}
        url='/en/services'>
        <Grid header='Our Services' cols={3}>
          {data.allServicesEnJson.nodes.map((n) => (
            <Card image={n.image} header={n.name} link={n.link}>
              {n.description}
            </Card>
          ))}
        </Grid>
      </Layout>
    </pageContext.Provider>
  );
}

export const query = graphql`
  query ServicesEnQuery {
    allServicesEnJson {
      nodes {
        name
        link
        image
        description
      }
    }
  }
`;
