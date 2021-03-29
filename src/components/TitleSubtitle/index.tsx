import React from "react";
import { Container } from "./styles";

interface PageTitle {
  title: string;
  subtitle: string;
}

const TitleSubtitle: React.FC<PageTitle> = ({ title, subtitle }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </Container>
  );
};

export default TitleSubtitle;
