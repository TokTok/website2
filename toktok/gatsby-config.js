module.exports = {
  siteMetadata: {
    title: "Tox - Safe as a whisper",
    author: {
      name: "Kyle Mathews",
      summary: "who lives and works in San Francisco building useful things.",
    },
    description: "A starter blog demonstrating what Gatsby can do.",
    siteUrl: "https://gatsby-starter-blog-demo.netlify.com/",
    social: {
      twitter: "kylemathews",
    },
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",

    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/blog`,
        name: "blog",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/assets`,
        name: "assets",
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
    "gatsby-plugin-sharp",
    "gatsby-plugin-feed",
  ],
};
