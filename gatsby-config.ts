import type { GatsbyConfig } from 'gatsby';

const webFontLoaderPlugin = {
  resolve: `gatsby-plugin-web-font-loader`,
  options: {
    google: {
      families: ['Mitr', 'Sarabun'],
    },
  },
};

const sourceFilesystem = {
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `data`,
    path: `${__dirname}/src/data/`,
    ignore: [`**/\.*`],
  },
};

const i18nPlugin = {
  resolve: `gatsby-plugin-i18n`,
  options: {
    langKeyDefault: `th`,
    useLangKeyLayout: true,
  },
};

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://afkanbunchee.github.io`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    webFontLoaderPlugin,
    sourceFilesystem,
    i18nPlugin,
  ],
};

export default config;
