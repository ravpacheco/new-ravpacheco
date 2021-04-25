import React from "react";

import Layout from "@narative/gatsby-theme-novela/src/components/Layout";

function AboutPage(props) {
  window.location = props.location.origin + "/authors/pacheco-en";
  return <Layout></Layout>;
}

export default AboutPage;
