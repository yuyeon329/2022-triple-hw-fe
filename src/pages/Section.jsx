import React from "react";
import styled from 'styled-components';

const StyledSection = styled.div`
  background-color : red;
  height : 20rem;
`;

const Section = () => {
  return(
    <div>
      <StyledSection>This is HomeWork Section!!
      </StyledSection>
    </div>
  );
}

export default Section;