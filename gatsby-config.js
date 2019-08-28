/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Weird Moments",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "ql1gb0zv",
        dataset: "production",
        token: process.env.MY_SANITY_TOKEN,
        overlayDrafts: true,
        watchMode: true,
      },
    },
  ],
}
