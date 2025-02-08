import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/axiosClient";
import { FaRegHeart } from "react-icons/fa"; // Unfilled heart icon

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar state

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await API.get("/posts");
        setPosts(data);
        setFilteredPosts(data); // Initially show all posts
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  const handleLike = async (postId) => {
    try {
      // Increment the like count for the specific post
      const updatedPosts = posts.map((post) =>
        post._id === postId ? { ...post, likes: post.likes + 1 } : post
      );
      setPosts(updatedPosts);
      setFilteredPosts(updatedPosts);

      // Optionally update the backend (ensure you have a route to handle likes)
      await API.put(`/posts/${postId}/like`);
    } catch (error) {
      console.error("Error liking the post:", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`bg-gray-800 text-white p-6 space-y-6 transition-all duration-300 ${isSidebarOpen ? "w-64" : "w-0 overflow-hidden"} backdrop-blur-lg`}>
        {isSidebarOpen && (
          <nav className="space-y-4">
            <Link to="/" className="block hover:bg-blue-500 p-2 rounded">📜 All Blogs</Link>
            <Link to="/create" className="block hover:bg-blue-500 p-2 rounded">✍️ Write</Link>
            <Link to="/notifications" className="block hover:bg-blue-500 p-2 rounded">🔔 Notifications</Link>
            <Link to="/settings" className="block hover:bg-blue-500 p-2 rounded">⚙️ Settings</Link>
            <Link to="/profile" className="block hover:bg-blue-500 p-2 rounded">👤 Profile</Link>
            <Link to="/help" className="block hover:bg-blue-500 p-2 rounded">❓ Help</Link>
          </nav>
        )}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Toggle Button */}
        <div className="flex items-center space-x-4 mb-6">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="bg-gray-700 text-white px-4 py-2 rounded"
          >
            {isSidebarOpen ? " ⬅️" : " ➡️"}
          </button>

          {/* Search Bar */}
          <div className="w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search blogs by title"
              className="w-full p-2 rounded-[20px] border border-gray-300"
            />
          </div>
        </div>

        <h1 className="text-1.5xl font-serif text-corner mb-6 underline">Blog Posts</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredPosts.map((post) => (
            <div key={post._id} className="bg-gray-200 p-4 rounded shadow relative">
              {/* Heart Icon */}
              <FaRegHeart
                className="absolute top-2 right-2 text-black border-2 border-black rounded-full p-1 cursor-pointer"
                size={20}
                onClick={() => handleLike(post._id)} // On click, trigger the like handler
              />
              {/* Like Count */}
              <span className="absolute top-2 right-12 text-black font-bold">{post.likes}</span>

              <h2 className="text-2xl font-semibold font-serif">{post.title}</h2>
              <p className="text-gray-600">{post.content.substring(0, 100)}...</p>
              <Link to={`/post/${post._id}`} className="text-blue-500">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
