import styled from "styled-components";

export const SCContainerBody = styled.div`
  padding: ${({ theme }) => theme.spacings[8]};
  padding-bottom: ${({ theme }) => theme.spacings[20]};
`;

export const SCServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacings[5]};
  flex-wrap: wrap;
`;

export const SCServiceCard = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SCImageContainer = styled.div``;

export const SCServiceImage = styled.img`
  height: ${(props) =>
    props.isSearchLawyer ? "135px" : props.isSupport ? "180px" : "100%"};
  width: ${(props) => (props.isSearchLawyer ? "280px" : "100%")};
  border-radius: ${(props) => (props.isSearchLawyer ? "20px" : "")};
  object-fit: ${(props) => (props.isSearchLawyer ? "cover" : "")};
  margin-bottom: ${(props) =>
    props.isSearchLawyer ? "35px" : props.isSupport ? "16px" : ""};
  margin-top: ${(props) => (props.isSearchLawyer ? "30px" : "")};
  margin-inline: ${(props) =>
    props.isSearchLawyer ? "30px" : props.isSupport ? "15px" : ""};
`;

export const SCServiceTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
`;
