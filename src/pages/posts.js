import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';

import Page from '../components/Page';
import "../styles/postGrid.css";
import { createPostObjects } from "../util/date";

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
  const postObjList = createPostObjects(data.allMdx.nodes);
  const posts = postObjList.sort((a, b) => b.dateObj - a.dateObj);
  const postList = posts.map((post) => 
    <div class="postCell">
      <Link to={post.path}>
        <h3>{post.title}</h3>
        <h4>{post.dateString}</h4>
        <p>{post.description}</p>
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
