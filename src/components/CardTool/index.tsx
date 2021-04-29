import React from "react";
import { Container, StyledRemoveButton, Description, Tags } from "./styles";
import { Link } from "react-router-dom";

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
  link: string;
}

const CardTool: React.FC<ToolProperty> = ({
  id,
  show,
  title,
  description,
  tags,
  modalInfos,
  link,
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
        <Link to={`/details/${id}`} id="title">
          {title}
        </Link>
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
