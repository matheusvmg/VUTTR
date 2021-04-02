import React from "react";
import { Container, StyledRemoveButton, Description, Tags } from "./styles";

interface ToolProperty {
  show: Function;
  title: string;
  description: string;
  tags: [];
}

const CardTool: React.FC<ToolProperty> = ({
  show,
  title,
  description,
  tags,
}) => {
  const tagsFormatted = (tagsArray: Array<string>) => {
    const newTagsArrayFormatted = tagsArray.map((tag) => {
      return tag.padStart(tag.length + 1, "#");
    });
    console.log(newTagsArrayFormatted);
    return newTagsArrayFormatted.join("\n");
  };

  return (
    <Container>
      <div className="header">
        <a href="/details" target="_blank" id="title">
          {title}
        </a>
        <StyledRemoveButton type="button" onClick={() => show(true)}>
          <span>x</span>remove
        </StyledRemoveButton>
      </div>
      <Description>{description}</Description>

      <Tags>{tagsFormatted(tags)}</Tags>
    </Container>
  );
};

export default CardTool;
