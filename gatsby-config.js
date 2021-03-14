/* Docs: https://www.gatsbyjs.com/docs/gatsby-config/ */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tiger Taylor - Portfolio`,
        short_name: `Tiger Taylor`,
        lang: `en`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        start_url: `/`,
        background_color: `#f2eee4`,
        theme_color: `#5065a8`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
