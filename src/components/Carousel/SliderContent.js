/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import "../ListResult/ListResult.css";
import uno from "../../img/property1.jpg";
import dos from "../../img/property3.jpg";
import tres from "../../img/property4.jpg";

const SliderContent = props => (
  <div
    className="heroCarousel"
    // css={css`
    //   transform: translateX(-${props.translate}px);
    //   transition: transform ease-out ${props.transition}s;
    //   height: 100%;
    //   width: ${props.width}px;
    //   display: flex;
    // `}
  >    
    {props.children}
  </div>
);

export default SliderContent;
