import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import Page from '../Page';

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
      }
    }
  }
`;

// Override default tags with custom components
// For more information: https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#components
const customTags = {
}

const PostTemplate = ({ data }) => {
  return (
    <Page>
      <MDXProvider components={customTags}>

        {/* Replace default page title with centered on for posts */}
        <h1 style={{ textAlign: "center" }}>{data.mdx.frontmatter.title}</h1>

        {/* Insert date */}
        <h4 style={{ textAlign: "right" }}>{data.mdx.frontmatter.date}</h4>

        <MDXRenderer frontmatter={data.mdx.frontmatter}>
          {data.mdx.body}
        </MDXRenderer>

      </MDXProvider>
    </Page>
  );
};

export default PostTemplate;


