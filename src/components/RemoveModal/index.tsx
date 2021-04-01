import React from "react";
import {
  Background,
  Modal,
  Message,
  StyledCancelButton,
  StyledRemoveBtn,
} from "./styles";

interface RemoveModalProperty {
  show: Function;
}

const RemoveModal: React.FC<RemoveModalProperty> = ({ show }) => {
  return (
    <Background>
      <Modal>
        <div id="header">
          <span>x</span>
          <h4>Remove tool</h4>
        </div>
        <Message>Are you sure you want to remove Notion?</Message>
        <div id="actions">
          <StyledCancelButton type="button" onClick={() => show(false)}>
            Cancel
          </StyledCancelButton>
          <StyledRemoveBtn>Yes, remove</StyledRemoveBtn>
        </div>
      </Modal>
    </Background>
  );
};

export default RemoveModal;
