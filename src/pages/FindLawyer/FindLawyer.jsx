import React, { useState, useEffect } from "react";
import axios from "axios";
import LawyerProfile from "../../components/LawyerProfile/LawyerProfile";
import {
  Container,
  ErrorMessage,
  LawyerList,
  Loading,
} from "./FindLawyer.styles";

const FindLawyer = () => {
  const [lawyers, setLawyers] = useState([]); // Store lawyer data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchLawyers = async () => {
      try {
        const response = await axios.get(
          "https://api.mylegalhelp.org.in/api/auth/client/lawyers"
        );

        if (response.data.success) {
          setLawyers(response.data.data); // Set fetched data
        }
      } catch (err) {
        setError("Failed to fetch lawyers. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchLawyers();
  }, []);

  return (
    <Container>
      {loading && <Loading>Loading...</Loading>}
      {error && <ErrorMessage>{error}</ErrorMessage>}

      <LawyerList>
        {lawyers.map((lawyer) => (
          <LawyerProfile key={lawyer._id} lawyer={lawyer} />
        ))}
      </LawyerList>
    </Container>
  );
};

export default FindLawyer;
