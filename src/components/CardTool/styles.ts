import styled from "styled-components";
import colors from "../../config/colors";

export const Container = styled.div`
  width: 87vw;
  height: 283px;
  border-radius: 5px;
  background-color: ${colors.white};
  border: 1px solid ${colors.darkestWhite};
  box-shadow: 0px 20px 25px #0000001a;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;

  @media (min-width: 374px) {
    width: 89vw;
  }
  @media (min-width: 768px) {
    margin-left: 50px;
    width: 70vw;
    height: 170px;
  }
  @media (min-width: 1024px) {
    width: 70vw;
  }
  @media (min-width: 1200px) {
    width: 70vw;
  }
`;
