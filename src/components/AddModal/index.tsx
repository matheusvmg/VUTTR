import React from "react";
import { Background } from "./styles";

interface AddModalProperty {
  show: Function;
}

const AddModal: React.FC<AddModalProperty> = ({ show }) => {
  return (
    <Background
      onClick={() => {
        show(false);
      }}
    ></Background>
  );
};

export default AddModal;
