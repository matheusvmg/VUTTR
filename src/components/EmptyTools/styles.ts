import styled from "styled-components";
import colors from "../../config/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
  img {
    margin: 50px 0px 20px 0px;
  }
  h3 {
    margin: 30px 20px;
    text-align: center;
  }
`;

export const StyledAddBtnEmptyTools = styled.button`
  width: 70%;
  height: 50px;
  background-color: ${colors.red};
  border: 0px;
  outline: 0 none;
  border-radius: 5px;
  font-weight: 700;
  color: ${colors.white};
  cursor: pointer;
  margin-top: 5px;
  margin-bottom: 10px;

  @media (min-width: 375px) {
    width: 60%;
  }
  @media (min-width: 425px) {
    width: 55%;
  }
  @media (min-width: 768px) {
    width: 100%;
  }
`;
