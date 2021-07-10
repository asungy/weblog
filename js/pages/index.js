import React, { useState, useEffect } from 'react';
import Page from '../components/Page';

import init, { hello } from '../../pkg/weblog.js';


const IndexPage = () => {
  const [wasmText, setWasmText] = useState('');

  useEffect(() => {
    init()
    .then(() => {
      setWasmText(hello("WebAssembly"));
    });
  });

  return (
    <Page pageTitle="Home">
      <p>Still developing this site. Don't mind the mess.</p>
      <pre>{wasmText}</pre>
    </Page>
  );
};

export default IndexPage;
