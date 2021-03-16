/* Docs: https://www.gatsbyjs.com/docs/gatsby-config/ */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Tiger Taylor",
    titleTemplate: "%s · Tiger Taylor",
    description: "Wesbite for Tiger Taylor (actuallyatiger)",
    url: "https://actuallyatiger.netlify.app",
    image: "/images/logo.png",
    twitterUsername: "@actuallyatiger",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tiger Taylor · Wesbite`,
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
