module.exports = {
  siteMetadata: {
    title: `Hunndy`,
    description: `A full-stack engineer capable of delivering market ready enterprise applications.`,
    author: `Hundeyin Oluwadamilola`,
    birthDay: "March 29, 1999",
    location: "Lagos, Nigeria",
    emailAddress: "damihundeyin@gmail.com",
    phone: "+234 (0) 817-270-2507",
    position: "Full-stack engineer",
    url: "https://hunndy.com",
    linkedin: "https://www.linkedin.com/in/hundy/",
    twitter: "https://twitter.com/damicodes",
    facebook: "https://www.facebook.com/damilola.hundeyin/",
    github: "https://www.github.com/dbankx"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
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
        icon: `src/images/H.pngs`, // This path is relative to the root of the site.
        legacy: true
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
            "gatsby-remark-relative-images",
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: 'Default Dark+'
            }
          },
          {
            resolve: "gatsby-remark-images",
            options:{
              maxWidth: 750,
              quality: 80,
              showCaptions: true,
              linkImagesToOriginal: false,
            }
          }
        ]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
