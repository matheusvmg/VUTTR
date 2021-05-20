import React, { useEffect, useRef, useState } from "react";
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
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const getFieldsValues = () => {
    const fieldsValues = {
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

    if (
      !fieldsValues.title?.trim() ||
      !fieldsValues.link?.trim() ||
      !fieldsValues.description?.trim() ||
      fieldsValues.tags.includes("")
    ) {
      setIsDisabled(true);
      return fieldsValues;
    }
    setIsDisabled(false);
    return fieldsValues;
  };

  async function AddOneTool(e: any) {
    e.preventDefault();
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
        <form className="add-form">
          <p className="labels">Tool Name</p>
          <input type="text" ref={inputToolName} onChange={getFieldsValues} />
          <p className="labels">Tool Link</p>
          <input type="text" ref={inputToolLink} onChange={getFieldsValues} />
          <p className="labels">Tool description</p>
          <input
            type="text"
            ref={inputToolDescription}
            onChange={getFieldsValues}
          />
          <p className="labels">Tags</p>
          <input type="text" ref={inputToolTags} onChange={getFieldsValues} />
          <StyledAddBtn
            disabled={isDisabled}
            type="submit"
            onClick={(e) => AddOneTool(e)}
          >
            Add tool
          </StyledAddBtn>
        </form>
      </Modal>
    </Background>
  );
};

export default AddModal;
