import React from "react";
import { navigate } from "gatsby";
import Layout from "@narative/gatsby-theme-novela/src/components/Layout";

const isBrowser = typeof window !== "undefined"

function SobrePage(props) {
  if (isBrowser) {
    navigate("/authors/Rafael-Pacheco");
  }
  // window.location = props.location.origin + "/authors/Rafael-Pacheco";
  return <Layout></Layout>;
}

export default SobrePage;
