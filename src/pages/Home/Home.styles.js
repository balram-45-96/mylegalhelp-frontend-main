import styled from "styled-components";

export const SCContainerBody = styled.div`
  height: 100dvh;
  overflow-y: auto;
  max-height: 100dvh;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;
