import React from "react";
import styled from 'styled-components';
import Triple from './../pages/Section/Triple';

const StyledSection = styled.div`
  background-color : red;
  height : 35rem;
`;

const StyledDiv = styled.div`
  background-color : blue;
  width : 80rem;
  height : 35rem;
  margin : auto;
`;

const Section = () => {
  return(
    <div>
      <StyledSection>
        <StyledDiv>
          <Triple></Triple>
        </StyledDiv>
        </StyledSection>
    </div>
  );
}

export default Section;