import React from "react";
import styled from 'styled-components';
import Triple from './../pages/Section/Triple';
import Travel from './../pages/Section/Travel';
import Award from "./Section/Award";

const StyledSection = styled.div`
  background-color : red;
  height : 35vw;
`;

const StyledDiv = styled.div`
  background-color : blue;
  width : 60vw;
  height : 35vw;
  margin : auto;
  position : relative;
`;

const StyledMent = styled.div`
  position : absolute;
  top : 450px;
  left : 140px;
`;

const Section = () => {
  return(
    <div>
      <StyledSection>
        <StyledDiv>

          <Triple></Triple>
          <StyledMent>2021년 12월 기준</StyledMent>

          <Travel></Travel>
          <Award></Award>
        </StyledDiv>
        </StyledSection>
    </div>
  );
}

export default Section;