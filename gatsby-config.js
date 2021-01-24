module.exports = {
  siteMetadata: {
    title: `Pacheco - Website`,
    name: `Rafael Pacheco`,
    siteUrl: `https://ravpacheco.com`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Welcome to my place.
      Usually, I put here what I feel and learn`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/ravpachecco`,
      },
      {
        name: `github`,
        url: `https://github.com/ravpacheco`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/ravpachecco`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/ravpacheco/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        mailchimp: false,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {},
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: "", // add your MC list endpoint here; see plugin repo for instructions
      },
    },
  ],
};
