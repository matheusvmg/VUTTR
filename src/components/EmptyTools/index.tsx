import React from "react";
import { Container, StyledAddBtnEmptyTools } from "./styles";

interface EmptyToolsProperty {
  addModal: Function;
}

const EmptyTools: React.FC<EmptyToolsProperty> = ({ addModal }) => {
  return (
    <Container>
      <img src="/images/icons/Icon-Plus-Circle-2px.svg" alt="add icon" />
      <h3>You have no tool registered!</h3>
      <StyledAddBtnEmptyTools type="button" onClick={() => addModal(true)}>
        Add tool
      </StyledAddBtnEmptyTools>
    </Container>
  );
};

export default EmptyTools;
