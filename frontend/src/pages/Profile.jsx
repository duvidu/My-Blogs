import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">👤 Profile</h1>
      {user ? (
        <div className="bg-white p-6 rounded shadow">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        <p className="text-red-500">You are not logged in.</p>
      )}
    </div>
  );
}
