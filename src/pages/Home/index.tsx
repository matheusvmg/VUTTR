import React, { useState, useEffect, useRef } from "react";
import NavBar from "../../components/NavBar";
import TitleSubtitle from "../../components/TitleSubtitle";
import { Container, Search, Checkbox, StyledAddButton } from "./styles";
import Loading from "../../components/Loading";
import { useModal } from "../../hooks/useModal";
import AddModal from "../../components/AddModal";
import getTools from "../../services/getTools";
import RemoveModal from "../../components/RemoveModal";
import searchGlobally from "../../services/searchGlobally";
import searchByTags from "../../services/searchByTags";
import { useToolCount } from "../../hooks/useToolCount";
import Pagination from "../../components/Pagination";

const Home = () => {
  const titleProps = {
    title: "vuttr",
    subtitle: "Very Useful Tools to Remember",
  };
  const { showModal, setShowModal } = useModal();
  const { showModal: addShowModal, setShowModal: setAddShowModal } = useModal();
  const { persistToolsCount, toolsCount } = useToolCount();
  const [tools, setTools]: Array<any> = useState([]);
  const [idTool, setIdTool] = useState<number>(0);
  const [toolTitle, setToolTitle] = useState<string>("");
  const [filteredTools, setFilteredTools]: Array<any> = useState([]);
  const inputSearch = useRef<HTMLInputElement>(null);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const inputTag = useRef<HTMLInputElement>(null);
  const [isSeachTagsChecked, setIsSeachTagsChecked] = useState<boolean>(false);

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

  useEffect(() => {
    async function getAllTools() {
      const data = await getTools();
      setTools(data.data);
      console.log(data.data);
      persistToolsCount(data.data.length);
    }
    getAllTools();
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <NavBar toolsCount={toolsCount} isDetails={false} />
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
      {isLoading ? (
        <Loading />
      ) : (
        <Pagination
          data={tools}
          dataLimit={5}
          pageLimit={3}
          filteredTools={filteredTools}
          isSearching={isSearching}
          setIdTool={setIdTool}
          setToolTitle={setToolTitle}
          setShowModal={setShowModal}
          setAddShowModal={setAddShowModal}
        />
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
