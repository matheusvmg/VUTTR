import React from "react";
import { Container, StyledAddBtnEmptyTools } from "./styles";

const EmptyFilteredTools = () => {
  return (
    <Container>
      <img src="/images/icons/Icon-Warning-2px.svg" alt="warning icon" />
      <h3>Tool not found!</h3>
      <StyledAddBtnEmptyTools
        type="button"
        onClick={() => window.location.reload()}
      >
        Home page
      </StyledAddBtnEmptyTools>
    </Container>
  );
};

export default EmptyFilteredTools;
