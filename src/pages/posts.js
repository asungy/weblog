import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';

import Page from '../components/Page';
import "../styles/postGrid.css";

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          title
          path
          date
          description
        }
      }
    }
  }
`;

const PostsPage = ({ data }) => {
  const posts = data.allMdx.nodes;
  const postList = posts.map((node) => 
    <div class="postCell">
      <Link to={node.frontmatter.path}>
        <h3>{node.frontmatter.title}</h3>
        <h4>{node.frontmatter.date}</h4>
        <p>{node.frontmatter.description}</p>
      </Link>
    </div>
  );

  return (
    <Page pageTitle="Posts">
      <div class="postGrid">
        {postList}
      </div>
    </Page>
  );
};

export default PostsPage;
