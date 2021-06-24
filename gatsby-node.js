const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Check if frontmatter path is queryable
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

  // Halt build if any errors are encountered
  if (result.errors) {
    reporter.panicOnBuild('failed to create posts', result.errors);
  }

  const posts = result.data.allMdx.edges;

  // Create a page for each MDX GraphQL node
  posts.forEach(({ node }, index) => {
    actions.createPage({
      path: node.slug,
      component: path.resolve('./src/components/templates/PostTemplate.js'),
      context: { id: node.id },
    });
  });
};
