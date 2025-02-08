export default function Notifications() {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">🔔 Notifications</h1>
        <p className="text-gray-600">Here you will see new updates, comments, and other alerts.</p>
        
        {/* Sample Notification List */}
        <div className="mt-4 space-y-3">
          <div className="bg-white p-4 rounded shadow">✅ Your post has been published successfully!</div>
          <div className="bg-white p-4 rounded shadow">💬 You have a new comment on your post.</div>
          <div className="bg-white p-4 rounded shadow">📢 A new feature update is available!</div>
        </div>
      </div>
    );
  }
  