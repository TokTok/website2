import React from "react";
import { useStaticQuery, graphql } from "gatsby";

function getAuthor(authors, name) {
  if (name) {
    name = name.toLowerCase();
  } else {
    name = "from the distant past.";
  }

  const author = authors.find((it) => it.name.toLowerCase() === name);
  if (!author) {
    return {
      name: "Tox",
      summary: " contributor " + name,
    };
  }
  return {
    name: author.name,
    summary: ", " + author.summary,
  };
}

const Bio: React.FC = ({ name }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          authors {
            name
            summary
          }
        }
      }
    }
  `);

  const author = getAuthor(data.site.siteMetadata.authors, name);
  return (
    <div>
      <img
        src={"https://avatars.githubusercontent.com/" + author.name}
        alt={author.name}
        style={{
          width: 50,
          borderRadius: "100%",
        }}
      />
      <p>
        Written by{" "}
        <a href={"https://github.com/" + author.name}>
          <strong>{author.name}</strong>
        </a>
        {author.summary}
      </p>
    </div>
  );
};

export default Bio;
