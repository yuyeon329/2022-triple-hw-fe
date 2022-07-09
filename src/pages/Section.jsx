import React from "react";
import styled, {keyframes} from 'styled-components';
import Triple from './../pages/Section/Triple';
import Travel from './../pages/Section/Travel';
import Award from "./Section/Award";

const StyledSection = styled.div`
  // background-color : red;
  height : 35vw;
`;

const StyledDiv = styled.div`
  // background-color : blue;
  width : 60vw;
  height : 35vw;
  margin : auto;
  position : relative;
`;

const StyledMent = styled.div`
  position : absolute;
  top : 450px;
  left : 140px;
  color : rgba(58, 58, 58, 0.7);
`;

//ani

const floating1 = keyframes`
  0% {
    transform: translate(0,0);
    opacity : 0;
  }

  50% {
    opacity : 0.5;
  }

  100% {
    transform: translate(0,-15px);
    opacity : 1;
  }
`;

const StyledAni1 = styled.div`
  animation: ${floating1} 700ms;
  animation-fill-mode : forwards;
`;

const StyledAni2 = styled.div`
  animation: ${floating1} 700ms;
  animation-delay : 100ms;
  animation-fill-mode : forwards;
`;

const StyledAni3 = styled.div`
  animation: ${floating1} 700ms;
  animation-delay : 200ms;
  animation-fill-mode : forwards;
`; 

const Section = () => {
  return(
    <div>
      <StyledSection>
        <StyledDiv>

          <StyledAni1>
          <Triple/>
          <StyledMent>2021년 12월 기준</StyledMent>
          </StyledAni1>

          <StyledAni2>
            <Travel/>
          </StyledAni2>

          <StyledAni3>
            <Award/>
          </StyledAni3>
        </StyledDiv>
        </StyledSection>
    </div>
  );
}

export default Section;