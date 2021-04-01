import React from "react";
import { Container, StyledRemoveButton, Description, Tags } from "./styles";

interface ToolProperty {
  show: Function;
}

const CardTool: React.FC<ToolProperty> = ({ show }) => {
  return (
    <Container>
      <div className="header">
        <a href="/details" target="_blank" id="title">
          Notion
        </a>
        <StyledRemoveButton type="button" onClick={() => show(true)}>
          <span>x</span>remove
        </StyledRemoveButton>
      </div>
      <Description>
        One tool for your whole team. Write, plan, and get organized.
      </Description>
      <Tags>#notion</Tags>
    </Container>
  );
};

export default CardTool;
