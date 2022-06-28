import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';

// markup
function IndexPage() {
  return (
    <main>
      <title> Home Page</title>

      <Layout pageTitle="Home">
        <StaticImage alt="my selfi" src="../images/selfi.jpg"></StaticImage>
        <div>Hi!</div>
      </Layout>
    </main>
  );
}

export default IndexPage;
