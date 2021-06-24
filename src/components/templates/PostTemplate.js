import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import Page from '../Page';

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

// Override default tags with custom components
const customTags = {
}

const PostTemplate = ({ data }) => {
  return (
    <div>
      <Page pageTitle={data.mdx.frontmatter.title}>
      <MDXProvider components={customTags}>
        <MDXRenderer frontmatter={data.mdx.frontmatter}>{data.mdx.body}</MDXRenderer>
      </MDXProvider>
      </Page>
    </div>
  );
};

export default PostTemplate;

