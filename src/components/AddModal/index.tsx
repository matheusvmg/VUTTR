import React from "react";
import { Background, Modal, StyledAddBtn } from "./styles";

interface AddModalProperty {
  show: Function;
}

const AddModal: React.FC<AddModalProperty> = ({ show }) => {
  return (
    <Background onClick={() => show(false)}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <div id="header">
          <span>+</span>
          <h4>Add tool</h4>
        </div>
        <p className="labels">Tool Name</p>
        <input type="text" />
        <p className="labels">Tool Link</p>
        <input type="text" />
        <p className="labels">Tool description</p>
        <input type="text" />
        <p className="labels">Tags</p>
        <input type="text" />
        <StyledAddBtn type="button">Add tool</StyledAddBtn>
      </Modal>
    </Background>
  );
};

export default AddModal;
