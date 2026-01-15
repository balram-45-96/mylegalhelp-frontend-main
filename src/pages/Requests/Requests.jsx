import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axiosInstance from "@utils/axios";
import Loader from "@components/UI/Loader/Loader";
import {
  SCContainer,
  Container,
  Tabs,
  Tab,
  LawyerList,
  LawyerCard,
  LawyerDetails,
  LawyerInfo,
  VerifyButton,
} from "./Requests.styles";
import { apis } from "../../utils/api";

const Requests = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  const [activeTab, setActiveTab] = useState("verified");
  const [lawyers, setLawyers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) {
      navigate("/signin");
      return;
    }
    fetchLawyers();
  }, [activeTab, token]);

  const fetchLawyers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get(
        `/auth/lawyer/lawyers?status=${activeTab}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setLawyers(response.data.lawyers || []);
    } catch (err) {
      setError("Failed to load lawyers");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (lawyerId) => {
    const confirmed = window.confirm(
      "Are you sure you want to verify this lawyer?"
    );
    if (!confirmed) return;

    try {
      await axiosInstance.put(
        `${apis.verifyLawyer}/${lawyerId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Lawyer verified successfully!");
      fetchLawyers(); // refresh list
    } catch (err) {
      console.error(err);
      alert("Failed to verify lawyer. Please try again.");
    }
  };

  const handleReject = async (lawyerId) => {
    const confirmed = window.confirm(
      "Are you sure you want to reject this lawyer?"
    );
    if (!confirmed) return;

    try {
      await axiosInstance.put(
        `${apis.rejectLawyer}/${lawyerId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Lawyer rejected successfully!");
      fetchLawyers(); // refresh list
    } catch (err) {
      console.error(err);
      alert("Failed to reject lawyer. Please try again.");
    }
  };

  return (
    <SCContainer>
      <Container>
        <Tabs>
          <Tab
            $active={activeTab === "verified"}
            onClick={() => setActiveTab("verified")}
          >
            Verified Lawyers
          </Tab>
          <Tab
            $active={activeTab === "unverified"}
            onClick={() => setActiveTab("unverified")}
          >
            Unverified Lawyers
          </Tab>
          <Tab
            $active={activeTab === "rejected"}
            onClick={() => setActiveTab("rejected")}
          >
            Rejected Lawyers
          </Tab>
        </Tabs>

        {loading ? (
          <Loader />
        ) : error ? (
          <p style={{ textAlign: "center" }}>{error}</p>
        ) : (
          <LawyerList>
            {lawyers.length > 0 ? (
              lawyers.map((lawyer) => {
                const hasDocuments =
                  lawyer.documents?.qualificationCertificate ||
                  lawyer.documents?.license;

                return (
                  <LawyerCard key={lawyer._id}>
                    <LawyerDetails>
                      <p>
                        <strong>Name:</strong> {lawyer.firstName}{" "}
                        {lawyer.lastName}
                      </p>
                      <p>
                        <strong>Email:</strong> {lawyer.email}
                      </p>
                      <p>
                        <strong>Phone:</strong> {lawyer.countryCode}{" "}
                        {lawyer.phone}
                      </p>
                      <p>
                        <strong>Specialization:</strong>{" "}
                        {lawyer.specialization || "-"}
                      </p>
                      <p>
                        <strong>Qualifications:</strong> {lawyer.qualifications}
                      </p>
                      <p>
                        <strong>Experience:</strong> {lawyer.experienceYears}{" "}
                        years
                      </p>
                      <p>
                        <strong>Office:</strong> {lawyer.office}
                      </p>
                      <p>
                        <strong>Consultation Fee:</strong> ₹
                        {lawyer.consultationFee}
                      </p>
                      <p>
                        <strong>Rating:</strong> ⭐ {lawyer.rating}
                      </p>
                      <p>
                        <strong>Bio:</strong> {lawyer.bio}
                      </p>
                      <p>
                        <strong>Gender:</strong> {lawyer.gender}
                      </p>
                      <p>
                        <strong>Google Map:</strong>{" "}
                        <a
                          href={lawyer.addressLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Open Map
                        </a>
                      </p>
                    </LawyerDetails>

                    <LawyerInfo>
                      <div>
                        <h4>
                          {lawyer.firstName} {lawyer.lastName}
                        </h4>
                        <p>
                          {lawyer.qualifications || "No qualification info"}
                        </p>
                        <p>
                          Status:{" "}
                          {lawyer.documents?.isDocumentsVerified
                            ? "✅ Verified"
                            : "❌ Unverified"}
                        </p>

                        {hasDocuments && (
                          <>
                            <h3>Documents</h3>
                            {lawyer.documents?.qualificationCertificate && (
                              <p>
                                <a
                                  href={
                                    lawyer.documents.qualificationCertificate
                                  }
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Qualification Certificate
                                </a>
                              </p>
                            )}
                            {lawyer.documents?.license && (
                              <p>
                                <a
                                  href={lawyer.documents.license}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  License
                                </a>
                              </p>
                            )}
                          </>
                        )}

                        {!lawyer.documents?.isDocumentsVerified &&
                          activeTab === "unverified" && (
                            <>
                              <VerifyButton
                                onClick={() => handleVerify(lawyer._id)}
                              >
                                Verify Lawyer
                              </VerifyButton>
                              <VerifyButton
                                style={{
                                  background: "red",
                                }}
                                onClick={() => handleReject(lawyer._id)}
                              >
                                Reject Lawyer
                              </VerifyButton>
                            </>
                          )}
                      </div>
                    </LawyerInfo>
                  </LawyerCard>
                );
              })
            ) : (
              <p style={{ textAlign: "center" }}>
                No {activeTab} lawyers found.
              </p>
            )}
          </LawyerList>
        )}
      </Container>
    </SCContainer>
  );
};

export default Requests;
