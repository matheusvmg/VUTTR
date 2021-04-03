import React from "react";
import {
  Background,
  Modal,
  Message,
  StyledCancelButton,
  StyledRemoveBtn,
} from "./styles";
import removeTool from "../../services/removeTool";

interface RemoveModalProperty {
  show: Function;
  toolId: number;
  toolTitle: string;
}

const RemoveModal: React.FC<RemoveModalProperty> = ({
  show,
  toolId,
  toolTitle,
}) => {
  async function removeSpecificTool() {
    try {
      const response = await removeTool(toolId);
      if (response.status === 200) {
        show(false);
        window.location.reload();
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Background onClick={() => show(false)}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <div id="header">
          <span>x</span>
          <h4>Remove tool</h4>
        </div>
        <Message>Are you sure you want to remove {toolTitle}?</Message>
        <div id="actions">
          <StyledCancelButton type="button" onClick={() => show(false)}>
            Cancel
          </StyledCancelButton>
          <StyledRemoveBtn type="button" onClick={() => removeSpecificTool()}>
            Yes, remove
          </StyledRemoveBtn>
        </div>
      </Modal>
    </Background>
  );
};

export default RemoveModal;
