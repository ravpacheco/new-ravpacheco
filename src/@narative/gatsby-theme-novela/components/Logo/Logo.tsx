import React, { Fragment } from "react";
import styled from "@emotion/styled";
import * as mediaqueries from '@narative/gatsby-theme-novela/src/styles/media'
import { getLogoDesktop, getLogoMobile } from "./utils";

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property value called `fill`. `fill` is useful
 * when you want to change your logo depending on the theme you are on.
 */

export default function Logo({ fill }) {
  return <Fragment>
    <LogoContainer>
      {getLogoDesktop(fill)}
      {getLogoMobile(fill)}
    </LogoContainer>
  </Fragment>
}

const LogoContainer = styled.div`
  .Logo__Mobile {
    display: none;
  }
  
  ${mediaqueries.default.tablet`
    .Logo__Desktop {
      display: none;
    }
    
    .Logo__Mobile{
      display: block;
    }
  `}
`;