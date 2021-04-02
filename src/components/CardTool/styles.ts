import styled from "styled-components";
import colors from "../../config/colors";

export const Container = styled.div`
  width: 87vw;
  height: auto;
  border-radius: 5px;
  background-color: ${colors.white};
  border: 1px solid ${colors.darkestWhite};
  box-shadow: 0px 20px 25px #0000001a;
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 20px;
  overflow: hidden;

  .header {
    display: flex;
    justify-content: space-between;
    width: 100%;

    #title {
      font-size: 24px;
      font-weight: 700;
      color: #170c3a;
    }
  }

  @media (min-width: 374px) {
    width: 89vw;
  }
  @media (min-width: 768px) {
    margin-left: 50px;
    width: 70vw;
  }
  @media (min-width: 1024px) {
    width: 70vw;
  }
  @media (min-width: 1200px) {
    width: 70vw;
  }
`;

export const StyledRemoveButton = styled.button`
  outline: 0 none;
  border: 0px;
  background: transparent;
  cursor: pointer;
  font-size: 14px;
  color: ${colors.red};
  font-weight: 700;

  span {
    font-size: 20px;
    font-weight: 700;
    color: ${colors.red};
    margin-right: 5px;
  }
`;

export const Description = styled.p`
  margin-top: 20px;
  color: ${colors.lightInk};
`;

export const Tags = styled.p`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  color: ${colors.red};
`;
