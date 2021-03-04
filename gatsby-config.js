/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Sam Fritton',
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: ['gatsby-plugin-react-helmet'],
};
