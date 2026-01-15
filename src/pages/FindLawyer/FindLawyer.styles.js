import styled from "styled-components";

export const Container = styled.div`
  padding-top: ${({ theme }) => theme.spacings[32]};
  padding-bottom: ${({ theme }) => theme.spacings[10]};
  background-color: ${({ theme }) => theme.colors.background};
  overflow-y: auto;
  max-height: 100dvh;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

export const LawyerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacings[4]};
`;

export const Loading = styled.p`
  color: black;
  font-size: ${({ theme }) => theme.fontSize.md};
  text-align: center;
  margin-top: 200px;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.md};
  text-align: center;
  margin-top: 200px;
`;
