import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Make sure AuthContext is correct

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}
