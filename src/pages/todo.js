import React from 'react';
import Page from '../components/Page';

const TodoPage = () => {
  return (
    <Page pageTitle="To Do">
      <p>List of To-Do Items:</p>
      <ul>
        <li>Put links/posts on home page</li>
        <li>Pagination (won't really matter unless I write a lot)</li>
      </ul>

      <h3>Known Bugs</h3>
      <ul>
        <li>Theme button doesn't properly reset itself on page refresh, if set to the non-default theme</li>
      </ul>
    </Page>
  );
};

export default TodoPage;
