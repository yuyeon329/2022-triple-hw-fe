import React from "react";
// import { CSSTransition } from "react-transition-group";
// import {useSpring, animated} from "react-spring";
/** @jsxImportSource @emotion/react */ 
import {css, keyframes} from '@emotion/react'

const floating = keyframes`
  from {
    transform: translate(0,0);
  }
  to {
    transform: translate(0,-15px);
  }
`

const boxStyle = css`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background: #a951bf;
  animation: ${floating} 2s;
  animation-fill-mode : forwards;
`;

const Test = () => {
  return(
    <div>
      <h2>emotion Animation</h2>
      <div className="wrap">
        <div className="box" css={boxStyle}></div>
      </div>
    </div>
  );
}

export default Test;