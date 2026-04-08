import { useState } from "react";
import { registerUser } from "../services/auth";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      Object.keys(form).forEach((key) => {
        formData.append(key, form[key]);
      });

      formData.append("terms", "true"); // IMPORTANT

      const res = await registerUser(formData);

      console.log("Register Success:", res.data);

      navigate("/otp", { state: { email: form.email } });

    } catch (err) {
      console.log(err.response?.data);
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="space-y-4 w-80">

        <input name="first_name" placeholder="First Name" onChange={handleChange} className="input" />
        <input name="last_name" placeholder="Last Name" onChange={handleChange} className="input" />
        <input name="email" placeholder="Email" onChange={handleChange} className="input" />

        <div className="relative">
          <input name="password" type={showPassword ? "text" : "password"} placeholder="Password" onChange={handleChange} className="input" />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-2 text-sm text-blue-500"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <div className="relative">
          <input name="password_confirmation" type={showPassword ? "text" : "password"} placeholder="Confirm Password" onChange={handleChange} className="input" />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-2 text-sm text-blue-500"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <button className="bg-blue-500 text-white p-2 w-full rounded">
          Register
        </button>
        {/* Login Link */}
        <p className="text-center text-sm">
          Don’t have an account?{" "}
          <Link to="/login" className="text-blue-500 font-semibold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;