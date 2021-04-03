import styled from "styled-components";
import colors from "../../config/colors";

export const Container = styled.div`
  .wrapper {
    @media (min-width: 768px) {
      margin-left: 10px;
    }
    @media (min-width: 1024px) {
      margin-right: 0px;
    }
  }
  .section1 {
    display: flex;
    flex-direction: column;
    #search-fields {
      display: flex;
      flex-direction: column;

      @media (min-width: 768px) {
        flex-direction: row;
      }
    }
    .search-tags {
      display: flex;
      align-items: center;
      margin-top: 20px;

      p {
        margin-left: 10px;
        margin-top: -5px;
        font-size: 0.8rem;
        color: #170c3a;
      }
    }
    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      width: 72vw;
    }
  }
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Search = styled.input`
  margin: 30px 0px 0px 20px;
  height: 50px;
  width: 87vw;
  background-color: ${colors.darkerWhite};
  border: 1px solid ${colors.darkestWhite};
  padding: 20px;
  &::-webkit-input-placeholder {
    padding-left: 30px;
    background-image: url("/images/icons/Icon-Search-2px.svg");
    background-size: 15px;
    background-repeat: no-repeat;
    background-position: left;
    background-position-x: 10px;
  }
  @media (min-width: 374px) {
    width: 89vw;
  }
  @media (min-width: 768px) {
    width: 30vw;
  }
  @media (min-width: 1024px) {
    width: 23vw;
  }
  @media (min-width: 1200px) {
    width: 17vw;
  }
`;

export const Checkbox = styled.input`
  height: 15px;
  width: 15px;
  background-color: ${colors.darkerWhite};
  border: 1px solid ${colors.darkestWhite};
  margin-left: 20px;
`;

export const StyledAddButton = styled.button`
  width: 154px;
  height: 50px;
  border-radius: 5px;
  background-color: ${colors.red};
  outline: 0 none;
  color: ${colors.white};
  margin: 20px 0px 20px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;

  span {
    font-size: 24px;
    font-weight: 700;
    margin-right: 5px;
  }

  @media (min-width: 768px) {
    width: 100px;
  }
`;
