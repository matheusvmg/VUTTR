import React from "react";
import NavBar from "../../components/NavBar";
import TitleSubtitle from "../../components/TitleSubtitle";
import { Container, Search, Checkbox } from "./styles";
import CardTool from "../../components/CardTool";

const Home = () => {
  const titleProps = {
    title: "vuttr",
    subtitle: "Very Useful Tools to Remember",
  };

  const SearchInput = () => {
    return (
      <>
        <Search type="text" placeholder="search" />
      </>
    );
  };

  return (
    <Container>
      <NavBar />
      <div className="wrapper">
        <TitleSubtitle {...titleProps} />
        <div className="section1">
          <SearchInput />
          <div className="search-tags">
            <Checkbox type="checkbox" />
            <p>search in tags only</p>
          </div>
        </div>
      </div>

      <CardTool />
    </Container>
  );
};

export default Home;
