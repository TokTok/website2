module.exports = {
  siteMetadata: {
    title: "Tox - Safe as a whisper",
    siteUrl: "https://toktok.ltd/",
    authors: [{
      name: "nurupo",
      summary: "some dude who writes blog posts.",
    }, {
      name: "JFreegman",
      summary: "developer of Toxic.",
    }],
    description:
      "Whether it's corporations or governments, there's just too much digital " +
      "spying going on today. Tox is an easy to use application that connects " +
      "you with friends and family without anyone else listening in. While other " +
      "big-name services require you to pay for features, Tox is totally free and " +
      "comes without advertising &mdash; forever.",
    keywords: "tox, security, messaging, messenger, videochat, chat",
    social: {
      twitter: "projecttox",
    },
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",

    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content`,
        name: "content",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem",
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-sharp",
    "gatsby-plugin-feed",
  ],
};
