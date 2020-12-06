module.exports = {
  siteMetadata: {
    title: `Hunndy`,
    description: `A full-stack engineer capable of delivering market ready enterprise applications.`,
    author: `Hundeyin Oluwadamilola`,
    twitterUsername: "@DBankx1",
    birthDay: "March 29, 1999",
    location: "Lagos, Nigeria",
    emailAddress: "damihundeyin@gmail.com",
    phone: "+234 (0) 817-270-2507"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hundeyin Oluwadamilola`,
        short_name: `Hundy`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
