import styled from "styled-components";
import colors from "../../config/colors";

export const Container = styled.div`
  h1 {
    text-align: center;
  }

  p {
    margin: 30px 30px;
    text-align: center;
    color: ${colors.ink};
    line-height: 36px;
  }

  .wrapper {
    display: flex;
    justify-content: center;

    @media (max-width: 560px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .section1 {
    height: 350px;
    width: 40vw;
    background-color: ${colors.white};
    border: 1px solid ${colors.darkestWhite};
    box-shadow: 0px 20px 25px #0000001a;
    border-radius: 10px;
    margin: 130px 20px 0px 50px;

    img {
      height: 100%;
      width: 100%;
    }

    @media (max-width: 768px) {
      margin-left: 10px;
      width: 45vw;
    }
    @media (max-width: 560px) {
      margin: 30px 0px;
      width: 85vw;
      background-color: transparent;
      border: none;
      box-shadow: none;
      border-radius: 0px;
    }
  }

  .section2 {
    height: fit-content;
    width: 40vw;
    background-color: ${colors.white};
    border: 1px solid ${colors.darkestWhite};
    box-shadow: 0px 20px 25px #0000001a;
    border-radius: 10px;
    margin: 30px 50px 0px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
      margin-right: 10px;
      width: 45vw;
    }
    @media (max-width: 560px) {
      margin: 30px 0px;
      width: 85vw;
    }
  }
`;

export const Title = styled.h2`
  font-weight: 500;
  color: ${colors.red};
  margin: 50px 0px;
  padding: 0px;
  line-height: 24px;
`;

export const ToolLink = styled.a`
  color: ${colors.lighterInk};
`;
