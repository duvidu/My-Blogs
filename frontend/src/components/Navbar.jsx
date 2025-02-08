import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaBell } from "react-icons/fa"; // Import notification icon from react-icons

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-black text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold italic serif ">My Blog</Link>
        <div className="flex items-center space-x-4">
          <Link to="/about" className="hover:text-gray-200">About Us</Link>
          {user && (
            <Link to="/notifications" className="relative">
              <FaBell size={24} />
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-xs">5</span>
            </Link>
          )}
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <span className="mr-4">Welcome, {user.name}</span>
                <button onClick={logout} className="bg-red-500 px-4 py-2 rounded">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="mr-4">Login</Link>
                <Link to="/register" className="bg-green-500 px-4 py-2 rounded">Register</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
