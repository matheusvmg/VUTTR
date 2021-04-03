import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import TitleSubtitle from "../../components/TitleSubtitle";
import { Container, Search, Checkbox, StyledAddButton } from "./styles";
import CardTool from "../../components/CardTool";
import Loading from "../../components/Loading";

import { useModal } from "../../hooks/useModal";
import AddModal from "../../components/AddModal";
import getTools from "../../services/getTools";
import RemoveModal from "../../components/RemoveModal";

interface CardToolsProperty {
  id: number;
  title: string;
  description: string;
  tags: [];
}

const Home = () => {
  const titleProps = {
    title: "vuttr",
    subtitle: "Very Useful Tools to Remember",
  };
  const { showModal, setShowModal } = useModal();
  const { showModal: addShowModal, setShowModal: setAddShowModal } = useModal();
  const [tools, setTools]: Array<any> = useState([]);
  const [idTool, setIdTool]: any = useState(null);
  const [toolTitle, setToolTitle]: any = useState("");

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
        <StyledAddButton type="button" onClick={() => setAddShowModal(true)}>
          <span>+</span> Add
        </StyledAddButton>
      </>
    );
  };

  useEffect(() => {
    async function getAllTools() {
      const data = await getTools();
      setTools(data.data);
    }
    getAllTools();
  }, []);
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
      {tools.length < 1 ? (
        <Loading />
      ) : (
        tools.map(({ id, title, description, tags }: CardToolsProperty) => (
          <CardTool
            key={id}
            id={id}
            show={setShowModal}
            title={title}
            description={description}
            tags={tags}
            modalInfos={{ setIdTool, setToolTitle }}
          />
        ))
      )}
      {addShowModal && <AddModal show={setAddShowModal} />}
      {showModal && (
        <RemoveModal
          show={setShowModal}
          toolId={idTool}
          toolTitle={toolTitle}
        />
      )}
    </Container>
  );
};

export default Home;
