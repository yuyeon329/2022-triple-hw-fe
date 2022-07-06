import React from 'react';
import styled from 'styled-components';
import logo from './../../assets/icons/img_intro_logo_dark.svg'

const StyledHeader = styled.header`
  display : flex;
  height : 70px;
  background-color : white;
  border-bottom : 1px solid rgb(239, 239, 239);
  align-items : center;
  padding-left : 3rem;
  padding-right : 3rem;
`;

const StyledLogo = styled.img`
  display : block;
  background-image : url(${logo});
  border : none;
  width : 57px;
  height : 20px; 
  // margin-left : 3rem;
`;

const StyledReser = styled.div`
  // color : rgb(255,255,255);
  color : black;
  font-weight : 500;
  // margin-right : 3rem;
  margin-left : auto;
`;

const Header = () => {
  return (
    <>
    <StyledHeader>
      <StyledLogo></StyledLogo>
      <StyledReser>내 예약</StyledReser>
    </StyledHeader>
    </>
  );
};

export default Header;