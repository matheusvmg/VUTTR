import React, { useEffect, useState } from "react";
import { GlobalStyles } from "./styles";
import CardTool from "../CardTool";
import EmptyFilteredTools from "../../components/EmptyFilteredTools";
import EmptyTools from "../../components/EmptyTools";

interface PaginationProperty {
  data: [];
  dataLimit: number;
  pageLimit: number;
  filteredTools: [];
  isSearching: boolean;
  setIdTool: Function;
  setToolTitle: Function;
  setShowModal: Function;
  setAddShowModal: Function;
}

interface CardToolsProperty {
  id: number;
  title: string;
  description: string;
  tags: [];
  link: string;
}

const Pagination: React.FC<PaginationProperty> = ({
  data,
  dataLimit,
  pageLimit,
  filteredTools,
  isSearching,
  setIdTool,
  setToolTitle,
  setShowModal,
  setAddShowModal,
}) => {
  const [pages, setPages] = useState<number>(1);
  const [filteredPages, setFilteredPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
  };

  const changePage = (event: any) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  };

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getFilteredPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return filteredTools.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    const numbersOfPages = Math.ceil(data.length / dataLimit);
    return new Array(numbersOfPages)
      .fill(numbersOfPages)
      .map((_, idx) => start + idx + 1);
  };

  const getFilteredPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    const numbersOfPages = Math.ceil(filteredTools.length / dataLimit);
    return new Array(numbersOfPages)
      .fill(numbersOfPages)
      .map((_, idx) => start + idx + 1);
  };

  const HandleTools = () => {
    return (
      <>
        {data.length > 0 ? (
          getPaginatedData().map(
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
          <EmptyTools addModal={setAddShowModal} />
        )}
      </>
    );
  };

  const HandleFilteredTools = () => {
    return (
      <>
        {filteredTools.length > 0 ? (
          getFilteredPaginatedData().map(
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
        )}
      </>
    );
  };

  const MainSection = () => {
    return isSearching ? <HandleFilteredTools /> : <HandleTools />;
  };

  const PaginationButtons = () => {
    const ToolsPaginationButtons = () => {
      return (
        <>
          <button
            onClick={goToPreviousPage}
            className={`prev ${currentPage === 1 ? "disabled" : ""}`}
          >
            <img
              src="/images/icons/Icon-Chevron-Left-light-blue-2px.svg"
              alt="arrow-left"
            />{" "}
            <span>Anterior</span>
          </button>
          {getPaginationGroup().map((item, index) => (
            <button
              key={index}
              onClick={changePage}
              className={`paginationItem ${
                currentPage === item ? "active" : null
              }`}
            >
              <span>{item}</span>
            </button>
          ))}

          <button
            onClick={goToNextPage}
            className={`next ${currentPage === pages ? "disabled" : ""}`}
          >
            <span>Pr??ximo</span>
            <img
              src="/images/icons/Icon-Chevron-Right-2px.svg"
              alt="arrow-left"
            />{" "}
          </button>
        </>
      );
    };

    const FilteredToolsPaginationButtons = () => {
      return (
        <>
          <button
            onClick={goToPreviousPage}
            className={`prev ${currentPage === 1 ? "disabled" : ""}`}
          >
            <img
              src="/images/icons/Icon-Chevron-Left-light-blue-2px.svg"
              alt="arrow-left"
            />{" "}
            <span>Anterior</span>
          </button>
          {getFilteredPaginationGroup().map((item, index) => (
            <button
              key={index}
              onClick={changePage}
              className={`paginationItem ${
                currentPage === item ? "active" : null
              }`}
            >
              <span>{item}</span>
            </button>
          ))}

          <button
            onClick={goToNextPage}
            className={`next ${
              currentPage === filteredPages ? "disabled" : ""
            }`}
          >
            <span>Pr??ximo</span>
            <img
              src="/images/icons/Icon-Chevron-Right-2px.svg"
              alt="arrow-left"
            />{" "}
          </button>
        </>
      );
    };

    if (data.length > 0) {
      if (filteredTools.length > 0 && isSearching) {
        return <FilteredToolsPaginationButtons />;
      }

      if (filteredTools.length < 1 && isSearching) {
        return <></>;
      }
      return <ToolsPaginationButtons />;
    }

    return <></>;
  };

  useEffect(() => {
    setPages(Math.ceil(data.length / dataLimit));
    setFilteredPages(Math.ceil(filteredTools.length / dataLimit));
  }, [data.length, dataLimit, filteredTools.length]);

  return (
    <>
      <GlobalStyles />
      <div>
        <div className="dataContainer">
          <MainSection />
        </div>

        <div className="pagination">
          <PaginationButtons />
        </div>
      </div>
    </>
  );
};

export default Pagination;
