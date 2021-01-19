import React from "react";

import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";
import Headings from "@narative/gatsby-theme-novela/src/components/Headings";

const H1 = Headings.h1;

function NotFoundPage() {
  return (
    <Layout>
      <SEO />
      <Section>
        <div style={{ marginTop: "100px" }}>
          <H1>404: Page Not Found</H1>
        </div>
      </Section>
    </Layout>
  );
}

export default NotFoundPage;
