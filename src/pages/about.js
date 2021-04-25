import React from "react";
import { navigate } from "gatsby";
import Layout from "@narative/gatsby-theme-novela/src/components/Layout";

const isBrowser = typeof window !== "undefined"

function AboutPage(props) {
  if(isBrowser){
    navigate("/authors/pacheco-en");
  }
  // window.location = props.location.origin + "/authors/pacheco-en";
  return <Layout></Layout>;
}

export default AboutPage;
