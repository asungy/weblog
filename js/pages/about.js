import React from 'react';
import Page from '../components/Page';

const AboutPage = () => {
  return (
    <Page pageTitle="About">
      <p>
        Hey! Welcome to my personal weblog. I treat this site as my space to do
        whatever I want. These days I'm mostly interested in developing my career
        in software engineering and data science, but I might write about other
        things that are important to me like rock climbing, endurance running, 
        or language learning.
      </p>

      <p>
        I feel like I should underscore this point that all of the content on
        this site are strictly <i>my</i> thoughts alone. I have rather average
        intelligence and certainly no specialities in any field. I try to do my
        due diligence when it comes to research and personal biases, but I
        reserve the right to be wrong. However, I more than welcome friendly
        critiques and discourse to the content I post, so please reach out if
        you feel that I could do something better.
      </p>

      <p>
        Feel free to leave me a friendly message at <b style={{color: "#aa42ff"}}>
        aleksungis AT gmail DOT com</b>.
      </p>

      <br />

      <p>
        &#169; {new Date().getFullYear()} Alek Sung. All rights reserved.
      </p>
    </Page>
  );
};

export default AboutPage;
