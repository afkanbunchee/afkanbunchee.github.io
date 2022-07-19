import { graphql } from 'gatsby';
import React from 'react';
import Card from '../components/card';
import Grid from '../components/grid';
import Layout from '../components/layout';
import { pageContext } from '../contexts/page-context';

export default function ServicesPage({ data }) {
  return (
    <pageContext.Provider value={{ lang: 'th' }}>
      <Layout
        page='services'
        title='บริการของเรา'
        description={`เรามีบริการที่หลากหลายที่จะรองรับธุรกิจของท่าน เช่น ${data.allServicesThJson.nodes
          .map((n) => n.name)
          .join(', ')}`}
        url='/services'>
        <Grid header='บริการของเรา' cols={3}>
          {data.allServicesThJson.nodes.map((n) => (
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
  query ServicesThQuery {
    allServicesThJson {
      nodes {
        name
        link
        image
        description
      }
    }
  }
`;
