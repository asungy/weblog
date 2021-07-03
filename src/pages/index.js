import React from 'react';
import Page from '../components/Page';

const IndexPage = () => {
  return (
    <Page pageTitle="Home">
      <p>Still developing this site. Don't mind the mess.</p>
      <br />
      <p>List of To-Do Items:</p>
      <ul>
        <li>Put posts on home page</li>
        <li>Create known bugs page</li>
        <li>Diagnose theme button rendering issue</li>
        <li>Diagnose page flashes when loading in dark mode</li>
        <li>Pagination (won't really matter unless I write a lot)</li>
      </ul>
    </Page>
  );
};

export default IndexPage;
