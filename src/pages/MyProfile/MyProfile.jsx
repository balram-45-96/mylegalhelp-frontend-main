import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axiosInstance from "@utils/axios";
import {
  SCContainerBody,
  SCContactGrid,
  SCContactItem,
  SCText,
  SCTitle,
  SCForm,
  SCInput,
  SCTextArea,
  SCButton,
  SCFormGrid,
  SCFormGroup,
  ContactForm,
  SCSelect,
} from "./MyProfile.styles";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { apis } from "@utils/api";

const MyProfile = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  const [formData, setFormData] = useState({});
  const [originalData, setOriginalData] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showNoChangeError, setShowNoChangeError] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate("/signin");
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await axiosInstance.get(apis.profile);
        if (response.data.success) {
          const profile = response.data.data;
          setFormData(profile);
          setOriginalData(profile);
        }
      } catch (err) {
        setError("Failed to load profile. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };

    if (!value.trim() && name !== "addressLink") {
      newErrors[name] = `${name.replace(/([A-Z])/g, " $1")} is required`;
    } else {
      delete newErrors[name];
    }

    setErrors(newErrors);
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (showNoChangeError) setShowNoChangeError(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const hasRealChanges = () => {
    return Object.keys(formData).some(
      (key) => String(formData[key]).trim() !== String(originalData[key]).trim()
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!hasRealChanges()) {
      setShowNoChangeError(true);
      return;
    }

    try {
      const updatedData = { ...formData, role: "lawyer" };

      if (!updatedData.addressLink?.trim()) {
        delete updatedData.addressLink;
      }

      await axiosInstance.put(apis.profile, updatedData);
      Swal.fire({
        icon: "success",
        title: "Profile Updated",
        text: "Your profile has been updated successfully!",
      });

      setOriginalData({ ...formData });
      setIsEditing(false);
      setShowNoChangeError(false);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: "An error occurred while updating your profile.",
      });
    }
  };

  if (loading)
    return (
      <div
        style={{
          display: "flex",
          height: "100dvh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SCText>Loading profile...</SCText>
      </div>
    );
  if (error) return <SCText style={{ color: "red" }}>{error}</SCText>;

  return (
    <SCContainerBody>
      <SCTitle>My Profile</SCTitle>
      <SCContactGrid>
        <SCContactItem>
          <SCText>Update your personal information below.</SCText>
        </SCContactItem>
      </SCContactGrid>
      <ContactForm>
        <SCForm onSubmit={handleSubmit}>
          <SCFormGrid>
            {[
              "firstName",
              "lastName",
              "qualifications",
              "experienceYears",
              "office",
              "addressLink",
              "consultationFee",
            ].map((field) => (
              <SCFormGroup key={field}>
                <label>
                  {field
                    .replace(/([A-Z])/g, " $1")
                    .trim()
                    .toUpperCase()}
                </label>
                <SCInput
                  type={
                    field.includes("Years") || field.includes("Fee")
                      ? "number"
                      : "text"
                  }
                  name={field}
                  value={formData[field] || ""}
                  onChange={handleChange}
                  required={!field.includes("addressLink") ? true : false}
                  disabled={!isEditing}
                />
                {errors[field] && (
                  <SCText
                    style={{
                      color: "red",
                      textAlign: "start",
                      marginBottom: "10px",
                    }}
                  >
                    {errors[field]}
                  </SCText>
                )}
              </SCFormGroup>
            ))}
            <SCFormGroup>
              <label>Gender</label>
              <SCSelect
                name="gender"
                value={formData.gender || ""}
                onChange={handleChange}
                required
                disabled={!isEditing}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </SCSelect>
            </SCFormGroup>
          </SCFormGrid>
          <SCFormGroup>
            <label>BIO</label>
            <SCTextArea
              name="bio"
              value={formData.bio || ""}
              onChange={handleChange}
              rows="4"
              required
              disabled={!isEditing}
            />
            {errors.bio && (
              <SCText style={{ color: "red" }}>{errors.bio}</SCText>
            )}
          </SCFormGroup>

          {showNoChangeError && (
            <SCText
              style={{
                color: "red",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              No changes detected. Please modify at least one field before
              updating.
            </SCText>
          )}

          {!isEditing ? (
            <SCButton type="button" onClick={handleEditClick}>
              Edit Profile
            </SCButton>
          ) : (
            <SCButton type="submit" disabled={!hasRealChanges()}>
              Update Profile
            </SCButton>
          )}
        </SCForm>
      </ContactForm>
    </SCContainerBody>
  );
};

export default MyProfile;
