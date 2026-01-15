import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacings[4]};
  padding: ${({ theme }) => theme.spacings[4]};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow.normal};
  margin-bottom: ${({ theme }) => theme.spacings[4]};
  width: 100%;
  margin-inline: ${({ theme }) => theme.spacings[10]};
`;

export const LawyerImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;

  @media screen and (max-width: 768px) {
    width: 110px;
    height: 110px;
  }

  @media screen and (max-width: 475px) {
    display: none;
  }
`;

export const LawyerData = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: ${({ theme }) => theme.spacings[2]};
  max-width: 75%;

  @media screen and (max-width: 1345px) {
    max-width: 60%;
  }

  @media screen and (max-width: 830px) {
    max-width: 50%;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;

    .hide-on-mobile {
      display: none;
    }
  }
`;

export const LawyerName = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.primary[500]};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  margin-bottom: ${({ theme }) => theme.spacings[1]};
`;

export const Specialization = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray[600]};
  margin-bottom: ${({ theme }) => theme.spacings[1]};
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings[1]};
`;

export const InlineInfo = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray[600]};
  display: flex;
  width: 100%;
  gap: 5px;
`;

export const HighlightedInfo = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary[500]};
`;

export const PriceButton = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};

  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Bio = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray[700]};
  line-height: 1.5;

  @media screen and (max-width: 768px) {
    text-align: justify;
  }
`;

export const Availability = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.gray[700]};

  @media screen and (max-width: 768px) {
    text-align: justify;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ActionButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary[500]};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-top-left-radius: ${({ theme }) => theme.spacings[5]};
  border-top-right-radius: ${({ theme }) => theme.spacings[5]};
  border-bottom-left-radius: ${({ theme }) => theme.spacings[5]};
  padding-block: ${({ theme }) => theme.spacings[3]};
  padding-inline: ${({ theme }) => theme.spacings[5]};
  font-size: ${({ theme }) => theme.fontSize.base};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[600]};
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Lawyer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings[8]};

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const LawyerPersonal = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    text-align: start;
  }
`;
