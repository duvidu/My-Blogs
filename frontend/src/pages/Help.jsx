export default function Help() {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">❓ Help & Support</h1>
        <p className="text-gray-600">Find answers to common questions below.</p>
  
        <div className="mt-6 space-y-4">
          <details className="bg-white p-4 rounded shadow">
            <summary className="cursor-pointer font-semibold">💡 How do I create a blog post?</summary>
            <p className="mt-2">Go to the "Write" section, fill in the details, and click "Publish".</p>
          </details>
  
          <details className="bg-white p-4 rounded shadow">
            <summary className="cursor-pointer font-semibold">🔑 How do I reset my password?</summary>
            <p className="mt-2">Go to "Settings" and select "Change Password".</p>
          </details>
  
          <details className="bg-white p-4 rounded shadow">
            <summary className="cursor-pointer font-semibold">📧 How do I contact support?</summary>
            <p className="mt-2">Email us at support@blogapp.com.</p>
          </details>
        </div>
      </div>
    );
  }
  