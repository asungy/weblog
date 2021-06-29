import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/dracula';

import Page from '../Page';
import { convertDate } from "../../util/date";

// Override <pre> tag to support code syntax highlighting
const CodeBlock = (props) => {
  // Get class name of children elements
  const className = props.children.props.className || '';
  // Capture language used in children elements
  const matches = className.match(/language-(?<lang>.*)/);
  // I have no idea what's going on here
  // Reference: https://github.com/FormidableLabs/prism-react-renderer/blob/master/README.md
  return (
    <Highlight {...defaultProps} code={props.children.props.children.trim()} language={
        matches && matches.groups && matches.groups.lang ? matches.groups.lang : ''
      } theme={theme}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={{...style, padding: '20px'}}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

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
  pre: CodeBlock,
}

const PostTemplate = ({ data }) => {
  return (
    <Page>
      <MDXProvider components={customTags}>

        {/* Replace default page title with centered on for posts */}
        <h1 style={{ textAlign: "center" }}>{data.mdx.frontmatter.title}</h1>

        {/* Insert date */}
        <h4 style={{ textAlign: "right" }}>{convertDate(data.mdx.frontmatter.date).dateString}</h4>

        <MDXRenderer frontmatter={data.mdx.frontmatter}>
          {data.mdx.body}
        </MDXRenderer>

      </MDXProvider>
    </Page>
  );
};

export default PostTemplate;


