import styled from "styled-components";
import colors from "../../config/colors";

export const Background = styled.div`
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  width: 87vw;
  height: 230px;
  background-color: ${colors.mostDarkesWhite};
  border-radius: 5px;
  padding: 30px;

  #actions {
    margin-top: 30px;
    display: flex;
    @media (min-width: 768px) {
      justify-content: flex-end;
    }
  }

  #header {
    display: flex;
    align-items: center;
    span {
      font-size: 26px;
      color: #170c3a;
      margin-right: 5px;
      font-weight: 800;
    }
    h4 {
      font-size: 22px;
      color: #170c3a;
      font-weight: 600;
    }
    img {
      height: 15px;
      width: 15px;
      margin-right: 10px;
      font-size: 24px;
    }
  }

  @media (min-width: 768px) {
    width: 50vw;
    height: 240px;
  }
  @media (min-width: 1024px) {
    height: 210px;
  }
`;

export const Message = styled.p`
  margin-top: 30px;
  color: ${colors.lightInk};
`;

export const StyledCancelButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: ${colors.red};
  border: 0px;
  outline: 0 none;
  border-radius: 5px;
  font-weight: 700;
  color: ${colors.white};
  margin-right: 20px;
  cursor: pointer;
`;

export const StyledRemoveBtn = styled.button`
  width: 100px;
  height: 40px;
  background-color: ${colors.red};
  border: 0px;
  outline: 0 none;
  border-radius: 5px;
  font-weight: 700;
  color: ${colors.white};
  cursor: pointer;
`;
