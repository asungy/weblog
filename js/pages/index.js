import React from 'react';
import Page from '../components/Page';

import init, { greet } from '../../pkg/weblog.js';

init()
.then(() => {
  greet("WebAssembly");
});

const IndexPage = () => {
  return (
    <Page pageTitle="Home">
      <p>Still developing this site. Don't mind the mess.</p>
    </Page>
  );
};

export default IndexPage;
