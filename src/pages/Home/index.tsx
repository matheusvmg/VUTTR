import React from "react";
import NavBar from "../../components/NavBar";
import TitleSubtitle from "../../components/TitleSubtitle";
import { Container, Search, Checkbox, StyledAddButton } from "./styles";
import CardTool from "../../components/CardTool";
// import Loading from "../../components/Loading";

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

  const AddButton = () => {
    return (
      <>
        <StyledAddButton type="button">
          <span>+</span> Add
        </StyledAddButton>
      </>
    );
  };

  return (
    <Container>
      <NavBar />
      <div className="wrapper">
        <TitleSubtitle {...titleProps} />
        <div className="section1">
          <div id="search-fields">
            <SearchInput />
            <div className="search-tags">
              <Checkbox type="checkbox" />
              <p>search in tags only</p>
            </div>
          </div>
          <AddButton />
        </div>
      </div>

      <CardTool />
    </Container>
  );
};

export default Home;
