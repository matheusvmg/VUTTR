import React from "react";
import { Container, StyledRemoveButton, Description, Tags } from "./styles";

interface ToolProperty {
  id: number;
  show: Function;
  title: string;
  description: string;
  tags: [];
  modalInfos: {
    setIdTool: Function;
    setToolTitle: Function;
  };
}

const CardTool: React.FC<ToolProperty> = ({
  id,
  show,
  title,
  description,
  tags,
  modalInfos,
}) => {
  const tagsFormatted = (tagsArray: Array<string>) => {
    const newTagsArrayFormatted = tagsArray.map((tag) => {
      return tag.padStart(tag.length + 1, "#");
    });
    return newTagsArrayFormatted.join("\n");
  };

  return (
    <Container>
      <div className="header">
        <a href="/details" target="_blank" id="title">
          {title}
        </a>
        <StyledRemoveButton
          type="button"
          onClick={() => {
            show(true);
            modalInfos.setIdTool(id);
            modalInfos.setToolTitle(title);
          }}
        >
          <span>x</span>remove
        </StyledRemoveButton>
      </div>
      <Description>{description}</Description>
      <Tags>{tagsFormatted(tags)}</Tags>
    </Container>
  );
};

export default CardTool;
