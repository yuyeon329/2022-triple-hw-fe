import React from "react";
import styled from 'styled-components';
import useCounter from "../../hooks/useCounter";


const StyledTravelMent = styled.div`
  font-size : 36px;
  margin : 0 0 10px;
  color : rgba(58, 58, 58, 1);
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
    <StyledTravelMent><StyledBoldFont><span dangerouslySetInnerHTML={useCounter({start:0, end:700})}></span>만 명의</StyledBoldFont> 여행자</StyledTravelMent>
    <StyledTravelMent><StyledBoldFont><span dangerouslySetInnerHTML={useCounter({start:0, end:100})}></span>만 개의</StyledBoldFont> 여행 리뷰</StyledTravelMent>
    <StyledTravelMent><StyledBoldFont><span dangerouslySetInnerHTML={useCounter({start:0, end:470})}></span>만 개의</StyledBoldFont> 여행 일정</StyledTravelMent>
    </StyledTravel>
    </>
  );
};

export default Travel;