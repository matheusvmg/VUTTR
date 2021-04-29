import React, { useState, useEffect, useRef } from "react";
import NavBar from "../../components/NavBar";
import TitleSubtitle from "../../components/TitleSubtitle";
import { Container, Search, Checkbox, StyledAddButton } from "./styles";
import CardTool from "../../components/CardTool";
import Loading from "../../components/Loading";
import EmptyFilteredTools from "../../components/EmptyFilteredTools";
import { useModal } from "../../hooks/useModal";
import AddModal from "../../components/AddModal";
import getTools from "../../services/getTools";
import RemoveModal from "../../components/RemoveModal";
import searchGlobally from "../../services/searchGlobally";
import searchByTags from "../../services/searchByTags";
import EmptyTools from "../../components/EmptyTools";

interface CardToolsProperty {
  id: number;
  title: string;
  description: string;
  tags: [];
  link: string;
}

const Home = () => {
  const titleProps = {
    title: "vuttr",
    subtitle: "Very Useful Tools to Remember",
  };
  const { showModal, setShowModal } = useModal();
  const { showModal: addShowModal, setShowModal: setAddShowModal } = useModal();
  const [tools, setTools]: Array<any> = useState([]);
  const [idTool, setIdTool] = useState<number>(0);
  const [toolTitle, setToolTitle] = useState<string>("");
  const [filteredTools, setFilteredTools]: Array<any> = useState([]);
  const inputSearch = useRef<HTMLInputElement>(null);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const inputTag = useRef<HTMLInputElement>(null);
  const [isSeachTagsChecked, setIsSeachTagsChecked] = useState<boolean>(false);
  const [toolsCount, setToolsCount] = useState<number>(0);

  function persistToolsCount(toolsNumber: number) {
    const toolsCountInfo = localStorage.getItem("toolsCount");
    if (!toolsCountInfo) {
      JSON.stringify(localStorage.setItem("toolsCount", String(toolsNumber)));
      setToolsCount(Number(localStorage.getItem("toolsCount")));
      return;
    } else if (Number(toolsCountInfo) !== toolsNumber) {
      JSON.stringify(localStorage.setItem("toolsCount", String(toolsNumber)));
      setToolsCount(Number(localStorage.getItem("toolsCount")));
      return;
    }
    setToolsCount(Number(toolsCountInfo));
  }

  async function searchTools() {
    async function generalSearch() {
      const word =
        inputSearch.current !== null ? inputSearch.current.value : null;
      const response = await searchGlobally(word);
      setFilteredTools(response.data);
      setIsSearching(true);
    }

    async function searchInTagsOnly() {
      const tag =
        inputSearch.current !== null ? inputSearch.current.value : null;
      const response = await searchByTags(tag);
      setFilteredTools(response.data);
      setIsSearching(true);
    }

    try {
      isSeachTagsChecked ? searchInTagsOnly() : generalSearch();
    } catch (err) {
      console.error(err);
    }
  }

  const SearchInput = () => {
    return (
      <Search
        type="text"
        placeholder="search"
        ref={inputSearch}
        onBlur={() => searchTools()}
      />
    );
  };

  const AddButton = () => {
    return (
      <StyledAddButton type="button" onClick={() => setAddShowModal(true)}>
        <span>+</span> Add
      </StyledAddButton>
    );
  };

  const HandleTools = () => {
    return tools.length > 0 ? (
      tools.map(({ id, title, description, tags, link }: CardToolsProperty) => (
        <CardTool
          key={id}
          id={id}
          show={setShowModal}
          title={title}
          description={description}
          tags={tags}
          modalInfos={{ setIdTool, setToolTitle }}
          link={link}
        />
      ))
    ) : (
      <EmptyTools addModal={setAddShowModal} />
    );
  };

  const HandleFilteredTools = () => {
    return filteredTools.length > 0 ? (
      filteredTools.map(
        ({ id, title, description, tags, link }: CardToolsProperty) => (
          <CardTool
            key={id}
            id={id}
            show={setShowModal}
            title={title}
            description={description}
            tags={tags}
            modalInfos={{ setIdTool, setToolTitle }}
            link={link}
          />
        )
      )
    ) : (
      <EmptyFilteredTools />
    );
  };

  const MainSection = () => {
    return isSearching ? <HandleFilteredTools /> : <HandleTools />;
  };

  useEffect(() => {
    async function getAllTools() {
      const data = await getTools();
      setTools(data.data);
      persistToolsCount(data.data.length);
    }
    getAllTools();
    setIsLoading(false);
  }, []);

  return (
    <Container>
      <NavBar toolsCount={toolsCount} />
      <div className="wrapper">
        <TitleSubtitle {...titleProps} />
        <div className="section1">
          <div id="search-fields">
            <SearchInput />
            <div className="search-tags">
              <Checkbox
                type="checkbox"
                ref={inputTag}
                checked={isSeachTagsChecked}
                onChange={() => setIsSeachTagsChecked(!isSeachTagsChecked)}
              />
              <p>search in tags only</p>
            </div>
          </div>
          <AddButton />
        </div>
      </div>
      {isLoading ? <Loading /> : <MainSection />}
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
