import React from 'react';
import Page from '../components/Page';

const IndexPage = () => {
  return (
    <Page pageTitle="Home">
      <p>Still developing this site. Don't mind the mess.</p>
      <br />
      <p>List of To-Do Items:</p>
      <ul>
        <li>Sort post nodes by date</li>
        <li>Diagnose theme button rendering issue</li>
        <li>Diagnose page flashes when loading in dark mode (probably a related issue to the theme button)</li>
      </ul>
    </Page>
  );
};

export default IndexPage;
