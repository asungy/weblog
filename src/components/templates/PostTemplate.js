import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

export const pageQuery = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`;

const MyH1 = (props) => {
  return (
    <h1 style={{ color: "tomato" }} {...props} />
  );
};

const customTags = {
  h1: MyH1,
}

const PostTemplate = ({ data }) => {
  return (
    <div>
      <h1>{data.mdx.frontmatter.title}</h1>
      <MDXProvider components={customTags}>
        <MDXRenderer frontmatter={data.mdx.frontmatter}>{data.mdx.body}</MDXRenderer>
      </MDXProvider>
    </div>
  );
};

export default PostTemplate;


