import { useState } from "react";
import { verifyOtp } from "../services/auth";
import { useNavigate, useLocation } from "react-router-dom";

const OTP = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleVerify = async () => {
    try {
      await verifyOtp({
        email: state.email,
        otp,
      });

      alert("OTP Verified ✅");
      navigate("/login");

    } catch (err) {
      console.log(err.response?.data);
      alert("Invalid OTP");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <input
        placeholder="Enter OTP"
        onChange={(e) => setOtp(e.target.value)}
        className="border p-2"
      />

      <button
        onClick={handleVerify}
        className="bg-green-500 text-white p-2 rounded"
      >
        Verify OTP
      </button>
    </div>
  );
};

export default OTP;