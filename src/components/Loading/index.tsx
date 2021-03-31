import React from "react";
import { Spinner } from "./styles";

const Loading = () => {
  return (
    <Spinner>
      <img src="/images/icons/Icon-Rotate-2px.svg" alt="ícone de loading" />
    </Spinner>
  );
};

export default Loading;
