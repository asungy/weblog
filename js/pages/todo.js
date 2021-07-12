import React from 'react';
import Page from '../components/Page';

const TodoPage = () => {
  return (
    <Page pageTitle="To Do">
      <ul>
        <li>Put links/posts on home page</li>
        <li>Implement Conway's Game of Life in WASM</li>
        <li>Pagination (won't really matter unless I write a lot)</li>
        <li>Convert pages from JS to MDX files</li>
      </ul>

      <h3>Game of Life WASM Implementation</h3>
      <ul>
        <li>Create Docker container for CodeBuild</li>
      </ul>

      <h3>Known Bugs</h3>
      <ul>
        <li>Theme button doesn't properly reset itself on page refresh, if set to the non-default theme</li>
      </ul>
    </Page>
  );
};

export default TodoPage;
