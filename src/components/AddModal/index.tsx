import React, { useRef } from "react";
import { Background, Modal, StyledAddBtn } from "./styles";
import addTool from "../../services/addTool";

interface AddModalProperty {
  show: Function;
}

const AddModal: React.FC<AddModalProperty> = ({ show }) => {
  const inputToolName = useRef<HTMLInputElement>(null);
  const inputToolLink = useRef<HTMLInputElement>(null);
  const inputToolDescription = useRef<HTMLInputElement>(null);
  const inputToolTags = useRef<HTMLInputElement>(null);

  const getFieldsValues = () => {
    return {
      title:
        inputToolName.current !== null ? inputToolName.current.value : null,
      link: inputToolLink.current !== null ? inputToolLink.current.value : null,
      description:
        inputToolDescription.current !== null
          ? inputToolDescription.current.value
          : null,
      tags: String(
        inputToolTags.current !== null ? inputToolTags.current?.value : null
      )
        .replace(/\s/g, "")
        .split(","),
    };
  };

  async function AddOneTool() {
    const data = getFieldsValues();
    try {
      await addTool(data);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Background onClick={() => show(false)}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <div id="header">
          <span>+</span>
          <h4>Add tool</h4>
        </div>
        <p className="labels">Tool Name</p>
        <input type="text" ref={inputToolName} />
        <p className="labels">Tool Link</p>
        <input type="text" ref={inputToolLink} />
        <p className="labels">Tool description</p>
        <input type="text" ref={inputToolDescription} />
        <p className="labels">Tags</p>
        <input type="text" ref={inputToolTags} />
        <StyledAddBtn type="button" onClick={() => AddOneTool()}>
          Add tool
        </StyledAddBtn>
      </Modal>
    </Background>
  );
};

export default AddModal;
