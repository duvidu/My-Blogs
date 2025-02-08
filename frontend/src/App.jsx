import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreatePost from "./pages/CreatePost";
import PostDetails from "./pages/PostDetails";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import EditPost from "./pages/EditPost"; // Import EditPost page
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Help from "./pages/Help";


export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/create"
          element={
            <ProtectedRoute>
              <CreatePost />
            </ProtectedRoute>
          }
        />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/edit/:id" element={<EditPost />} /> 
        <Route path="/notifications" element={<Notifications />} />
  <Route path="/settings" element={<Settings />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  );
}
