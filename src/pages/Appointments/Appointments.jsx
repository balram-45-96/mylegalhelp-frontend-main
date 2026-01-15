import React, { useState, useEffect } from "react";
import {
  Container,
  Tabs,
  Tab,
  BookingCard,
  BookingList,
  LawyerInfo,
  BookingDetails,
  SCContainer,
} from "./Appointments.styles";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axiosInstance from "@utils/axios";
import Lawyer from "@assets/images/lawyer.jpg";
import Loader from "@components/UI/Loader/Loader";

const Appointments = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const lawyerId = useSelector((state) => state.auth.user?.id);
  const [activeTab, setActiveTab] = useState("today");
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) {
      navigate("/signin");
      return;
    }
    if (lawyerId) {
      fetchAppointments();
    }
  }, [activeTab, token, lawyerId]);

  const fetchAppointments = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get(
        `/auth/lawyer/appointments/${lawyerId}?status=${activeTab}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setBookings(response.data.appointments);
    } catch (err) {
      setError("Failed to load appointments");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Function to format time from ISO string
  const formatTime = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <SCContainer>
      <Container>
        <Tabs>
          <Tab
            $active={activeTab === "past"}
            onClick={() => setActiveTab("past")}
          >
            Past Bookings
          </Tab>
          <Tab
            $active={activeTab === "today"}
            onClick={() => setActiveTab("today")}
          >
            Today's Bookings
          </Tab>
          <Tab
            $active={activeTab === "upcoming"}
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming Bookings
          </Tab>
        </Tabs>

        {loading ? (
          <Loader />
        ) : error ? (
          <p style={{ textAlign: "center" }}>{error}</p>
        ) : (
          <BookingList>
            {bookings?.length > 0 ? (
              bookings?.map((booking) => (
                <BookingCard key={booking._id}>
                  <BookingDetails>
                    <p>
                      <strong>Booking ID:</strong> {booking._id}
                    </p>
                    <p>
                      <strong>Client:</strong> {booking.client.firstName}{" "}
                      {booking.client.lastName}
                    </p>
                    <p>
                      <strong>Appointment Date:</strong>{" "}
                      {new Date(booking.date).toDateString()}
                    </p>
                    <p>
                      <strong>Time:</strong> {formatTime(booking.startTime)} -{" "}
                      {formatTime(booking.endTime)}
                    </p>
                  </BookingDetails>
                  <LawyerInfo>
                    <img src={Lawyer} alt={booking.lawyer.firstName} />
                    <div>
                      <h4>
                        {booking.lawyer.firstName} {booking.lawyer.lastName}
                      </h4>
                      <p>{booking.lawyer.specialization.specialisation}</p>
                      <p>{booking.lawyer.qualifications}</p>
                      <p>
                        {booking.lawyer.experienceYears} years of experience
                      </p>
                    </div>
                  </LawyerInfo>
                </BookingCard>
              ))
            ) : (
              <p style={{ textAlign: "center" }}>
                No {activeTab} bookings found.
              </p>
            )}
          </BookingList>
        )}
      </Container>
    </SCContainer>
  );
};

export default Appointments;
