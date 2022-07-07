import React from "react";
import styled from 'styled-components';
import appImage from './../../assets/images/triple2x.png';

const StyledImage = styled.img.attrs({
  src : `${appImage}`
})`
  margin-top : 178px;
  width : 400px;
  height : auto;
  position : absolute;
`;

const Triple = () => {
  return(
    <>
    <StyledImage></StyledImage>
    </>
  );
};

export default Triple;