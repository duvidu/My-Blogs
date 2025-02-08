import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axiosClient";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null); // State for the image
  const navigate = useNavigate();

  const handleCreatePost = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) {
      formData.append("image", image); // Append the selected image
    }

    try {
      await API.post("/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Ensure the request sends form data
        },
      });
      navigate("/"); // Redirect to home after creating the post
    } catch (error) {
      console.error(error.response?.data?.message || "Error creating post");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Create New Post</h1>
      <form onSubmit={handleCreatePost}>
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border rounded mb-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          className="w-full p-2 border rounded mb-2"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        {/* Image Upload */}
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full p-2 border rounded mb-2"
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded">Post</button>
      </form>
    </div>
  );
}
