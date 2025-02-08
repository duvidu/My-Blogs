import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/axiosClient";
import { useAuth } from "../context/AuthContext";

export default function PostDetails() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await API.get(`/posts/${id}`);
        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        await API.delete(`/posts/${id}`);
        navigate("/");
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    }
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!post) return <div className="text-center mt-10">Post not found</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white p-6 rounded shadow-lg">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="text-gray-600 mt-2">By {post.author?.name || "Unknown"}</p>
        <p className="mt-4 text-gray-800">{post.content}</p>

        {user && user._id === post.author?._id && (
          <div className="mt-4 flex gap-4">
            <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleDelete}>Delete</button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded" onClick={() => navigate(`/edit/${id}`)}>Edit</button>

          </div>
        )}
      </div>
    </div>
  );
}
