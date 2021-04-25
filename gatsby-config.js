module.exports = {
  siteMetadata: {
    title: `Pacheco - Website`,
    name: `Rafael Pacheco`,
    siteUrl: `https://ravpacheco.com`,
    description: `Pacheco's website! Usually, I put here what I feel and learn. Neste site compartilho algumas notas e reflexões sobre meus aprendizados de vida.`,
    hero: {
      heading: `Notes, tutorials, reflexions and everything else... 😊`,
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
      {
        name: `youtube`,
        url: `http://youtube.com/ravpacheco`,
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
  ],
};
