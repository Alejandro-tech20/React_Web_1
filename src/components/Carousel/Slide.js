/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const Slide = ({ content, animationDelay }) => (
  <div
    css={css`
  background-image: url('${content}');
  animation-delay:${animationDelay};
  `}
  ></div>

  // <div
  //   css={css`
  //     height: 100%;
  //     width: ${width}px;
  //     background-image: url('${content}');
  //     background-size: cover;
  //     background-repeat: no-repeat;
  //     background-position: center;
  //     background-color: black;
  //   `}
  // />
);
//

export default Slide;
