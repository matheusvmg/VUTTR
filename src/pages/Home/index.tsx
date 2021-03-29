import React from "react";
import NavBar from "../../components/NavBar";
import TitleSubtitle from "../../components/TitleSubtitle";
import { Container } from "./styles";

const Home = () => {
  const titleProps = {
    title: "vuttr",
    subtitle: "Very Useful Tools to Remember",
  };

  return (
    <Container>
      <NavBar />
      <TitleSubtitle {...titleProps} />
    </Container>
  );
};

export default Home;
