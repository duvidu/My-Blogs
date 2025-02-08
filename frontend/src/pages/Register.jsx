import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axiosClient";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error message
  const navigate = useNavigate();

  // Email validation function
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex
    return emailRegex.test(email);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // Check if email is valid
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setError(""); // Clear error if email is valid

    try {
      await API.post("/users/register", { name, email, password });
      alert("Registration successful! Please log in."); // Success message
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Registration failed:", error.response?.data?.message);
      alert("Registration failed: " + error.response?.data?.message);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-96 bg-white p-6 rounded shadow-md">
          <h1 className="text-3xl font-serif text-center mb-6">Join Us Today</h1>
          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border rounded mb-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded mb-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>} {/* Show error if email is invalid */}
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded mb-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="w-full bg-black text-white py-2 rounded">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}
