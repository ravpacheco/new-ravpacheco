import React from "react";

import Layout from "@narative/gatsby-theme-novela/src/components/Layout";

function SobrePage(props) {
  window.location = props.location.origin + "/authors/Rafael-Pacheco";
  return <Layout></Layout>;
}

export default SobrePage;