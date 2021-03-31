import styled from "styled-components";
import colors from "../../config/colors";

export const Container = styled.div`
  .wrapper {
    @media (min-width: 768px) {
      margin-right: 110px;
    }
    @media (min-width: 1024px) {
      margin-right: 290px;
    }
    @media (min-width: 1200px) {
      margin-right: 530px;
    }
    @media (min-width: 1440px) {
      margin-right: 580px;
    }
  }
  .section1 {
    display: flex;
    flex-direction: column;
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
