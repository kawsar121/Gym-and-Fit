import API from "./api";

export const registerUser = (data) =>
  API.post("/register", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const loginUser = (data) =>
  API.post("/login", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const verifyOtp = (data) =>
  API.post("/verify_otp", data);

export const resendOtp = (data) =>
  API.post("/resend_otp", data);