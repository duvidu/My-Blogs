import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axiosClient";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/users/login", { email, password });
      localStorage.setItem("token", data.token);
      alert("Login successful!"); // Show success alert
      navigate("/"); // Redirect to home page
    } catch (error) {
      console.error("Login failed:", error.response?.data?.message);
      alert("Login failed: " + error.response?.data?.message); // Show error message
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-96 bg-white p-6 rounded shadow-md">
        <h2 className="text-3xl font-serif text-center mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded mb-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded mb-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="w-full bg-black text-white py-2 rounded">Login</button>
        </form>
      </div>
    </div>
  );
}
