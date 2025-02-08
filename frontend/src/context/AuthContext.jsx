import { createContext, useContext, useEffect, useState } from "react";
import API from "../api/axiosClient";

// Create Auth Context
const AuthContext = createContext();

// Hook to use Auth Context
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      API.get("/users/profile")
        .then(({ data }) => setUser(data))
        .catch(() => logout()); // Logout if token is invalid
    }
  }, []);

  // Login Function
  const login = async (email, password) => {
    const { data } = await API.post("/users/login", { email, password });
    localStorage.setItem("token", data.token);
    setUser(data);
  };

  // Logout Function
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
