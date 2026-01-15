const BASE_API_URL = `${import.meta.env.VITE_BASE_API_URL}`;

export const apis = {
  signup: `${BASE_API_URL}/auth/lawyer/register`,
  signIn: `${BASE_API_URL}/auth/lawyer/login`,
  otp: `${BASE_API_URL}/auth/lawyer/verify-otp`,
  uploadDoc: `${BASE_API_URL}/auth/lawyer/upload-documents`,
  delete: `${BASE_API_URL}/auth/client/delete`,
  profile: `${BASE_API_URL}/auth/lawyer/profile`,
  specialisations: `${BASE_API_URL}/auth/lawyer/specialisation`,
  verifyLawyer: `${BASE_API_URL}/auth/lawyer/verify-lawyer`,
  rejectLawyer: `${BASE_API_URL}/auth/lawyer/reject-lawyer`,
};
