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
  img {
    animation: ${rotate} 2s linear infinite;
  }
`;
