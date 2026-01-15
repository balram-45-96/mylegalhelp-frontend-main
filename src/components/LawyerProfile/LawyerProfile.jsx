import React from "react";
import {
  ActionButton,
  Availability,
  Card,
  InfoContainer,
  InlineInfo,
  HighlightedInfo,
  LawyerData,
  LawyerImage,
  LawyerName,
  Specialization,
  Bio,
  ButtonContainer,
  LawyerPersonal,
  Lawyer,
  PriceButton,
} from "./LawyerProfile.styles";
import LawyerVector from "@assets/icons/lawyer_vector.png";

const LawyerProfile = ({ lawyer }) => {
  return (
    <Card>
      <Lawyer>
        <LawyerImage src={LawyerVector} alt="Lawyer" />
        <LawyerPersonal>
          <LawyerName>
            {lawyer.firstName} {lawyer.lastName}
          </LawyerName>
          <Specialization>
            {lawyer.specialization?.specialisation || "N/A"}
          </Specialization>

          <InfoContainer>
            <InlineInfo>
              <HighlightedInfo>Experience:</HighlightedInfo>{" "}
              {lawyer.experienceYears || "N/A"} years
            </InlineInfo>
            <InlineInfo>
              <HighlightedInfo>Qualification:</HighlightedInfo>{" "}
              {lawyer.qualifications || "Not Available"}
            </InlineInfo>
            <InlineInfo>
              <HighlightedInfo> Rating:</HighlightedInfo>{" "}
              {lawyer.rating || "No Rating"} / 5
            </InlineInfo>
          </InfoContainer>
        </LawyerPersonal>
      </Lawyer>

      <LawyerData>
        <LawyerName className="hide-on-mobile">
          {lawyer.firstName} {lawyer.lastName}
        </LawyerName>
        <Specialization className="hide-on-mobile">
          {lawyer.specialization?.specialisation || "N/A"}
        </Specialization>

        <InfoContainer className="hide-on-mobile">
          <InlineInfo>
            <HighlightedInfo>Experience:</HighlightedInfo>{" "}
            {lawyer.experienceYears || "N/A"} years |
            <HighlightedInfo> Fee:</HighlightedInfo> ₹
            {lawyer.consultationFee || "N/A"}
          </InlineInfo>
          <InlineInfo>
            <HighlightedInfo>Qualification:</HighlightedInfo>{" "}
            {lawyer.qualifications || "Not Available"} |
            <HighlightedInfo> Rating:</HighlightedInfo>{" "}
            {lawyer.rating || "No Rating"} / 5
          </InlineInfo>
        </InfoContainer>

        <Bio>{lawyer.bio || "Biography not available."}</Bio>

        <Availability>
          <strong>Available:</strong>{" "}
          {lawyer.availability?.days?.length
            ? lawyer.availability.days.join(", ")
            : "Not Available"}
        </Availability>
      </LawyerData>

      <ButtonContainer>
        <ActionButton>
          Book Now &nbsp;
          <PriceButton>
            ( {lawyer.consultationFee || "N/A"}&nbsp; ₹ )
          </PriceButton>
        </ActionButton>
      </ButtonContainer>
    </Card>
  );
};

export default LawyerProfile;
