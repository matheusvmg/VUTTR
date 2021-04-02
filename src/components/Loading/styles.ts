import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(-360deg);
    }
`;

export const Spinner = styled.div`
  margin: 50px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 30px;
    width: 30px;
    animation: ${rotate} 2s linear infinite;
  }
`;
