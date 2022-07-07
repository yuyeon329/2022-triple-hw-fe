import React from "react";
import styled from 'styled-components';

const StyledTravelMent = styled.div`
  font-size : 36px;
  margin : 0 0 15px;
`;

const StyledBoldFont = styled.span`
  font-weight : bold;
`;

const StyledTravel = styled.div`
  position : absolute;
  left : 650px;
  top : 180px;
`;

const Travel = () => {
  return (
    <>
    <StyledTravel>
    <StyledTravelMent><StyledBoldFont>0만 명의</StyledBoldFont> 여행자</StyledTravelMent>
    <StyledTravelMent><StyledBoldFont>0만 개의</StyledBoldFont> 여행 리뷰</StyledTravelMent>
    <StyledTravelMent><StyledBoldFont>0만 개의</StyledBoldFont> 여행 일정</StyledTravelMent>
    </StyledTravel>
    </>
  );
};

export default Travel;