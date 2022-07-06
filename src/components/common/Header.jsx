import React from 'react';
import styled from 'styled-components';
import logo from './../../assets/icons/img_intro_logo_dark.svg'
import { Link, Outlet } from 'react-router-dom';

const StyledHeader = styled.header`
  display : flex;
  height : 70px;
  background-color : white;
  border-bottom : 1px solid rgb(239, 239, 239);
  align-items : center;
  padding-left : 3rem;
  padding-right : 3rem;
`;

const StyledLogo = styled.img.attrs({
  src: `${logo}`
})`
  display : block;
  width : 57px;
  height : 20px;
`

const StyledReser = styled.div`
  // color : rgb(255,255,255);
  color : black;
  font-weight : 500;
  margin-left : auto;
`;

const Header = () => {
  return (
    <div>
    <StyledHeader>
      <Link to="/">
        <StyledLogo></StyledLogo>
        </Link>
      <StyledReser>내 예약</StyledReser>
    </StyledHeader>
    <main>
      <Outlet/>
    </main>
    </div>
  );
};

export default Header;