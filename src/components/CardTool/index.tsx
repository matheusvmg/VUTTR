import React from "react";
import { Container, StyledRemoveButton, Description, Tags } from "./styles";

const CardTool = () => {
  return (
    <Container>
      <div className="header">
        <a href="/details" target="_blank" id="title">
          Notion
        </a>
        <StyledRemoveButton type="button">
          <span>x</span>remove
        </StyledRemoveButton>
      </div>
      <Description>Tool Description</Description>
      <Tags>#notion</Tags>
    </Container>
  );
};

export default CardTool;
