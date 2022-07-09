import React from 'react';
import styled from 'styled-components';
import playstore from './../../assets/images/play-store2x.png';
import appstore from './../../assets/images/badge-apple4x.png';

const StyledPlayPlayStore = styled.img.attrs({
  src: `${playstore}`
})`
  display : block;
  width : 54px;
  height : 54px;
`

const StyledPlayAppStore = styled.img.attrs({
  src: `${appstore}`
})`
  display : block;
  width : 54px;
  height : 54px;
`

const StyledAward = styled.div`
  padding : 5px 0px 5px;
  // background-color: yellow;
  width : 240px;
  height : 64px;
  display : flex;
  margin-right : 20px;
`;

const StyledAwardMent = styled.div`
  font-size : 14px;
  padding-left : 10px;
  padding-top : 5px;
  color : rgba(58, 58, 58, 0.8);
  font-weight : bold;
`;

const StyledDiv = styled.div`
  display : flex;
  position : absolute;
  left : 650px;
  top : 380px;
`;

const Award = () => {
  return(
    <StyledDiv>
    <StyledAward>
      <StyledPlayPlayStore/>
      <StyledAwardMent>2018 구글 플레이스토어<br></br>올해의 앱 최우수상 수상</StyledAwardMent>
    </StyledAward>

    <StyledAward>
      <StyledPlayAppStore/>
      <StyledAwardMent>2018 애플 앱스토어<br></br>오늘의 여행앱 선정</StyledAwardMent>
    </StyledAward>
    </StyledDiv>
  );
};

export default Award;