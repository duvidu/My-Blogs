export default function Settings() {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">⚙️ Settings</h1>
        <p className="text-gray-600">Customize your preferences and manage your account.</p>
  
        <div className="mt-6">
          <label className="block mb-2">🔔 Notification Settings:</label>
          <select className="w-full p-2 border rounded">
            <option>Enable All</option>
            <option>Disable All</option>
            <option>Only Mentions</option>
          </select>
        </div>
  
        <div className="mt-6">
          <label className="block mb-2">🌙 Theme Mode:</label>
          <select className="w-full p-2 border rounded">
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>
      </div>
    );
  }
  