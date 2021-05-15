import styled from "styled-components";
import colors from "../../config/colors";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
`;

export const Modal = styled.div`
  width: 87vw;
  height: auto;
  border-radius: 5px;
  background-color: ${colors.mostDarkesWhite};
  padding: 30px;
  display: flex;
  flex-direction: column;

  #header {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
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
  }

  .add-form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .labels {
    color: ${colors.lightInk};
    font-size: 14px;

    @media (min-width: 768px) {
      margin: 0px 30px;
    }
  }

  input {
    height: 30px;
    margin: 10px 0px;
    padding: 20px;
    border: 1px solid ${colors.darkestWhite};
    background-color: ${colors.darkerWhite};
    color: ${colors.ink};
    font-size: 16px;

    &:nth-child(7) {
      padding: 0px 20px;
      height: 80px;
    }

    @media (min-width: 768px) {
      margin: 10px 30px;
    }
  }

  @media (min-width: 768px) {
    width: 60vw;
  }
  @media (min-width: 1024px) {
    width: 50vw;
  }
`;

export const StyledAddBtn = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${colors.red};
  border: 0px;
  outline: 0 none;
  border-radius: 5px;
  font-weight: 700;
  color: ${colors.white};
  margin-top: 5px;
  cursor: pointer;

  &:disabled {
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
  }

  @media (min-width: 768px) {
    width: 100px;
    align-self: flex-end;
    margin-right: 30px;
  }
`;
